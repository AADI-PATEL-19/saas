import Image from 'next/image'
import React from 'react'
import './my-tailwind.css'
import RightCard from './RightCard'
import 'react-phone-number-input/style.css';

const LivePreview = ({ formData }) => {
    
    console.log(formData)
    return (
        <div className='LP-container'>
            <div className='web-cont'>
                <div className='url-container'>
                    <div className='url-text'>https://mysaas.com</div>
                </div>
                <div className='web-left ' >
                    <div className='image-container'>
                        <Image
                            src={formData.heroImage}
                            width={1280}
                            height={720}
                            className="hero-image"
                            alt="Hero Image"
                        />
                    </div>
                    <div className='title'>
                        {formData.title}
                    </div>
                    <div className='desc-title'>pro desc</div>
                    <div className='description'>
                        {formData.description}
                    </div>
                </div>

                <div className='web-right'>
                    <RightCard />
                </div>
            </div>

        </div>
    )
}

export default LivePreview