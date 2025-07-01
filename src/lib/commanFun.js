 export const isValidVideoUrl = (url) => {
  try {
    const parsed = new URL(url);
    const formatOk = ['.mp4', '.webm', '.ogg', '.mov', '.m3u8', '.mpd']
      .some(ext => parsed.pathname.toLowerCase().includes(ext));

    const embedHosts = [
      'youtube.com',
      'youtu.be',
      'vimeo.com',
      'player.vimeo.com',
      'dailymotion.com',
      'dai.ly',
      'loom.com',
      'wistia.com',
      'video.cloudflarestream.com'
    ];

    const hostOk = embedHosts.includes(parsed.hostname.replace('www.', ''));

    return formatOk || hostOk;
  } catch {
    return false;
  }
};