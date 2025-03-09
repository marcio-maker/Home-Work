// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Anatomy tab switching
    const tabs = document.querySelectorAll('.anatomy-tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active class from all tabs
            tabs.forEach(t => t.classList.remove('active'));
            // Add active class to clicked tab
            this.classList.add('active');
            
            // Hide all content
            const contents = document.querySelectorAll('.anatomy-content');
            contents.forEach(c => c.classList.remove('active'));
            
            // Show selected content
            const target = this.getAttribute('data-target');
            document.getElementById(target + '-content').classList.add('active');
        });
    });

    // Workout type selection
    const workoutTypes = document.querySelectorAll('.workout-type');
    workoutTypes.forEach(type => {
        type.addEventListener('click', function() {
            // Visual feedback on click
            this.style.opacity = '0.7';
            setTimeout(() => {
                this.style.opacity = '1';
            }, 200);
            
                        // You would add logic here to change the workout display
                        // based on the selected workout type
                    });
                });
            
                // Carousel functionality
                const carousel = document.querySelector('.carousel');
                const slides = carousel.querySelectorAll('.slide');
                let currentIndex = 0;
            
                function showSlide(index) {
                    slides.forEach((slide, i) => {
                        slide.style.display = i === index ? 'block' : 'none';
                    });
                }
            
                document.querySelector('.carousel-next').addEventListener('click', () => {
                    currentIndex = (currentIndex + 1) % slides.length;
                    showSlide(currentIndex);
                });
            
                document.querySelector('.carousel-prev').addEventListener('click', () => {
                    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
                    showSlide(currentIndex);
                });
            
                showSlide(currentIndex);
            });