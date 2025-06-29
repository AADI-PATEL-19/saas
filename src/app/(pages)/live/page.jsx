'use client';
import React, { useState } from 'react';
import './live.css';
import { EditorOutputProvider } from '../../../package/context/EditorOutputContext';


import PageDetailsForm from './components/tabs/PageDetailsForm';
import PaymentDetailsForm from './components/tabs/PaymentDetailsForm';
import AdvancedSettingsForm from './components/tabs/AdvancedSettingsForm';
import LivePreview from './components/preview/LivePreview';

export default function LivePage() {
  const [activeTab, setActiveTab] = useState('pageDetails');
const [formData, setFormData] = useState({
  title: '',
  description: '',
  cta: '',
  email: '',
  phone: '',
  heroImage: '',
  heroFileName: '',
  heroFileSize: '',
  heroType: '', // 'image' or 'video'
});


  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
        <EditorOutputProvider>

    <div className="live-container">
      <div className="left-panel">
        <div className="tabs">
          <button className={activeTab === 'pageDetails' ? 'active' : ''} onClick={() => setActiveTab('pageDetails')}>
            Page Details
          </button>
          <button className={activeTab === 'paymentDetails' ? 'active' : ''} onClick={() => setActiveTab('paymentDetails')}>
            Payment Page Details
          </button>
          <button className={activeTab === 'advancedSettings' ? 'active' : ''} onClick={() => setActiveTab('advancedSettings')}>
            Advanced Settings
          </button>
        </div>

        <div className="form-section">
          {activeTab === 'pageDetails' && <PageDetailsForm formData={formData} onChange={handleChange} setFormData={setFormData} />}
          {activeTab === 'paymentDetails' && <PaymentDetailsForm formData={formData} onChange={handleChange} />}
          {activeTab === 'advancedSettings' && <AdvancedSettingsForm />}
          
        </div>
      </div>

      <div className="right-preview">
        
        <LivePreview formData={formData} />
      </div>
    </div>
    </EditorOutputProvider>

  );
}
