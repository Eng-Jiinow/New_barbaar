// Smooth Fade-In Animation for Hero Section
document.addEventListener("DOMContentLoaded", function () {
    const heroSection = document.querySelector(".hero-section");
    heroSection.style.opacity = 0;
    heroSection.style.transition = "opacity 2s ease-in-out";
    setTimeout(() => {
      heroSection.style.opacity = 1;
    }, 200);
  });

  


  document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".impact-value");
  
    const animateCount = (counter) => {
      const target = +counter.getAttribute("data-target"); // Final number
      const duration = 2000; // Animation duration in ms
      const increment = target / (duration / 50); // Update step
      let current = 0;
  
      const updateCounter = () => {
        current += increment;
        if (current < target) {
          counter.textContent = Math.floor(current);
          requestAnimationFrame(updateCounter); // Smooth animation
        } else {
          counter.textContent = target + "+"; // Final number
        }
      };
  
      updateCounter();
    };
  
    const options = {
      root: null, // Use the viewport as the root
      threshold: 0.5, // Trigger when 50% of the section is visible
    };
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const counters = entry.target.querySelectorAll(".impact-value");
          counters.forEach((counter) => {
            animateCount(counter); // Start the animation
          });
          observer.unobserve(entry.target); // Stop observing after animation
        }
      });
    }, options);
  
    const impactSection = document.querySelector("#impact-overview");
    observer.observe(impactSection); // Watch for when the section comes into view
  });
  

  
  const animateCount = (counter) => {
    counter.classList.add("animated");
    const target = +counter.getAttribute("data-target"); // Final number
    const duration = 2000; // Animation duration in ms
    const increment = target / (duration / 50); // Update step
    let current = 0;
  
    const updateCounter = () => {
      current += increment;
      if (current < target) {
        counter.textContent = Math.floor(current);
        requestAnimationFrame(updateCounter); // Smooth animation
      } else {
        counter.textContent = target + "+"; // Final number
      }
    };
  
    updateCounter();
  };
  






 
  
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', e => {
      if (link.hash) {
        e.preventDefault();
        document.querySelector(link.hash).scrollIntoView({ behavior: 'smooth' });
      }
    });
  });



const ActivePage = window.location.pathname;
const navLinks = document.querySelectorAll('nav a').forEach(
  link =>{
    if(link.href.includes(`${ActivePage}`)){
      link.classList.add('active');
      // console.log(`${ActivePage}`)
    }

  })