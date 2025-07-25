// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navMenu = document.getElementById('navMenu');

mobileMenuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    mobileMenuBtn.classList.toggle('active');
});

// Demo Audio Controls
const demoBtns = document.querySelectorAll('.demo-btn');
const audioWave = document.querySelector('.audio-wave');

demoBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        demoBtns.forEach(b => b.classList.remove('active'));
        // Add active class to clicked button
        btn.classList.add('active');
        
        // Change wave animation based on demo type
        const demoType = btn.dataset.demo;
        if (demoType === 'before') {
            audioWave.style.filter = 'hue-rotate(0deg)';
            animateWave('noisy');
        } else {
            audioWave.style.filter = 'hue-rotate(120deg)';
            animateWave('clean');
        }
    });
});

function animateWave(type) {
    const waveBars = document.querySelectorAll('.wave-bar');
    waveBars.forEach((bar, index) => {
        if (type === 'noisy') {
            // More chaotic animation for noisy audio
            bar.style.animationDuration = `${0.8 + Math.random() * 0.4}s`;
            bar.style.height = `${30 + Math.random() * 60}%`;
        } else {
            // Smoother animation for clean audio
            bar.style.animationDuration = '1.5s';
            bar.style.height = `${20 + Math.random() * 30}%`;
        }
    });
}

// Play Button Interactions
const playBtns = document.querySelectorAll('.play-btn');

playBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const icon = btn.querySelector('svg');
        const text = btn.querySelector('span') || btn.childNodes[btn.childNodes.length - 1];
        
        if (btn.classList.contains('playing')) {
            // Stop playing
            btn.classList.remove('playing');
            icon.innerHTML = '<polygon points="5,3 19,12 5,21 5,3"></polygon>';
            if (text.textContent) {
                text.textContent = text.textContent.replace('Stop', 'Play');
            }
        } else {
            // Start playing
            btn.classList.add('playing');
            icon.innerHTML = '<rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect>';
            if (text.textContent) {
                text.textContent = text.textContent.replace('Play', 'Stop');
            }
            
            // Auto stop after 3 seconds
            setTimeout(() => {
                btn.classList.remove('playing');
                icon.innerHTML = '<polygon points="5,3 19,12 5,21 5,3"></polygon>';
                if (text.textContent) {
                    text.textContent = text.textContent.replace('Stop', 'Play');
                }
            }, 3000);
        }
    });
});

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

// Newsletter Form
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = newsletterForm.querySelector('.newsletter-input').value;
        
        if (email) {
            // Simulate subscription
            const btn = newsletterForm.querySelector('.newsletter-btn');
            const originalText = btn.textContent;
            btn.textContent = 'Subscribed!';
            btn.style.background = '#10b981';
            
            setTimeout(() => {
                btn.textContent = originalText;
                btn.style.background = '#6366f1';
                newsletterForm.querySelector('.newsletter-input').value = '';
            }, 2000);
        }
    });
}

// Intersection Observer for Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.feature-card, .testimonial-card, .demo-card');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Header Scroll Effect
let lastScrollY = window.scrollY;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
    
    if (currentScrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = 'none';
    }
    
    lastScrollY = currentScrollY;
});

// Audio Visualization Animation
function startAudioVisualization() {
    const audioBars = document.querySelectorAll('.audio-bars .bar');
    
    setInterval(() => {
        audioBars.forEach(bar => {
            const randomHeight = Math.random() * 80 + 20;
            bar.style.height = `${randomHeight}%`;
        });
    }, 200);
}

// Start audio visualization when page loads
document.addEventListener('DOMContentLoaded', startAudioVisualization);

// Feature Card Hover Effects
const featureCards = document.querySelectorAll('.feature-card');

featureCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        const icon = card.querySelector('.feature-icon');
        icon.style.transform = 'scale(1.1) rotate(5deg)';
    });
    
    card.addEventListener('mouseleave', () => {
        const icon = card.querySelector('.feature-icon');
        icon.style.transform = 'scale(1) rotate(0deg)';
    });
});

// Testimonial Card Rotation
let currentTestimonial = 0;
const testimonialCards = document.querySelectorAll('.testimonial-card');

function rotateTestimonials() {
    if (testimonialCards.length > 0) {
        testimonialCards.forEach((card, index) => {
            card.style.opacity = index === currentTestimonial ? '1' : '0.7';
            card.style.transform = index === currentTestimonial ? 'scale(1.02)' : 'scale(1)';
        });
        
        currentTestimonial = (currentTestimonial + 1) % testimonialCards.length;
    }
}

// Start testimonial rotation
setInterval(rotateTestimonials, 4000);

// Mobile App Controls Interaction
const controlBtns = document.querySelectorAll('.control-btn');

controlBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        controlBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        // Animate noise meter based on selection
        const noiseMeter = document.querySelector('.meter-circle');
        if (btn.textContent.includes('Noise Cancellation')) {
            noiseMeter.style.borderTopColor = '#10b981';
        } else {
            noiseMeter.style.borderTopColor = '#6366f1';
        }
    });
});

// Add CSS for mobile menu
const style = document.createElement('style');
style.textContent = `
    @media (max-width: 1024px) {
        .nav-menu {
            position: fixed;
            top: 100%;
            left: 0;
            right: 0;
            background: white;
            flex-direction: column;
            padding: 2rem;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
            transform: translateY(-100%);
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
            z-index: 999;
        }
        
        .nav-menu.active {
            transform: translateY(0);
            opacity: 1;
            visibility: visible;
        }
        
        .nav-item {
            margin-bottom: 1rem;
        }
        
        .dropdown-menu {
            position: static;
            opacity: 1;
            visibility: visible;
            transform: none;
            box-shadow: none;
            border: none;
            background: #f9fafb;
            margin-top: 0.5rem;
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
    }
`;
document.head.appendChild(style);