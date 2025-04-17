// Initialize GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Video scroll animation
function initVideoScrollAnimation() {
    const video = document.querySelector('.hero-section video');
    if (!video) return;

    // Scale animation
    gsap.to(video, {
        scale: 1.1,
        scrollTrigger: {
            trigger: '.hero-section',
            start: 'top top',
            end: 'bottom top',
            scrub: 1,
            toggleActions: 'play none none reverse'
        }
    });

    // Parallax effect
    gsap.to(video, {
        y: 50,
        scrollTrigger: {
            trigger: '.hero-section',
            start: 'top top',
            end: 'bottom top',
            scrub: 1
        }
    });

    // Subtle rotation animation
    gsap.to(video, {
        rotate: 2,
        scrollTrigger: {
            trigger: '.hero-section',
            start: 'top top',
            end: 'bottom top',
            scrub: 2
        }
    });
}

// Video loading handler
function initVideoHandler() {
    const video = document.querySelector('.hero-section video');

    if (video) {
        // Handle video loading
        video.addEventListener('loadeddata', () => {
            video.style.opacity = 0;
            gsap.to(video, {
                opacity: 1,
                duration: 0.5,
                delay: 0.2
            });
        });

        // Fallback if video fails to load
        video.addEventListener('error', () => {
            console.error('Video failed to load');
            video.style.display = 'none';
        });
    }
}

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initVideoScrollAnimation();
    initVideoHandler();
});


// Initialize GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Animate the section intro
gsap.from('.production-process-section .section-intro', {
    scrollTrigger: {
        trigger: '.production-process-section',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
    },
    opacity: 0,
    y: 50,
    duration: 1
});

// Animate each process step
document.querySelectorAll('.process-step').forEach((step, index) => {
    // Animate the content
    gsap.from(step.querySelector('.step-content'), {
        scrollTrigger: {
            trigger: step,
            start: 'top 75%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        x: index % 2 === 0 ? -100 : 100,
        duration: 1,
        ease: 'power2.out'
    });

    // Animate the image
    gsap.from(step.querySelector('.step-image'), {
        scrollTrigger: {
            trigger: step,
            start: 'top 75%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        x: index % 2 === 0 ? 100 : -100,
        duration: 1,
        ease: 'power2.out',
        delay: 0.2
    });

    // Animate the step number
    gsap.from(step.querySelector('.step-number'), {
        scrollTrigger: {
            trigger: step,
            start: 'top 75%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        scale: 0,
        duration: 0.5,
        ease: 'back.out(1.7)',
        delay: 0.5
    });
});

// Animate the process conclusion
gsap.from('.process-conclusion', {
    scrollTrigger: {
        trigger: '.process-conclusion',
        start: 'top 85%',
        toggleActions: 'play none none reverse'
    },
    opacity: 0,
    y: 30,
    duration: 1,
    ease: 'power2.out'
});


gsap.registerPlugin(ScrollTrigger);

function initTimelineAnimations() {
    // Use a single Intersection Observer for all quick facts
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '50px'
    };

    const factObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const fact = entry.target;
                animateQuickFact(fact);
                factObserver.unobserve(fact); // Only animate once
            }
        });
    }, observerOptions);

    // Observe all quick facts
    document.querySelectorAll('.quick-fact').forEach(fact => {
        factObserver.observe(fact);
    });

    // Batch animations for better performance
    gsap.set('.quick-fact', { opacity: 0, y: 20, scale: 0.9 });
    gsap.set('.decorative-pattern', { opacity: 0, scale: 0.5, rotate: 0 });

    function animateQuickFact(fact) {
        gsap.to(fact, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: 'back.out(1.7)',
            clearProps: 'transform' // Clean up transform after animation
        });
    }

    // Optimize pattern animations
    const patterns = document.querySelectorAll('.decorative-pattern');
    patterns.forEach((pattern) => {
        gsap.to(pattern, {
            opacity: 0.1,
            scale: 1,
            rotate: pattern.classList.contains('egyptian') ? 30 :
                pattern.classList.contains('babylonian') ? -25 : 15,
            duration: 1,
            scrollTrigger: {
                trigger: pattern,
                start: 'top bottom',
                end: 'top center',
                toggleActions: 'play none none reverse',
                fastScrollEnd: true
            }
        });
    });

    // Rest of existing animations with performance optimizations
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item) => {
        const isLeft = item.classList.contains('left');

        gsap.fromTo(item, {
            opacity: 0,
            y: 50,
            x: isLeft ? -30 : 30,
            scale: 0.9
        }, {
            opacity: 1,
            y: 0,
            x: 0,
            scale: 1,
            duration: 1,
            clearProps: 'transform',
            scrollTrigger: {
                trigger: item,
                start: 'top bottom-=100',
                end: 'top center',
                toggleActions: 'play none none reverse',
                fastScrollEnd: true
            }
        });
    });
}

// Initialize animations when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTimelineAnimations);
} else {
    initTimelineAnimations();
}

gsap.registerPlugin(ScrollTrigger);

function initTypeAnimations() {
    // Animate section title and intro
    gsap.fromTo('.types-section h2, .section-intro', {
        opacity: 0,
        y: 30
    }, {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
            trigger: '.types-section',
            start: 'top center+=100',
            toggleActions: 'play none none reverse'
        }
    });

    // Animate type cards
    const typeCards = document.querySelectorAll('.type-card');
    typeCards.forEach((card, index) => {
        const direction = index % 2 === 0 ? -1 : 1;

        // Animate card
        gsap.fromTo(card, {
            opacity: 0,
            x: 50 * direction
        }, {
            opacity: 1,
            x: 0,
            duration: 1,
            scrollTrigger: {
                trigger: card,
                start: 'top bottom-=100',
                end: 'top center',
                toggleActions: 'play none none reverse'
            }
        });

        // Animate features with stagger
        const features = card.querySelectorAll('.type-features li');
        gsap.fromTo(features, {
            opacity: 0,
            y: 20
        }, {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.1,
            scrollTrigger: {
                trigger: card,
                start: 'top center+=100',
                toggleActions: 'play none none reverse'
            }
        });
    });
}

function initBenefitsAnimations() {
    // Animate benefit containers
    const benefitContainers = document.querySelectorAll('.benefit-container');
    benefitContainers.forEach((container) => {
        gsap.from(container, {
            opacity: 0,
            y: 50,
            duration: 1,
            scrollTrigger: {
                trigger: container,
                start: 'top bottom-=100',
                end: 'top center',
                toggleActions: 'play none none reverse'
            }
        });

        // Animate features with stagger
        const features = container.querySelectorAll('.benefit-features li');
        gsap.from(features, {
            opacity: 0,
            x: -20,
            duration: 0.5,
            stagger: 0.1,
            scrollTrigger: {
                trigger: container,
                start: 'top center+=100',
                toggleActions: 'play none none reverse'
            }
        });
    });
}

// Initialize all animations when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initTypeAnimations();
    initBenefitsAnimations();
});