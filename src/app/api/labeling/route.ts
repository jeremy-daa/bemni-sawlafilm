import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';
import ImageAsset from '@/lib/models/ImageAsset';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    await connectToDatabase();

    // Check if we have any records in the DB
    let images = await ImageAsset.find({}).lean();

    // If database is empty, seed it from metadata.json
    if (images.length === 0) {
      const metadataPath = path.join(process.cwd(), 'src', 'data', 'metadata.json');
      if (fs.existsSync(metadataPath)) {
        const fileContent = fs.readFileSync(metadataPath, 'utf8');
        const metadata = JSON.parse(fileContent);
        
        if (metadata.records && metadata.records.length > 0) {
          const recordsToInsert = metadata.records.map((record: any) => ({
            ...record,
            labelName: record.originalName || record.slug,
            altDescription: record.altText || record.seoDescription || '',
            flaggedForDeletion: false,
            isLabeled: false
          }));

          await ImageAsset.insertMany(recordsToInsert);
          images = await ImageAsset.find({}).lean();
        }
      }
    }

    // Return the images sorted by whether they are labeled, then by ID
    images.sort((a: any, b: any) => {
      if (a.isLabeled === b.isLabeled) {
        return a.id.localeCompare(b.id);
      }
      return a.isLabeled ? 1 : -1;
    });

    return NextResponse.json({ success: true, data: images });
  } catch (error: any) {
    console.error('Error in GET /api/labeling:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const body = await request.json();
    const { id, labelName, altDescription, flaggedForDeletion, category, subcategory } = body;

    if (!id) {
      return NextResponse.json({ success: false, error: 'ID is required' }, { status: 400 });
    }

    await connectToDatabase();

    const updatedImage = await ImageAsset.findOneAndUpdate(
      { id },
      {
        $set: {
          labelName,
          altDescription,
          flaggedForDeletion,
          category,
          subcategory,
          isLabeled: true,
        },
      },
      { new: true }
    );

    if (!updatedImage) {
      return NextResponse.json({ success: false, error: 'Image not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true, data: updatedImage });
  } catch (error: any) {
    console.error('Error in PUT /api/labeling:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
