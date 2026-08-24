// Smooth scrolling for navigation links
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

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'cardFadeIn 0.6s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all car cards
document.querySelectorAll('.car-card').forEach((card, index) => {
    card.style.opacity = '0';
    observer.observe(card);
});

// Parallax effect on hero section
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    const scrolled = window.pageYOffset;
    if (hero) {
        hero.style.backgroundPosition = `0 ${scrolled * 0.5}px`;
    }
});

// Gear rotation based on mouse position
document.addEventListener('mousemove', (e) => {
    const gears = document.querySelectorAll('.gear');
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    
    gears.forEach(gear => {
        const offsetX = (x - 0.5) * 20;
        const offsetY = (y - 0.5) * 20;
        gear.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
    });
});

// Form submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const name = contactForm.querySelector('input[type="text"]').value;
        const email = contactForm.querySelector('input[type="email"]').value;
        const message = contactForm.querySelector('textarea').value;
        
        // Create success message
        const successMsg = document.createElement('div');
        successMsg.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: linear-gradient(135deg, #ff6b35, #ff8c5a);
            color: white;
            padding: 2rem 3rem;
            border-radius: 10px;
            font-size: 1.2rem;
            font-weight: bold;
            text-align: center;
            z-index: 9999;
            animation: popIn 0.5s ease-out;
            box-shadow: 0 10px 50px rgba(255, 107, 53, 0.5);
        `;
        successMsg.textContent = '✓ Message sent! We\'ll get back to you soon.';
        document.body.appendChild(successMsg);
        
        // Reset form
        contactForm.reset();
        
        // Remove success message after 3 seconds
        setTimeout(() => {
            successMsg.style.animation = 'fadeOut 0.5s ease-out forwards';
            setTimeout(() => successMsg.remove(), 500);
        }, 3000);
    });
}

// Add popIn animation
const style = document.createElement('style');
style.textContent = `
    @keyframes popIn {
        0% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.5);
        }
        100% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
        }
    }
    
    @keyframes fadeOut {
        0% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
        }
        100% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.5);
        }
    }
`;
document.head.appendChild(style);

// CTA Button click handler
const ctaButton = document.querySelector('.cta-button');
if (ctaButton) {
    ctaButton.addEventListener('click', () => {
        document.querySelector('#showcase').scrollIntoView({ behavior: 'smooth' });
    });
}

// Mouse effect on car cards
document.querySelectorAll('.car-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const xPercent = (x / rect.width) * 100;
        const yPercent = (y / rect.height) * 100;
        
        card.style.background = `
            radial-gradient(
                circle at ${xPercent}% ${yPercent}%,
                rgba(255, 107, 53, 0.15),
                rgba(45, 45, 45, 0.7),
                #1a1a1a
            )
        `;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.background = 'linear-gradient(135deg, #2d2d2d 0%, #1a1a1a 100%)';
    });
});

// Animate stats on scroll
const statsSection = document.querySelector('.stats');
if (statsSection) {
    const observer2 = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statItems = entry.target.querySelectorAll('.stat-item');
                statItems.forEach((item, index) => {
                    item.style.animation = `statScale 0.6s ease-out ${index * 0.1}s forwards`;
                    item.style.opacity = '0';
                });
                observer2.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    observer2.observe(statsSection);
}

// Dynamic year in footer
const year = new Date().getFullYear();
document.querySelector('.footer p').textContent = `© ${year} MÉCANIQUE STORE. Engineered for Excellence.`;

// Loading animation
window.addEventListener('load', () => {
    document.body.style.animation = 'fadeIn 0.6s ease-out';
    
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeIn {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }
    `;
    document.head.appendChild(style);
});

// Console easter egg
console.log('%c🏎️ MÉCANIQUE STORE 🏎️', 'font-size: 20px; color: #ff6b35; font-weight: bold; text-shadow: 0 0 10px #ff6b35;');
console.log('%cEngineered for Perfection', 'font-size: 14px; color: #d4af37; font-weight: bold;');
