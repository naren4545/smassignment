document.addEventListener('DOMContentLoaded', function() {
    // Get all timeline items and the progress line
    const timelineItems = document.querySelectorAll('.timeline-item');
    const timelineProgress = document.querySelector('.timeline-progress');
    const timelineSection = document.querySelector('.timeline-section');
    
    // Total number of steps
    const totalSteps = timelineItems.length;
    
    // Flag to track if animation has already run
    let animationHasRun = false;
    
    // Function to animate the timeline
    function animateTimeline() {
        // Prevent animation from running multiple times
        if (animationHasRun) return;
        animationHasRun = true;
        
        let currentStep = 0;
        
        // Initial state - all items inactive
        timelineItems.forEach(item => {
            item.classList.remove('active');
        });
        
        // Reset progress line
        timelineProgress.style.height = '0%';
        
        // Animation interval
        const animationInterval = setInterval(() => {
            // If we've completed all steps, clear the interval
            if (currentStep >= totalSteps) {
                clearInterval(animationInterval);
                return;
            }
            
            // Activate the current step
            timelineItems[currentStep].classList.add('active');
            
            // Update the progress line height
            const progressPercentage = ((currentStep + 1) / totalSteps) * 100;
            timelineProgress.style.height = `${progressPercentage}%`;
            
            // Move to the next step
            currentStep++;
        }, 800); // Time between each step animation (in milliseconds)
    }
    
    // Create intersection observer to trigger animation when 20% of section is in view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && entry.intersectionRatio >= 0.2) {
                animateTimeline();
                // Optional: Stop observing after animation starts
                observer.unobserve(timelineSection);
            }
        });
    }, { 
        threshold: 0.2 // Trigger when 20% of the element is visible
    });
    
    // Start observing the timeline section
    observer.observe(timelineSection);
    
    // Optional: Add a function to reset and restart animation (for testing)
    window.restartTimelineAnimation = function() {
        animationHasRun = false;
        timelineItems.forEach(item => {
            item.classList.remove('active');
        });
        timelineProgress.style.height = '0%';
        observer.observe(timelineSection);
    };
});


 $(document).ready(function(){
    $('.testimonial-slider').slick({
      dots: true,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 5000,
      speed: 600,
      fade: false,
      cssEase: 'ease-in-out'
    });


 $('.logo-slider').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 0,
      speed: 3000,
      cssEase: 'linear',
      infinite: true,
      arrows: false,

      dots: false,
      pauseOnHover: true,

      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2
          }
        }
      ]
    });





  });




  const container = document.getElementById('hover-target');
    const glowGrid = document.getElementById('glow-grid');

    container.addEventListener('mouseenter', () => {
      glowGrid.classList.add('hover');
    });

    container.addEventListener('mouseleave', () => {
      glowGrid.classList.remove('hover');
      glowGrid.style.setProperty('--x', '50%');
      glowGrid.style.setProperty('--y', '50%');
    });

    container.addEventListener('mousemove', (e) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      glowGrid.style.setProperty('--x', `${x}%`);
      glowGrid.style.setProperty('--y', `${y}%`);
    });



    const faqItems = document.querySelectorAll('.faq-item');
            
            faqItems.forEach(item => {
                const question = item.querySelector('.faq-question');
                const answer = item.querySelector('.faq-answer');
                
                question.addEventListener('click', () => {
                    const isActive = item.classList.contains('active');
                    
                    faqItems.forEach(otherItem => {
                        if (otherItem !== item) {
                            otherItem.classList.remove('active');
                            otherItem.querySelector('.faq-answer').classList.remove('active');
                        }
                    });
                    
                    if (isActive) {
                        item.classList.remove('active');
                        answer.classList.remove('active');
                    } else {
                        item.classList.add('active');
                        answer.classList.add('active');
                    }
                });
            });
            function toggleMenu() {
    const navLinks = document.getElementById("nav-links");
    navLinks.classList.toggle("active");
  }


  $('.service-slider').slick({
    
      slidesToShow: 3,
      slidesToScroll: 1,
       autoplay: true,
      autoplaySpeed: 0,
      speed: 3000,
      cssEase: 'linear',
      infinite: true,
      arrows: false,
      dots: false,
      pauseOnHover: true,
     responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1
          }
        }
        
      ]
    });


      window.addEventListener('scroll', function () {
    const header = document.querySelector('.header');
    if (window.scrollY > 10) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });


   const reveals = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target); // remove this line if you want to re-animate on scroll
      }
    });
  }, {
    threshold: 0.1
  });

  reveals.forEach(reveal => {
    observer.observe(reveal);
  });



  const contactButtons = document.querySelectorAll('.contact-btn');
  const popupOverlay = document.getElementById('popupOverlay');
  const closePopup = document.getElementById('closePopup');

  // Attach event to all contact buttons
  contactButtons.forEach(button => {
    button.addEventListener('click', function (e) {
      e.preventDefault();
      popupOverlay.style.display = 'flex';
    });
  });

  closePopup.addEventListener('click', function () {
    popupOverlay.style.display = 'none';
  });

  window.addEventListener('click', function (e) {
    if (e.target === popupOverlay) {
      popupOverlay.style.display = 'none';
    }
  });