const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function applyAnimation(slide) {
    const title = slide.querySelector('.slider-title');
    const text = slide.querySelector('.slider-text');

    // Remove the animation classes (in case they're already applied)
    title.classList.remove('animate__animated', 'animate__lightSpeedInLeft');
    text.classList.remove('animate__animated', 'animate__fadeInUp');

    // Force a reflow to restart the animation
    void title.offsetWidth; 
    void text.offsetWidth;

    // Re-add the animation classes
    title.classList.add('animate__animated', 'animate__lightSpeedInLeft');
    text.classList.add('animate__animated', 'animate__fadeInUp');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
    applyAnimation(slides[currentSlide]);  // Apply animation on the new active slide
}

// Automatically switch slides every X seconds (customize the interval as per your slider)
setInterval(nextSlide, 5000);

// Make sure to run applyAnimation on the first slide initially
applyAnimation(slides[currentSlide]);
