/**
 * ElectroBid AI - Landing Page JavaScript
 * No frameworks - Pure vanilla JS
 */

(function() {
    'use strict';

    // ========================================
    // DOM Ready
    // ========================================
    document.addEventListener('DOMContentLoaded', function() {
        initNavbar();
        initMobileMenu();
        initSmoothScroll();
        initWaitlistForm();
        initFAQAccordion();
        initScrollAnimations();
    });

    // ========================================
    // Navbar Scroll Effect
    // ========================================
    function initNavbar() {
        const navbar = document.getElementById('navbar');
        if (!navbar) return;

        let lastScroll = 0;

        window.addEventListener('scroll', function() {
            const currentScroll = window.pageYOffset;

            // Add shadow on scroll
            if (currentScroll > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }

            lastScroll = currentScroll;
        }, { passive: true });
    }

    // ========================================
    // Mobile Menu Toggle
    // ========================================
    function initMobileMenu() {
        const menuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        
        if (!menuBtn || !mobileMenu) return;

        menuBtn.addEventListener('click', function() {
            menuBtn.classList.toggle('active');
            mobileMenu.classList.toggle('active');
            
            // Toggle aria-expanded
            const isExpanded = menuBtn.classList.contains('active');
            menuBtn.setAttribute('aria-expanded', isExpanded);
        });

        // Close menu when clicking a link
        const menuLinks = mobileMenu.querySelectorAll('a');
        menuLinks.forEach(function(link) {
            link.addEventListener('click', function() {
                menuBtn.classList.remove('active');
                mobileMenu.classList.remove('active');
                menuBtn.setAttribute('aria-expanded', 'false');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!menuBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
                menuBtn.classList.remove('active');
                mobileMenu.classList.remove('active');
                menuBtn.setAttribute('aria-expanded', 'false');
            }
        });
    }

    // ========================================
    // Smooth Scrolling
    // ========================================
    function initSmoothScroll() {
        const anchors = document.querySelectorAll('a[href^="#"]');
        
        anchors.forEach(function(anchor) {
            anchor.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                
                // Skip if it's just "#"
                if (href === '#') return;
                
                const target = document.querySelector(href);
                if (!target) return;
                
                e.preventDefault();
                
                // Calculate offset for fixed navbar
                const navbarHeight = document.getElementById('navbar').offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            });
        });
    }

    // ========================================
    // Waitlist Form Handler
    // ========================================
    function initWaitlistForm() {
        const form = document.getElementById('waitlist-form');
        const submitBtn = document.getElementById('submit-btn');
        const successMessage = document.getElementById('success-message');
        
        if (!form) return;

        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(form);
            const data = {
                email: formData.get('email'),
                pain_point: formData.get('pain_point'),
                other_pain: formData.get('other_pain'),
                timestamp: new Date().toISOString(),
                source: 'landing_page',
                url: window.location.href
            };
            
            // Validate email
            if (!isValidEmail(data.email)) {
                showFormError('Please enter a valid email address.');
                return;
            }
            
            // Disable button and show loading state
            submitBtn.disabled = true;
            submitBtn.textContent = 'Joining...';
            
            // Log submission to localStorage as backup
            var signups = JSON.parse(localStorage.getItem('electrobid_signups') || '[]');
            signups.push(data);
            localStorage.setItem('electrobid_signups', JSON.stringify(signups));
            console.log('Waitlist signup saved locally:', data);

            // Check if Formspree form ID is configured
            var formAction = form.getAttribute('action');
            if (formAction.includes('YOUR_FORM_ID') || formAction.includes('@')) {
                // Formspree not yet configured with a real form ID
                // For now, log locally and show success
                console.log('Formspree not configured - submission logged to localStorage');
                showSuccess();
                return;
            }
            
            // Submit to Formspree
            fetch(formAction, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(function(response) {
                if (response.ok) {
                    showSuccess();
                } else {
                    throw new Error('Form submission failed');
                }
            })
            .catch(function(error) {
                console.error('Form error:', error);
                submitBtn.disabled = false;
                submitBtn.textContent = 'Join Waitlist & Lock In $39/mo →';
                showFormError('Something went wrong. Please try again.');
            });
        });

        function showSuccess() {
            form.classList.add('hidden');
            successMessage.classList.remove('hidden');
            
            // Track conversion (if analytics available)
            if (typeof gtag !== 'undefined') {
                gtag('event', 'sign_up', {
                    'event_category': 'waitlist',
                    'event_label': 'landing_page'
                });
            }
        }

        function showFormError(message) {
            // Remove existing error
            const existingError = form.querySelector('.form-error');
            if (existingError) {
                existingError.remove();
            }
            
            // Create error message
            const errorDiv = document.createElement('div');
            errorDiv.className = 'form-error';
            errorDiv.style.cssText = 'color: #dc2626; background: #fef2f2; padding: 12px; border-radius: 8px; margin-bottom: 16px; font-size: 14px;';
            errorDiv.textContent = message;
            
            // Insert at top of form
            form.insertBefore(errorDiv, form.firstChild);
            
            // Auto-remove after 5 seconds
            setTimeout(function() {
                errorDiv.remove();
            }, 5000);
        }

        function isValidEmail(email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        }
    }

    // ========================================
    // FAQ Accordion
    // ========================================
    function initFAQAccordion() {
        const faqItems = document.querySelectorAll('.faq-item');
        
        faqItems.forEach(function(item) {
            const question = item.querySelector('.faq-question');
            const answer = item.querySelector('.faq-answer');
            
            if (!question || !answer) return;
            
            question.addEventListener('click', function() {
                const isOpen = item.classList.contains('active');
                
                // Close all other items
                faqItems.forEach(function(otherItem) {
                    if (otherItem !== item) {
                        otherItem.classList.remove('active');
                        otherItem.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
                    }
                });
                
                // Toggle current item
                item.classList.toggle('active');
                question.setAttribute('aria-expanded', !isOpen);
            });
        });
    }

    // ========================================
    // Scroll Animations (Intersection Observer)
    // ========================================
    function initScrollAnimations() {
        // Check for IntersectionObserver support
        if (!('IntersectionObserver' in window)) return;

        const animatedElements = document.querySelectorAll('.feature-card, .pain-card, .testimonial-card, .pricing-card');
        
        // Add initial hidden state
        animatedElements.forEach(function(el) {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        });

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    // Slight delay for stagger effect
                    const delay = Array.from(animatedElements).indexOf(entry.target) % 3 * 100;
                    
                    setTimeout(function() {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }, delay);
                    
                    // Stop observing once animated
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        animatedElements.forEach(function(el) {
            observer.observe(el);
        });
    }

    // ========================================
    // Utility: Debounce
    // ========================================
    function debounce(func, wait) {
        let timeout;
        return function executedFunction() {
            const context = this;
            const args = arguments;
            clearTimeout(timeout);
            timeout = setTimeout(function() {
                func.apply(context, args);
            }, wait);
        };
    }

    // ========================================
    // Analytics Helper (optional)
    // ========================================
    window.trackEvent = function(category, action, label) {
        if (typeof gtag !== 'undefined') {
            gtag('event', action, {
                'event_category': category,
                'event_label': label
            });
        }
        console.log('Event:', category, action, label);
    };

})();
