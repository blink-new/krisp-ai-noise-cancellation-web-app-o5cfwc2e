// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navMenu = document.getElementById('navMenu');
    
    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            mobileMenuBtn.classList.toggle('active');
        });
    }

    // Demo Toggle Functionality
    const toggleBtns = document.querySelectorAll('.toggle-btn');
    const noiseLevel = document.getElementById('noiseLevel');
    
    toggleBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            toggleBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            // Update noise level based on selection
            const mode = this.getAttribute('data-mode');
            if (noiseLevel) {
                if (mode === 'with') {
                    noiseLevel.textContent = '5%';
                    animateAudioBars('clean');
                } else {
                    noiseLevel.textContent = '85%';
                    animateAudioBars('noisy');
                }
            }
        });
    });

    // Audio Bars Animation
    function animateAudioBars(mode) {
        const bars = document.querySelectorAll('.audio-bars .bar');
        bars.forEach((bar, index) => {
            if (mode === 'clean') {
                bar.style.animationDuration = '2s';
                bar.style.background = 'linear-gradient(to top, #10b981, #34d399)';
            } else {
                bar.style.animationDuration = '0.8s';
                bar.style.background = 'linear-gradient(to top, #ef4444, #f87171)';
            }
        });
    }

    // Smooth Scrolling for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Newsletter Form Submission
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('.newsletter-input').value;
            if (email) {
                alert('Thank you for subscribing! We\'ll keep you updated.');
                this.querySelector('.newsletter-input').value = '';
            }
        });
    }

    // Intersection Observer for Animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.feature-card, .testimonial-card, .comparison-card');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Dynamic Audio Visualization
    function updateAudioVisualization() {
        const bars = document.querySelectorAll('.audio-bars .bar');
        const waveBars = document.querySelectorAll('.wave-bar');
        
        // Animate audio bars with random heights
        bars.forEach(bar => {
            const randomHeight = Math.random() * 60 + 20; // 20-80px
            bar.style.height = randomHeight + 'px';
        });

        // Animate wave bars
        waveBars.forEach(bar => {
            const randomHeight = Math.random() * 80 + 10; // 10-90%
            bar.style.height = randomHeight + '%';
        });
    }

    // Update visualization every 200ms
    setInterval(updateAudioVisualization, 200);

    // Header Background on Scroll
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (window.scrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = 'none';
        }
    });

    // Parallax Effect for Hero Section
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        if (hero) {
            hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });

    // Counter Animation for Stats
    function animateCounters() {
        const counters = document.querySelectorAll('.stat-number');
        counters.forEach(counter => {
            const target = counter.textContent;
            const numericValue = parseInt(target.replace(/\D/g, ''));
            const suffix = target.replace(/\d/g, '');
            
            let current = 0;
            const increment = numericValue / 100;
            const timer = setInterval(() => {
                current += increment;
                if (current >= numericValue) {
                    current = numericValue;
                    clearInterval(timer);
                }
                counter.textContent = Math.floor(current) + suffix;
            }, 20);
        });
    }

    // Trigger counter animation when hero is visible
    const heroObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
                heroObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    const heroStats = document.querySelector('.hero-stats');
    if (heroStats) {
        heroObserver.observe(heroStats);
    }

    // Mobile App Controls Interaction
    const controlBtns = document.querySelectorAll('.control-btn');
    controlBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            controlBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Update meter based on selection
            const meterFill = document.querySelector('.meter-fill');
            const meterValue = document.querySelector('.meter-value');
            
            if (this.textContent.includes('Microphone')) {
                if (meterFill) meterFill.style.width = '95%';
                if (meterValue) meterValue.textContent = '95%';
            } else {
                if (meterFill) meterFill.style.width = '88%';
                if (meterValue) meterValue.textContent = '88%';
            }
        });
    });

    // Add hover effects to feature cards
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Add click effects to buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            // Create ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // Add CSS for ripple effect
    const style = document.createElement('style');
    style.textContent = `
        .btn {
            position: relative;
            overflow: hidden;
        }
        
        .ripple {
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.6);
            transform: scale(0);
            animation: ripple-animation 0.6s linear;
            pointer-events: none;
        }
        
        @keyframes ripple-animation {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
        
        .nav-menu.active {
            display: flex;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: white;
            flex-direction: column;
            padding: 1rem;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
            border-radius: 0 0 1rem 1rem;
        }
        
        .mobile-menu-btn.active span:nth-child(1) {
            transform: rotate(45deg) translate(5px, 5px);
        }
        
        .mobile-menu-btn.active span:nth-child(2) {
            opacity: 0;
        }
        
        .mobile-menu-btn.active span:nth-child(3) {
            transform: rotate(-45deg) translate(7px, -6px);
        }
        
        @media (max-width: 768px) {
            .nav-menu {
                display: none;
            }
        }
    `;
    document.head.appendChild(style);
});