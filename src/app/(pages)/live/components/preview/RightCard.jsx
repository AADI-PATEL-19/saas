"use client"
import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import PhoneInputWithVerify from './PhoneInputWithVerify'
import 'react-phone-input-2/lib/style.css';
import './LivePreview.css';

const RightCard = () => {
    const [email, setEmail] = useState(''); const [phone, setPhone] = useState('');

    return (
    <div className="card">
        <p className="access-label">Access to this purchase will be sent to this email</p>
        <input type="email" className="input-field" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} />
        <PhoneInputWithVerify />

        <div className="price-section">
            <div className="subtotal">
                Sub Total <span className="strike">₹999</span> ₹199
            </div>
            <div className="total">Total <strong>₹199</strong></div>
        </div>

        <p className="terms-text">
            By continuing, you agree to Coding Hubhhh’s <a href="#">Terms</a> and <a href="#">Refund policy</a>.
        </p>
    </div>

    );
};

export default RightCard;