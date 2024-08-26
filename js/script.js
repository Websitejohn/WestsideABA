
function toggleMenu() {
    const navMenu = document.querySelector('.nav-menu');
    const hamburger = document.querySelector('.hamburger');
    
    if (navMenu.classList.contains('show')) {
        navMenu.classList.remove('show');
        hamburger.classList.remove('active');
    } else {
        navMenu.classList.add('show');
        hamburger.classList.add('active');
    }
}

function toggleDropdown(event) {
    event.preventDefault();
    const dropdown = event.target.parentElement.querySelector('.dropdown-menu');
    const toggleIcon = event.target.querySelector('.toggle-icon');
    
    if (dropdown.classList.contains('show')) {
        dropdown.classList.remove('show');
        toggleIcon.textContent = "+";
    } else {
        dropdown.classList.add('show');
        toggleIcon.textContent = "-";
    }
}

document.addEventListener("DOMContentLoaded", function() {
    // Typewriter effect
    const typewriter = document.getElementById('typewriter');
    const textArray = ["Welcome to WestSide ABA", "Your Partner in Growth", "Empowering Through Therapy"];
    let textIndex = 0;
    let charIndex = 0;
    let typingDelay = 100;
    let erasingDelay = 50;
    let newTextDelay = 2000;

    function type() {
        if (charIndex < textArray[textIndex].length) {
            typewriter.textContent += textArray[textIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, typingDelay);
        } else {
            setTimeout(erase, newTextDelay);
        }
    }

    function erase() {
        if (charIndex > 0) {
            typewriter.textContent = textArray[textIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, erasingDelay);
        } else {
            textIndex = (textIndex + 1) % textArray.length;
            setTimeout(type, typingDelay);
        }
    }

    type();

    // Smooth scroll for the down arrow
    document.querySelector('.hero-arrow-down a').addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const dropdownLinks = document.querySelectorAll('.has-dropdown');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('show');
    });

    dropdownLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            link.classList.toggle('open');
        });
    });

    // Close dropdown if clicked outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.has-dropdown')) {
            dropdownLinks.forEach(link => link.classList.remove('open'));
        }
    });
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
