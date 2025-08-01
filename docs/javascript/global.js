AOS.init({
    once: true,
    duration: 1000
});

// home

const playPauseButton = document.getElementById('playPauseButton');
const playIcon = document.getElementById('playIcon');
const pauseIcon = document.getElementById('pauseIcon');
const video = document.getElementById('background-video');

window.addEventListener('DOMContentLoaded', () => {
    if (video.paused) {
        playIcon.classList.remove('!hidden');
        pauseIcon.classList.add('!hidden');
    } else {
        playIcon.classList.add('!hidden');
        pauseIcon.classList.remove('!hidden');
    }
});

playPauseButton.addEventListener('click', () => {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }

    playIcon.classList.toggle('!hidden');
    pauseIcon.classList.toggle('!hidden');
});

// Popup functionality
const showPopupButton = document.getElementById('showPopupButton');
const popup = document.getElementById('popup');
const closePopupButton = document.getElementById('closePopup');

showPopupButton.addEventListener('click', () => {
    popup.classList.add('active');
});

closePopupButton.addEventListener('click', () => {
    popup.classList.remove('active');
});

window.addEventListener('click', (event) => {
    if (event.target === popup) {
        popup.classList.remove('active');
    }
});