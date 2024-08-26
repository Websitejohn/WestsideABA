document.addEventListener('DOMContentLoaded', () => {
    // Variables for navigation elements
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const dropdownLinks = document.querySelectorAll('.has-dropdown > a');
    const typewriter = document.getElementById('typewriter');
    const textArray = ["Welcome to WestSide ABA", "Your Partner in Growth", "Empowering Through Therapy"];
    let textIndex = 0;
    let charIndex = 0;
    const typingDelay = 100;
    const erasingDelay = 50;
    const newTextDelay = 2000;

    // Function to toggle the mobile menu
    function toggleMenu() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('show');
    }

    // Function to toggle dropdowns in the menu
    function toggleDropdown(event) {
        event.preventDefault();
        const dropdownMenu = this.nextElementSibling;
        const toggleIcon = this.querySelector('.toggle-icon');
        const isOpen = dropdownMenu.classList.contains('show');

        // Close all dropdowns first
        document.querySelectorAll('.dropdown-menu').forEach(menu => {
            menu.classList.remove('show');
            menu.previousElementSibling.querySelector('.toggle-icon').textContent = '+';
        });

        // Toggle the clicked dropdown
        if (!isOpen) {
            dropdownMenu.classList.add('show');
            toggleIcon.textContent = '-';
        } else {
            dropdownMenu.classList.remove('show');
            toggleIcon.textContent = '+';
        }
    }

    // Function to close all dropdowns when clicking outside
    function closeDropdowns(e) {
        if (!e.target.closest('.nav-menu')) {
            document.querySelectorAll('.dropdown-menu').forEach(menu => {
                menu.classList.remove('show');
                menu.previousElementSibling.querySelector('.toggle-icon').textContent = '+';
            });
        }
    }

    // Function for smooth scrolling
    function smoothScroll(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    }

    // Typewriter effect functions
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

    // Event listeners
    hamburger.addEventListener('click', toggleMenu);
    dropdownLinks.forEach(link => link.addEventListener('click', toggleDropdown));
    document.addEventListener('click', closeDropdowns);
    document.querySelectorAll('a[href^="#"]').forEach(anchor => anchor.addEventListener('click', smoothScroll));

    // Start the typewriter effect
    type();
});
