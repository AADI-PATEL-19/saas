import React from 'react';

export default function PageDetailsForm({ formData, onChange }) {
  return (
    <>
      <label>Payment Page Title</label>
      <input type="text" name="title" value={formData.title} onChange={onChange} />

      <label>Description</label>
      <textarea name="description" value={formData.description} onChange={onChange} />

      <label>CTA Button Text</label>
      <input type="text" name="cta" value={formData.cta} onChange={onChange} />

      {/* In future: FAQ, Testimonials, Cover Image */}
    </>
  );
}
