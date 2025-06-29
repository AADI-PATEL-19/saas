import { useRef, useState, useEffect } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css'; // Make sure this is included
import './PhoneInputWithVerify.css'
export default function PhoneInputWithVerify() {
  const [phone, setPhone] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Toggle class on dropdown open/close
  const handleDropdownToggle = () => {
    setDropdownOpen(prev => !prev);
  };

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target)
      ) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="phone-input-wrapper" ref={dropdownRef}>
      <PhoneInput
        country={'in'}
        value={phone}
        onChange={setPhone}
        inputClass="phone-field-custom"
        containerClass={`phone-container ${dropdownOpen ? 'open' : ''}`}
        buttonClass="flag-dropdown-custom"
        inputProps={{ placeholder: 'Add your phone number' }}
        onClick={handleDropdownToggle}
      />
      <button className="verify-button-inside">Verify</button>
    </div>
  );
}