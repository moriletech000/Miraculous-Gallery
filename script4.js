const sr = ScrollReveal({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true
});

sr.reveal('.hero4-text', { delay: 200, origin: 'top' });
sr.reveal('.hero4-img', { delay: 450, origin: 'right' });
sr.reveal('.icons4', { delay: 500, origin: 'left' });
sr.reveal('.scroll-down4', { delay: 500, origin: 'bottom' });

// Video popup
const watchBtn = document.querySelector('.ctaa4');
const videoOverlay = document.querySelector('#video-overlay');
const videoClose = document.querySelector('#video-close');
const videoFrame = document.querySelector('#video-frame');
const videoSrc = 'wayzz.mp4';

watchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    videoFrame.src = videoSrc;
    videoOverlay.classList.add('active');
    videoFrame.play();
});

videoClose.addEventListener('click', () => {
    videoOverlay.classList.remove('active');
    videoFrame.pause();
    videoFrame.currentTime = 0;
});

videoOverlay.addEventListener('click', (e) => {
    if (e.target === videoOverlay) {
        videoOverlay.classList.remove('active');
        videoFrame.pause();
        videoFrame.currentTime = 0;
    }
});

// Kwami popup
const discoverBtn = document.querySelector('#discover-btn');
const kwamisOverlay = document.querySelector('#kwami-overlay');
const kwamisClose = document.querySelector('#kwami-close');

discoverBtn.addEventListener('click', (e) => {
    e.preventDefault();
    kwamisOverlay.classList.add('active');
});

kwamisClose.addEventListener('click', () => {
    kwamisOverlay.classList.remove('active');
});

kwamisOverlay.addEventListener('click', (e) => {
    if (e.target === kwamisOverlay) kwamisOverlay.classList.remove('active');
});
