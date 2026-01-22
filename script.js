// ===================================
// Navigation Scroll Effect
// ===================================
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ===================================
// Mobile Navigation Toggle
// ===================================
navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu when clicking a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// ===================================
// FAQ Accordion
// ===================================
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');

    question.addEventListener('click', () => {
        // Close all other items
        faqItems.forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove('active');
            }
        });

        // Toggle current item
        item.classList.toggle('active');
    });
});

// ===================================
// Smooth Scroll
// ===================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===================================
// Intersection Observer for Animations
// ===================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Animate sections on scroll
const animatedSections = document.querySelectorAll('.about, .services, .portfolio, .testimonials, .faq, .contact');
animatedSections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(40px)';
    section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    observer.observe(section);
});

// Animate cards on scroll
const cards = document.querySelectorAll('.service-card, .portfolio-item, .testimonial-card, .stat-item');
cards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(40px)';
    card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
    observer.observe(card);
});

// ===================================
// Cursor Effect (Optional - Desktop Only)
// ===================================
if (window.innerWidth > 968) {
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);

    const cursorFollower = document.createElement('div');
    cursorFollower.className = 'cursor-follower';
    document.body.appendChild(cursorFollower);

    // Position variables
    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;
    let followerX = 0, followerY = 0;

    // Scaling variables
    let targetScale = 1;
    let currentScale = 1;
    let followerTargetScale = 1;
    let followerCurrentScale = 1;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function animateCursor() {
        // Smooth cursor movement (lerp)
        // Main cursor moves quickly
        cursorX += (mouseX - cursorX) * 0.2;
        cursorY += (mouseY - cursorY) * 0.2;

        // Follower moves slower with more drag
        followerX += (mouseX - followerX) * 0.1;
        followerY += (mouseY - followerY) * 0.1;

        // Smooth scaling
        currentScale += (targetScale - currentScale) * 0.2;
        followerCurrentScale += (followerTargetScale - followerCurrentScale) * 0.15;

        // Apply transforms using translate3d for hardware acceleration
        cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0) translate(-50%, -50%) scale(${currentScale})`;
        cursorFollower.style.transform = `translate3d(${followerX}px, ${followerY}px, 0) translate(-50%, -50%) scale(${followerCurrentScale})`;

        requestAnimationFrame(animateCursor);
    }
    animateCursor();

    // Add hover effect to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .portfolio-item, .service-card');

    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            targetScale = 0.5;
            followerTargetScale = 2; // Expand the ring
        });

        el.addEventListener('mouseleave', () => {
            targetScale = 1;
            followerTargetScale = 1;
        });
    });

    // Add styles for custom cursor
    const cursorStyles = document.createElement('style');
    cursorStyles.textContent = `
        .custom-cursor,
        .cursor-follower {
            position: fixed;
            pointer-events: none;
            border-radius: 50%;
            z-index: 9999;
            top: 0;
            left: 0;
            /* Will-change helps browser optimize */
            will-change: transform;
        }
        
        .custom-cursor {
            width: 10px;
            height: 10px;
            background: var(--accent-primary);
        }
        
        .cursor-follower {
            width: 40px;
            height: 40px;
            border: 2px solid rgba(255, 107, 53, 0.3);
        }
        
        body {
            cursor: none;
        }
        
        a, button {
            cursor: none;
        }
        
        /* Hide default cursor on interactive elements as well to be safe */
        .service-card, .portfolio-item {
            cursor: none;
        }
    `;
    document.head.appendChild(cursorStyles);
}

// ===================================
// Video Modal for Portfolio Items
// ===================================
const portfolioItems = document.querySelectorAll('.portfolio-item[data-video]');
const videoModal = document.getElementById('videoModal');
const modalVideo = document.getElementById('modalVideo');
const closeModal = document.querySelector('.close-modal');

// Open video modal when portfolio item is clicked
// Helper to get embed URL from various YouTube formats
function getEmbedUrl(url) {
    if (!url) return '';

    // Handle standard YouTube URLs (youtube.com/watch?v=ID)
    let videoId = '';
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);

    if (match && match[2].length === 11) {
        videoId = match[2];
    }
    // Handle YouTube Shorts (youtube.com/shorts/ID)
    else if (url.includes('youtube.com/shorts/')) {
        const shortsMatch = url.match(/shorts\/([^#&?]*)/);
        if (shortsMatch && shortsMatch[1]) {
            videoId = shortsMatch[1];
        }
    }

    if (videoId) {
        return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    }

    // Fallback for other video sources or if ID extraction fails
    return url.includes('?') ? url + '&autoplay=1' : url + '?autoplay=1';
}

// Open video modal when portfolio item is clicked
portfolioItems.forEach(item => {
    item.addEventListener('click', function (e) {
        e.preventDefault();
        const videoSrc = this.getAttribute('data-video');

        if (videoSrc) {
            const embedSrc = getEmbedUrl(videoSrc);
            modalVideo.src = embedSrc;
            videoModal.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
        }
    });
});

// Close modal when clicking the X button
if (closeModal) {
    closeModal.addEventListener('click', closeVideoModal);
}

// Close modal when clicking outside the video
if (videoModal) {
    videoModal.addEventListener('click', (e) => {
        if (e.target === videoModal) {
            closeVideoModal();
        }
    });
}

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && videoModal && videoModal.classList.contains('active')) {
        closeVideoModal();
    }
});

// Function to close video modal
function closeVideoModal() {
    if (videoModal && modalVideo) {
        videoModal.classList.remove('active');
        modalVideo.src = ''; // Stop video playback
        document.body.style.overflow = ''; // Restore scrolling
    }
}

// ===================================
// Stats Counter Animation
// ===================================
function animateCounter(element, target, duration = 2000) {
    let current = 0;
    const increment = target / (duration / 16);
    const suffix = element.textContent.replace(/[0-9]/g, '');

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target + suffix;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current) + suffix;
        }
    }, 16);
}

// Trigger counter animation when stats are in view
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const number = entry.target;
            const text = number.textContent;
            const value = parseInt(text.replace(/\D/g, ''));

            if (value && !number.classList.contains('counted')) {
                number.classList.add('counted');
                animateCounter(number, value);
            }
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-number').forEach(stat => {
    statsObserver.observe(stat);
});

// ===================================
// Parallax Effect for Hero Background
// ===================================
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const orbs = document.querySelectorAll('.gradient-orb');

    orbs.forEach((orb, index) => {
        const speed = 0.5 + (index * 0.1);
        orb.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// ===================================
// Add Active State to Navigation on Scroll
// ===================================
const sections = document.querySelectorAll('section[id]');

function highlightNavigation() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', highlightNavigation);

// ===================================
// Form Validation (if you add a contact form)
// ===================================
// This is a placeholder for future contact form functionality
function validateForm(formData) {
    const errors = [];

    if (!formData.name || formData.name.trim().length < 2) {
        errors.push('Please enter a valid name');
    }

    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        errors.push('Please enter a valid email');
    }

    if (!formData.message || formData.message.trim().length < 10) {
        errors.push('Please enter a message (at least 10 characters)');
    }

    return errors;
}

// ===================================
// Loading Animation
// ===================================
window.addEventListener('load', () => {
    document.body.classList.add('loaded');

    // Trigger hero animations
    setTimeout(() => {
        document.querySelector('.hero-content').style.opacity = '1';
    }, 100);
});

// Add loaded class styles
const loadingStyles = document.createElement('style');
loadingStyles.textContent = `
    body {
        opacity: 0;
        transition: opacity 0.5s ease;
    }
    
    body.loaded {
        opacity: 1;
    }
    
    .hero-content {
        opacity: 0;
        transition: opacity 0.8s ease;
    }
`;
document.head.appendChild(loadingStyles);

console.log('Portfolio website initialized successfully! 🎉');
