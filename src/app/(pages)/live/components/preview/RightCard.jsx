"use client"
import React, { useState } from 'react';
import PhoneInputWithVerify from './PhoneInputWithVerify';
import 'react-phone-input-2/lib/style.css';
import './RightCard.css';

const RightCard = () => {
    const [email, setEmail] = useState('');

    return (
        <div className="card">
            <p className="access-label">Access to this purchase will be sent to this email</p>
            <input
                type="email"
                className="input-field"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <PhoneInputWithVerify />

            <div className="price-section">
                <div className="subtotal" style={{ display: 'flex', justifyContent: "space-between" }}>
                    Sub Total <span><span className="strike">₹999</span> ₹199</span>
                </div>

                {/* Horizontal line separator */}
                <div style={{
                    height: '1px',
                    background: 'linear-gradient(to right, #ccc, #999)',
                    opacity: 0.4,
                    margin: '8px 0'
                }}></div>


                <div className="total" style={{ display: 'flex', justifyContent: "space-between" }}>
                    Total <strong>₹199</strong>
                </div>
            </div>


            <button className="get-now-button">Get it now</button>

            {/* <p className="terms-text">
        By continuing, you agree to Coding Hubhhh’s <a href="#">Terms</a> and <a href="#">Refund policy</a>.
      </p> */}
        </div>
    );
};

export default RightCard;
