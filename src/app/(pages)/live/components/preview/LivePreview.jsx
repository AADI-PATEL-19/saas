// import Image from 'next/image';
// import React, { memo, useEffect, useRef } from 'react';
// import './my-tailwind.css';
// import RightCard from './RightCard';
// import { useEditorOutput } from '../../../../../package/context/EditorOutputContext';
// import 'react-phone-number-input/style.css';
// import { innerHTML } from 'diffhtml';

// const LivePreview = memo(({ formData }) => {
//     const { html } = useEditorOutput();
//     const descRef = useRef(null);
//     const lastHtmlRef = useRef('');
//     useEffect(() => {
//         if (descRef.current && html && html !== lastHtmlRef.current) {
//             // Patch only the changed content (diff-aware update)
//             innerHTML(descRef.current, html);
//             lastHtmlRef.current = html;
//         }
//     }, [html]);

//     return (
//         <div className='LP-container' style={{position:"relative"}}>
//                      <span style={{color:"white", position:"absolute", top:50, left:100}}>previews</span>       

//             <div className='web-cont'>
//                 <div className='url-container'>
//                     <div className='url-text'>https://mysaas.com</div>
//                 </div>

//                 <div className='web-left '>
//                     <div className='image-container'>
//                         <Image
//                             key={formData.heroImage || 'fallback'}
//                             src={formData.heroImage || '/placeholder.jpg'}
//                             width={1280}
//                             height={720}
//                             className='hero-image'
//                             alt='Hero Image'
//                             priority
//                         />
//                     </div>

//                     <div className='title'>{formData.title?formData.title:"This is Demo Title"}</div>


//                     <div className='desc-title'>What you will get:</div>
//                     <div className="description-wrapper ">

//                         <div className='description' ref={descRef}>

//                         </div>
//                     </div>
//                 </div>

//                 <div className='web-right'>
//                     <RightCard />
//                 </div>
//             </div>
//         </div>
//     );
// });

// export default LivePreview;


// LivePreview.jsx
import Image from 'next/image';
import React, { memo, useEffect, useRef } from 'react';
import RightCard from './RightCard';
import { useEditorOutput } from '../../../../../package/context/EditorOutputContext';
import { innerHTML } from 'diffhtml';
import './LivePreview.css';


import { useState } from 'react';


const LivePreview = memo(({ formData }) => {
    const [videoLoading, setVideoLoading] = useState(true);

    const { html } = useEditorOutput();
    const descRef = useRef(null);
    const lastHtmlRef = useRef('');

    useEffect(() => {
        if (descRef.current && html && html !== lastHtmlRef.current) {
            innerHTML(descRef.current, html);
            lastHtmlRef.current = html;
        }
    }, [html]);

    const extractYouTubeID = (url) => {
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#&?]*).*/;
        const match = url.match(regExp);
        return match && match[2].length === 11 ? match[2] : null;
    };

    const extractDailymotionID = (url) => {
        const match = url.match(/(?:dai\.ly\/|video\/)([a-zA-Z0-9]+)/);
        return match ? match[1] : null;
    };


    return (
        <div className="lp-wrapper">
            <div className="preview-header">Preview</div>
            <div className="preview-url">
                <span>https://mysaas.com</span>
            </div>
            <div className="web-container">


                <div className="preview-left">
                    <div className="hero-section">
                        {formData.heroType === 'video' ? (
                            <>
                                {videoLoading && (
                                    <div className="skeleton-box h-[400px] w-full rounded-xl bg-gray-200 animate-pulse mb-4" />
                                )}

                                {formData.heroImage.includes('youtube.com') || formData.heroImage.includes('youtu.be') ? (
                                    <iframe
                                        width="100%"
                                        height="400"
                                        src={`https://www.youtube.com/embed/${extractYouTubeID(formData.heroImage)}`}
                                        frameBorder="0"
                                        allow="autoplay; encrypted-media"
                                        allowFullScreen
                                        className="rounded-xl"
                                        onLoad={() => setVideoLoading(false)}
                                    />
                                ) : formData.heroImage.includes('dai.ly') ? (
                                    <iframe
                                        width="100%"
                                        height="400"
                                        src={`https://www.dailymotion.com/embed/video/${extractDailymotionID(formData.heroImage)}`}
                                        frameBorder="0"
                                        allow="autoplay; fullscreen"
                                        allowFullScreen
                                        className="rounded-xl"
                                        onLoad={() => setVideoLoading(false)}
                                    />
                                ) : (
                                    <video
                                        width="100%"
                                        height="400"
                                        controls
                                        className="rounded-xl"
                                        onLoadStart={() => setVideoLoading(true)}
                                        onLoadedData={() => setVideoLoading(false)}
                                    >
                                        <source src={formData.heroImage} />
                                        Your browser does not support the video tag.
                                    </video>
                                )}
                            </>
                        ) : (
                            <Image
                                key={formData.heroImage || 'fallback'}
                                src={formData.heroImage || '/placeholder.jpg'}
                                width={1280}
                                height={720}
                                alt="Hero"
                                className="hero-image"
                                priority
                            />
                        )}
                    </div>


                    <h1 className="preview-title">
                        {formData.title || 'This is a Demo Title'}
                    </h1>

                    <h2 className="preview-subtitle">What you will get</h2>
                    <div className="preview-description" ref={descRef}></div>
                </div>

                <div className="preview-right">
                    <RightCard />
                </div>
            </div>
        </div>
    );
});

export default LivePreview;
