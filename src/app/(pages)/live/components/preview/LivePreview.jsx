import Image from 'next/image'
import React from 'react'
import './my-tailwind.css'
import RightCard from './RightCard'
import 'react-phone-number-input/style.css';

const LivePreview = () => {
    const formData = {
        title: "this is just demo data to show something ",
        description: "this is just a demo descrtiption,                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit libero soluta praesentium at dignissimos! Sit dolore numquam doloribus eius, nemo quasi assumenda debitis, sint sunt veniam beatae voluptatum facere dolorem, quod perferendis aut! Error id possimus perferendis culpa odit, saepe nemo ipsa unde dolorem veritatis. ",
        imgSrc: "https://picsum.photos/200/300"
    }
    return (
        <div className='LP-container'>

            <div className='web-cont'>

                <div className='url-container'>
                    <div className='url-text'>https://mysaas.com</div>
                </div>
                <div className='web-left ' >
                    <div className='image-container'>
                        <Image src={formData.imgSrc} width={300} height={200}></Image>
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
                    {/* <div className='card border '>
                        <div> access to this purchase will be sent to this email</div>
                        <div className='flex flex-col'>
                            <label htmlFor="email">email:</label>
                            <input id="email" type="email" className='myinput' />
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="email">mobile:</label>
                            <input id="mobile" type="text" className='myinput' />
                        </div>
                    </div> */}
                    <RightCard/>
                </div>
            </div>

        </div>
    )
}

export default LivePreview