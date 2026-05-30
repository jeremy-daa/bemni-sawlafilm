'use client';

import { useState, useEffect } from 'react';
import { CheckCircle2, AlertCircle, Trash2, Save, Image as ImageIcon } from 'lucide-react';
import Image from 'next/image';

interface ImageRecord {
  _id: string;
  id: string;
  originalName: string;
  category?: string;
  subcategory?: string;
  assets: {
    thumb: string;
    medium: string;
    full: string;
  };
  altText?: string;
  seoDescription?: string;
  labelName: string;
  altDescription: string;
  flaggedForDeletion: boolean;
  isLabeled: boolean;
}

export default function LabelingDashboard() {
  const [images, setImages] = useState<ImageRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  
  // Selected image state
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Form state for the currently selected image
  const [formData, setFormData] = useState({
    labelName: '',
    altDescription: '',
    category: '',
    subcategory: '',
    flaggedForDeletion: false,
  });
  const [saving, setSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      setLoading(true);
      const res = await fetch('/api/labeling');
      const data = await res.json();
      
      if (data.success) {
        setImages(data.data);
        if (data.data.length > 0) {
          initForm(data.data[0]);
        }
      } else {
        setError(data.error || 'Failed to fetch images');
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const initForm = (record: ImageRecord) => {
    // Generate a clean initial slug
    const rawName = record.labelName || record.originalName || record.id || '';
    const cleanSlug = rawName
      .toLowerCase()
      .replace(/\.[^/.]+$/, "") // Remove file extension like .jpg or .png
      .replace(/[\s_]+/g, '-')   // Replace spaces and underscores with hyphens
      .replace(/[^a-z0-9-]/g, ''); // Remove all other invalid characters

    setFormData({
      labelName: cleanSlug,
      altDescription: record.altDescription || record.seoDescription || record.altText || '',
      category: record.category || '',
      subcategory: record.subcategory || '',
      flaggedForDeletion: record.flaggedForDeletion || false,
    });
    setSaveSuccess(false);
  };

  const handleSelectImage = (index: number) => {
    setCurrentIndex(index);
    initForm(images[index]);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setSaveSuccess(false);

    try {
      const currentImage = images[currentIndex];
      const payload = {
        id: currentImage.id,
        ...formData
      };

      const res = await fetch('/api/labeling', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (data.success) {
        setSaveSuccess(true);
        // Update local state
        const updatedImages = [...images];
        updatedImages[currentIndex] = {
          ...updatedImages[currentIndex],
          ...formData,
          isLabeled: true,
        };
        setImages(updatedImages);
        
        // Auto advance after short delay if not flagged for deletion
        setTimeout(() => {
          if (currentIndex < images.length - 1) {
            handleSelectImage(currentIndex + 1);
          }
        }, 1000);
      } else {
        alert('Failed to save: ' + data.error);
      }
    } catch (err: any) {
      alert('Error saving: ' + err.message);
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
        <div className="bg-red-50 text-red-600 p-6 rounded-lg max-w-lg w-full flex items-center space-x-3 border border-red-200">
          <AlertCircle className="h-6 w-6" />
          <p>{error}</p>
        </div>
      </div>
    );
  }

  const labeledCount = images.filter(img => img.isLabeled).length;
  const totalCount = images.length;
  const progressPercent = totalCount === 0 ? 0 : Math.round((labeledCount / totalCount) * 100);
  const currentImage = images[currentIndex];

  return (
    <div className="min-h-screen bg-cream font-sans">
      {/* Hero Section */}
      <div className="bg-ink border-b border-charcoal relative z-10 pt-16 md:pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-cream tracking-tight mb-4">
              Asset Labeling Center
            </h1>
            <p className="text-lg text-fog mb-8 leading-relaxed">
              Welcome to the asset management dashboard. Your objective is to review our image library and provide concise, keyword-aware descriptions. By writing specific, high-quality SEO alt text, you ensure our portfolio ranks well on search engines and remains perfectly organized. You can also flag any duplicates or poor-quality shots for deletion.
            </p>
          </div>
          
          <div className="bg-ash p-6 rounded-xl border border-graphite flex flex-col md:flex-row md:items-center md:justify-between gap-6 max-w-4xl">
            <div>
              <h3 className="text-sm font-semibold text-cream uppercase tracking-wider mb-1">Your Progress</h3>
              <p className="text-sm text-silver">Every labeled asset helps improve our digital footprint.</p>
            </div>
            <div className="w-full md:w-96">
              <div className="flex justify-between text-sm font-bold mb-2">
                <span className="text-fog">{labeledCount} / {totalCount} Labeled</span>
                <span className="text-ember-glow">{progressPercent}%</span>
              </div>
              <div className="w-full bg-charcoal rounded-full h-3 overflow-hidden">
                <div 
                  className="bg-ember h-3 rounded-full transition-all duration-500 ease-out" 
                  style={{ width: `${progressPercent}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Sidebar / Image List */}
          <div className="lg:col-span-4 flex flex-col h-[calc(100vh-180px)]">
            <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
              <ImageIcon className="w-5 h-5 mr-2 text-gray-500" />
              Assets Queue
            </h2>
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-y-auto flex-1">
              <ul className="divide-y divide-gray-100">
                {images.map((img, idx) => (
                  <li 
                    key={img.id} 
                    onClick={() => handleSelectImage(idx)}
                    className={`p-3 cursor-pointer hover:bg-indigo-50 transition-colors flex items-center gap-4 ${currentIndex === idx ? 'bg-indigo-50 border-l-4 border-indigo-600' : 'border-l-4 border-transparent'}`}
                  >
                    <div className="relative w-28 h-20 rounded-md overflow-hidden bg-gray-200 flex-shrink-0 shadow-sm border border-gray-300">
                      <Image 
                        src={`/assets/images${img.assets.medium}`} 
                        alt="preview" 
                        fill
                        className="object-cover"
                        unoptimized
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className={`text-sm font-medium truncate ${currentIndex === idx ? 'text-indigo-900' : 'text-gray-900'}`}>
                        {img.labelName || img.originalName}
                      </p>
                      <p className="text-xs text-gray-500 truncate">{img.id}</p>
                    </div>
                    <div>
                      {img.flaggedForDeletion ? (
                        <Trash2 className="w-4 h-4 text-red-500" />
                      ) : img.isLabeled ? (
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                      ) : null}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Main Workspace */}
          <div className="lg:col-span-8">
            {currentImage ? (
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                {/* Image Preview */}
                <div className="relative w-full h-80 bg-gray-100 border-b border-gray-200">
                  <Image 
                    src={`/assets/images${currentImage.assets.medium}`} 
                    alt="preview"
                    fill
                    className="object-contain"
                    unoptimized
                  />
                </div>
                
                {/* Form */}
                <form onSubmit={handleSave} className="p-6 md:p-8">
                  <div className="space-y-6">
                    
                    {/* Category & Subcategory Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="category" className="block text-sm font-semibold text-gray-700 mb-1">
                          Category
                        </label>
                        <select
                          id="category"
                          value={formData.category}
                          onChange={(e) => setFormData({...formData, category: e.target.value.toLowerCase()})}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all bg-white"
                          required
                        >
                          <option value="">Select a category...</option>
                          <option value="cultural">Cultural</option>
                          <option value="nature">Nature</option>
                          <option value="production">Production</option>
                          <option value="portrait">Portrait</option>
                          <option value="film">Film</option>
                          {formData.category && !['cultural', 'nature', 'production', 'portrait', 'film'].includes(formData.category.toLowerCase()) && (
                            <option value={formData.category.toLowerCase()}>{formData.category} (Current)</option>
                          )}
                        </select>
                      </div>
                      <div>
                        <label htmlFor="subcategory" className="block text-sm font-semibold text-gray-700 mb-1">
                          Subcategory
                        </label>
                        <select
                          id="subcategory"
                          value={formData.subcategory}
                          onChange={(e) => setFormData({...formData, subcategory: e.target.value.toLowerCase()})}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all bg-white"
                        >
                          <option value="">Select a subcategory...</option>
                          <option value="aerial">Aerial</option>
                          <option value="documentary">Documentary</option>
                          <option value="ethiopian landscape">Ethiopian Landscape</option>
                          <option value="ethiopian wolf">Ethiopian Wolf</option>
                          <option value="film crew">Film Crew</option>
                          <option value="geological">Geological</option>
                          <option value="mursi tribe">Mursi Tribe</option>
                          <option value="portrait">Portrait</option>
                          <option value="volcanic landscape">Volcanic Landscape</option>
                          <option value="wildlife">Wildlife</option>
                          {formData.subcategory && !['aerial', 'documentary', 'ethiopian landscape', 'ethiopian wolf', 'film crew', 'geological', 'mursi tribe', 'portrait', 'volcanic landscape', 'wildlife'].includes(formData.subcategory.toLowerCase()) && (
                            <option value={formData.subcategory.toLowerCase()}>{formData.subcategory} (Current)</option>
                          )}
                        </select>
                      </div>
                    </div>

                    {/* Image Name Field */}
                    <div>
                      <label htmlFor="labelName" className="block text-sm font-semibold text-gray-700 mb-1">
                        New Filename / Slug
                      </label>
                      <input
                        type="text"
                        id="labelName"
                        value={formData.labelName}
                        onChange={(e) => {
                          // Auto-format: lowercase, replace spaces and underscores with hyphens, remove invalid chars
                          const formatted = e.target.value
                            .toLowerCase()
                            .replace(/[\s_]+/g, '-')
                            .replace(/[^a-z0-9-]/g, '');
                          setFormData({...formData, labelName: formatted});
                        }}
                        pattern="^[a-z0-9]+(?:-[a-z0-9]+)*$"
                        title="Only lowercase letters, numbers, and hyphens allowed."
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all font-mono text-sm"
                        placeholder="e.g. mursi-tribe-member"
                        required
                      />
                      <p className="mt-1.5 text-xs text-gray-500">
                        <strong>Formatting Tip:</strong> This will be used as the new folder/file name. It automatically converts spaces to hyphens.
                      </p>
                    </div>

                    {/* SEO Description Field */}
                    <div>
                      <div className="flex justify-between items-end mb-1">
                        <label htmlFor="altDescription" className="block text-sm font-semibold text-gray-700">
                          Alt Description (SEO)
                        </label>
                      </div>
                      <textarea
                        id="altDescription"
                        rows={4}
                        value={formData.altDescription}
                        onChange={(e) => setFormData({...formData, altDescription: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all resize-none"
                        placeholder="Write a descriptive alt text..."
                        required
                      />
                      
                      {/* SEO Hint Alert */}
                      <div className="mt-3 bg-blue-50 border border-blue-100 rounded-lg p-3 flex items-start gap-3">
                        <AlertCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                        <div className="text-sm text-blue-800">
                          <strong className="font-semibold">SEO Tip:</strong> Rewrite as concise, keyword-aware descriptions: "Sawla Films crew filming documentary in Ethiopia's Danakil Depression." Short, specific, useful.
                        </div>
                      </div>
                    </div>

                    {/* Flag for Deletion */}
                    <div className="flex items-center p-4 bg-red-50 border border-red-100 rounded-lg">
                      <input
                        id="flaggedForDeletion"
                        type="checkbox"
                        checked={formData.flaggedForDeletion}
                        onChange={(e) => setFormData({...formData, flaggedForDeletion: e.target.checked})}
                        className="w-5 h-5 text-red-600 bg-white border-gray-300 rounded focus:ring-red-500 cursor-pointer"
                      />
                      <label htmlFor="flaggedForDeletion" className="ml-3 block text-sm font-medium text-red-800 cursor-pointer select-none">
                        Flag this image for deletion (Duplicate / Poor Quality)
                      </label>
                    </div>

                    {/* Actions */}
                    <div className="pt-4 border-t border-gray-100 flex items-center justify-end gap-4">
                      {saveSuccess && (
                        <span className="text-sm font-medium text-green-600 flex items-center gap-1 animate-pulse">
                          <CheckCircle2 className="w-4 h-4" />
                          Saved successfully
                        </span>
                      )}
                      
                      <button
                        type="button"
                        onClick={() => {
                          if (currentIndex < images.length - 1) {
                            handleSelectImage(currentIndex + 1);
                          }
                        }}
                        className="px-5 py-2.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        Skip
                      </button>
                      
                      <button
                        type="submit"
                        disabled={saving}
                        className="px-6 py-2.5 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 flex items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        {saving ? (
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        ) : (
                          <Save className="w-4 h-4" />
                        )}
                        {saving ? 'Saving...' : 'Save & Next'}
                      </button>
                    </div>

                  </div>
                </form>
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 h-full flex flex-col items-center justify-center p-12 text-center">
                <CheckCircle2 className="w-16 h-16 text-green-400 mb-4" />
                <h3 className="text-xl font-bold text-gray-900">All caught up!</h3>
                <p className="text-gray-500 mt-2 max-w-sm mx-auto">
                  You have successfully processed all images in the queue.
                </p>
              </div>
            )}
          </div>
          
        </div>
      </main>
    </div>
  );
}
