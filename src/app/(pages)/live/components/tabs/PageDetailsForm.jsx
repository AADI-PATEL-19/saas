import React from 'react';
import HeroImageUpload from './components/HeroImageUpload'
import dynamic from 'next/dynamic';
const PlaygroundApp = dynamic(() => import('../../../../../package/App'), {
  ssr: false, // This disables server-side rendering for the component
});
import '../../../../../package/index.css'

export default function PaymentDetailsForm({ formData, onChange, setFormData }) {
  return (
    <>
        <label>Payment Page Title</label>
      <input type="text" name="title" value={formData.title} onChange={onChange} />


      <HeroImageUpload formData={formData} setFormData={setFormData} /> {/* NEW */}

      <label>Description</label>
      <PlaygroundApp/>

      <label>CTA Button Text</label>
      <input type="text" name="cta" value={formData.cta} onChange={onChange} />

    </>
  );
}
