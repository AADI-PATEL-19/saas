import React from 'react';

export default function LivePreview({ formData }) {
  return (
    <div className="preview-card">
      {formData.heroImage && (
        <div className="preview-hero">
          {formData.heroImage.includes('video') ? (
            <video src={formData.heroImage} controls style={{ width: '100%' }} />
          ) : (
            <img src={formData.heroImage} alt="Hero" style={{ width: '100%' }} />
          )}
        </div>
      )}

      <h3>{formData.title || 'Your Payment Page Title'}</h3>
      <p>{formData.description || 'This is your description preview.'}</p>
      <hr />
      <p><strong>Email:</strong> {formData.email || 'example@email.com'}</p>
      <p><strong>Phone:</strong> {formData.phone || '+91 9876543210'}</p>
      <button className="preview-btn">{formData.cta || 'Get it now'}</button>
    </div>
  );
}
