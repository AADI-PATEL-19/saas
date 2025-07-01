import Image from 'next/image';
import React, { memo, useEffect, useRef, useState } from 'react';
import RightCard from './RightCard';
import { useEditorOutput } from '../../../../../package/context/EditorOutputContext';
import { innerHTML } from 'diffhtml';
import './LivePreview.css';
import {isValidVideoUrl} from '../../../../../lib/commanFun'

const LivePreview = memo(({ formData }) => {
const [videoLoading, setVideoLoading] = useState(true);
const [videoError, setVideoError] = useState(false);
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
    try {
      const parsedUrl = new URL(url);
      const hostname = parsedUrl.hostname;

      if (hostname.includes('youtu.be')) {
        return parsedUrl.pathname.split('/')[1].split('?')[0];
      }

      if (hostname.includes('youtube.com')) {
        const params = parsedUrl.searchParams;
        if (params.has('v')) return params.get('v');
        const paths = parsedUrl.pathname.split('/');
        return paths.includes('embed') || paths.includes('shorts')
          ? paths[paths.length - 1].split('?')[0]
          : null;
      }
    } catch {
      return null;
    }
  };

  const extractDailymotionID = (url) => {
    const match = url.match(/(?:dai\.ly\/|video\/)([a-zA-Z0-9]+)/);
    return match ? match[1] : null;
  };

const renderHero = () => {
  const { imageFile, videoUrl } = formData;

  const youtubeId = extractYouTubeID(videoUrl);
  const dailymotionId = extractDailymotionID(videoUrl);
  const isVideoValid = isValidVideoUrl(videoUrl);

  // Show skeleton while video is loading or error
  if ((videoLoading || videoError) && !youtubeId && !dailymotionId && isVideoValid) {
    return (
      <div className="skeleton-box" ></div>
    );
  }

  if (youtubeId) {
    return (
      <div className="video-container">
        <iframe
          key={videoUrl}
          src={`https://www.youtube.com/embed/${youtubeId}`}
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="YouTube video"
          className="video-frame"
        />
      </div>
    );
  }

  if (dailymotionId) {
    return (
      <div className="video-container">
        <iframe
          key={videoUrl}
          src={`https://www.dailymotion.com/embed/video/${dailymotionId}`}
          allow="autoplay; fullscreen"
          allowFullScreen
          title="Dailymotion video"
          className="video-frame"
        />
      </div>
    );
  }

  if (isVideoValid) {
    return (
      <div className="video-container">
        <video
          key={videoUrl}
          controls
          onLoadedData={() => setVideoLoading(false)}
          onError={() => {
            setVideoError(true);
            setVideoLoading(false);
          }}
        >
          <source src={videoUrl} />
          Your browser does not support the video tag.
        </video>
      </div>
    );
  }

  return (
    <div className="image-container">
      <Image
        key={imageFile || 'placeholder'}
        src={imageFile || '/placeholder.jpg'}
        alt="Hero"
        fill
        style={{ objectFit: 'cover' }}
        className="hero-image"
        priority
      />
    </div>
  );
};



  return (
    <div className="lp-wrapper">
      <div className="preview-header">Preview</div>
      <div className="preview-url">
        <span>https://mysaas.com</span>
      </div>
      <div className="web-container">
        <div className="preview-left">
          <div className="hero-section">{renderHero()}</div>

          <h1 className="preview-title">
            {formData.title || 'This is a Demo Title'}
          </h1>

          <h2 className="preview-subtitle">What you will get</h2>
          <div className="preview-description" ref={descRef}></div>
        </div>

        <div className="preview-right">
          <RightCard />
          <div>
            <div className='copy-link'>
              Copy link
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default LivePreview;
