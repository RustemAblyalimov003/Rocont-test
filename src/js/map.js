document.addEventListener('DOMContentLoaded', () => {
    const mapPlaceholder = document.getElementById('contacts-map');
    if (!mapPlaceholder) return;

    const observer = new IntersectionObserver((entries, obs) => {
      if (entries[0].isIntersecting) {
        const script = document.createElement('script');
        script.src = 'https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A91cfd0d0bbeabc1b1ee9ed5614815ba1207afa4f5719063f96316fd1d52d4ac7&id=contacts-map&width=545&height=447&lang=ru_RU&scroll=false';
        script.async = true;
        document.body.appendChild(script);
        obs.disconnect();
      }
    });

    observer.observe(mapPlaceholder);
});
