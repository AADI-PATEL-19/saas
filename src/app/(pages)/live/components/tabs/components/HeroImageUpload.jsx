'use client';
import React, { useRef, useState } from 'react';
import './HeroImageUpload.css';
import {isValidVideoUrl} from '../../../../../../lib/commanFun'

export default function HeroImageUpload({ formData, setFormData }) {
  const fileInputRef = useRef();
  const [isDragging, setIsDragging] = useState(false);
  const [videoInput, setVideoInput] = useState('');

  const handleFileUpload = (file) => {
    const fileUrl = URL.createObjectURL(file);

    setFormData((prev) => ({
      ...prev,
      imageFile: fileUrl,
      videoUrl: '', // Clear any existing video URL
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





  const handleSetVideoUrl = () => {
    if (!isValidVideoUrl(videoInput)) {
      alert('Please enter a valid video URL.');
      return;
    }

    setFormData((prev) => ({
      ...prev,
      videoUrl: videoInput,
      imageFile: '', // Clear image if video is being set
      heroFileName: '',
      heroFileSize: '',
    }));
  };

  const handleRemove = () => {
    setFormData((prev) => ({
      ...prev,
      imageFile: '',
      videoUrl: '',
      heroFileName: '',
      heroFileSize: '',
    }));
    setVideoInput('');
  };

  const hasMedia = formData.imageFile || formData.videoUrl;

  return (
    <div className="hero-upload-box">
      <label className="required-label">Cover Image/Video *</label>

      {hasMedia ? (
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
    value={videoInput}
    onChange={(e) => setVideoInput(e.target.value)}
  />
  <button onClick={handleSetVideoUrl} className="video-url-submit-btn">
    Add
  </button>
</div>

        </>
      )}
    </div>
  );
}
