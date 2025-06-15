'use client';
import React, { useRef, useState } from 'react';

export default function HeroImageUpload({ formData, setFormData }) {
  const fileInputRef = useRef();
  const [isDragging, setIsDragging] = useState(false);

  const handleFileUpload = (file) => {
    const imageUrl = URL.createObjectURL(file);
    setFormData((prev) => ({
      ...prev,
      heroImage: imageUrl,
      heroFileName: file.name,
      heroFileSize: (file.size / 1024).toFixed(2),
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) handleFileUpload(file);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) handleFileUpload(file);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleUrlChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      heroImage: e.target.value,
      heroFileName: '',
      heroFileSize: '',
    }));
  };

  const handleRemove = () => {
    setFormData((prev) => ({
      ...prev,
      heroImage: '',
      heroFileName: '',
      heroFileSize: '',
    }));
  };

  return (
    <div className="hero-upload-box">
      <label className="required-label">Cover Image/Video *</label>

      {formData.heroImage ? (
        <div className="file-preview-box">
          <div className="file-preview-icon">🖼️</div>
          <div className="file-details">
            <div className="file-name">{formData.heroFileName || 'From URL'}</div>
            <div className="file-size">
              {formData.heroFileSize ? `${formData.heroFileSize} KB` : 'External URL'}
            </div>
          </div>
          <button className="file-remove-btn" onClick={handleRemove}>🗑️</button>
        </div>
      ) : (
        <>
          <div
            className={`upload-container ${isDragging ? 'dragging' : ''}`}
            onClick={() => fileInputRef.current.click()}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
          >
            <input
              type="file"
              accept="image/*,video/*"
              style={{ display: 'none' }}
              ref={fileInputRef}
              onChange={handleFileChange}
            />
            <div className="upload-box">
              <div className="upload-icon">📁</div>
              <p><span className="upload-text">Upload</span> or drag & drop</p>
              <p className="upload-subtext">1280 x 720 (16:9) recommended; Up to 10 MB each</p>
            </div>
          </div>

          <div className="or-divider">OR</div>

          <div className="video-url-input">
            <input
              type="text"
              placeholder="Enter video URL"
              value={formData.heroImage || ''}
              onChange={handleUrlChange}
            />
          </div>
        </>
      )}
    </div>
  );
}
