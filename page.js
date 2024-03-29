document.addEventListener('DOMContentLoaded', function () {
    const enterFullscreenButton = document.getElementById('enterFullscreen');
    const img = document.querySelector('.homeimage2');

    const toggleFullscreen = () => {
        if (!document.fullscreenElement) {
            img.requestFullscreen().catch(err => {
                console.error(`Error attempting to enable full-screen mode: ${err.message}`);
            });
        } else {
            document.exitFullscreen();
        }
    };

    enterFullscreenButton.addEventListener('click', () => {
        toggleFullscreen();
    });

    const onChange = () => {
        const isFullscreen = document.fullscreenElement === img;
        enterFullscreenButton.style.display = isFullscreen ? 'none' : 'block';
    };

    document.addEventListener('fullscreenchange', onChange);
});

document.addEventListener('DOMContentLoaded', function () {
    const enterFullscreenButton = document.getElementById('enterFullscreen');
    const img = document.querySelector('.homeimage2');

    const toggleFullscreen = () => {
        if (!document.fullscreenElement) {
            img.requestFullscreen().catch(err => {
                console.error(`Error attempting to enable full-screen mode: ${err.message}`);
            });
        } else {
            document.exitFullscreen();
        }
    };

    enterFullscreenButton.addEventListener('click', () => {
        toggleFullscreen();
    });

    const onChange = () => {
        const isFullscreen = document.fullscreenElement === img;
        enterFullscreenButton.style.display = isFullscreen ? 'none' : 'block';
    };

    document.addEventListener('fullscreenchange', onChange);
});
//about page
// Slideshow functions
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}