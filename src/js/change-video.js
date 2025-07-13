window.addEventListener('load', () => {
  const video = document.getElementById('responsiveVideo');
  const source = document.getElementById('videoSource');

  function setVideoSource() {
    const width = window.innerWidth;
    const newSrc = width <= 960
      ? '/video/video-960px.mp4'
      : '/video/video-1160px.mp4';

    if (source.getAttribute('src') !== newSrc) {
      source.src = newSrc;
      video.load();
      video.play().catch(err => {
        console.warn('Автовоспроизведение заблокировано:', err);
      });
    }
  }

  setVideoSource();

  let resizeTimeout;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(setVideoSource, 150);
  });
});