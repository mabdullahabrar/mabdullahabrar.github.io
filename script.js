// Scroll to Top Button
const scrollToTopBtn = document.getElementById("scrollToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
});

scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Smooth Scroll for Nav Links
document.querySelectorAll("nav a[href^='#']").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Typewriter Effect
const subtitle = document.querySelector('.subtitle');
const text = "Computer Science Student & Aspiring Full-Stack Developer";

function typeWriter() {
  let i = 0;
  subtitle.innerHTML = '';
  
  function typing() {
    if (i < text.length) {
      subtitle.innerHTML += text.charAt(i);
      i++;
      setTimeout(typing, 50);
    }
  }
  
  typing();
}

// Initialize Particles.js and Typewriter
window.addEventListener('load', () => {
  particlesJS.load("particles-js", "particles.json", function() {
    console.log("Particles.js loaded successfully");
  });
  
  typeWriter();
});
// Animate skills on scroll
const skillCategories = document.querySelectorAll('.skill-category');

const animateSkills = () => {
  skillCategories.forEach((category, index) => {
    setTimeout(() => {
      category.style.opacity = '1';
      category.style.transform = 'translateY(0)';
    }, 150 * index);
  });
};

// Initialize animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      if (entry.target.id === 'skills') {
        animateSkills();
      }
      entry.target.classList.add('animated');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('section').forEach(section => {
  observer.observe(section);
});

// 3D tilt effect for project cards
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const x = e.clientX - card.getBoundingClientRect().left;
    const y = e.clientY - card.getBoundingClientRect().top;
    
    const centerX = card.offsetWidth / 2;
    const centerY = card.offsetHeight / 2;
    
    const angleX = (y - centerY) / 15;
    const angleY = (centerX - x) / 15;
    
    card.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) translateY(-10px)`;
  });
  
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(-10px)';
  });
});
buttons.forEach(btn => {
  btn.addEventListener('click', function(e) {
    let ripple = document.createElement('span');
    ripple.classList.add('ripple');
    this.appendChild(ripple);
    
    setTimeout(() => ripple.remove(), 500);
  });
});
new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate__animated', 'animate__fadeInUp');
    }
  });
});
document.getElementById('contactForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const form = e.target;
  const submitBtn = form.querySelector('button[type="submit"]');
  const btnText = submitBtn.querySelector('.btn-text');
  const btnIcon = submitBtn.querySelector('i');
  
  // Visual feedback
  submitBtn.disabled = true;
  btnText.textContent = 'Sending...';
  btnIcon.classList.replace('fa-paper-plane', 'fa-spinner', 'fa-pulse');
  
  try {
    const response = await fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: { 'Accept': 'application/json' }
    });
    
    if (response.ok) {
      form.innerHTML = `
        <div class="form-success">
          <i class="fas fa-check-circle"></i>
          <h3>Message Sent!</h3>
          <p>I'll respond within 24 hours.</p>
        </div>
      `;
    } else {
      throw new Error('Failed to send');
    }
  } catch (error) {
    const errorEl = document.createElement('p');
    errorEl.className = 'form-error';
    errorEl.textContent = 'Error sending message. Please try again.';
    form.appendChild(errorEl);
    
    btnText.textContent = 'Send Again';
    btnIcon.classList.replace('fa-spinner', 'fa-paper-plane');
    submitBtn.disabled = false;
  }
});
window.addEventListener('scroll', () => {
  document.querySelectorAll('section').forEach(sec => {
    const navLink = document.querySelector(`a[href="#${sec.id}"]`);
    if (isElementInViewport(sec)) {
      navLink.classList.add('active');
    } else {
      navLink.classList.remove('active');
    }
  });
});

function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top <= 100 &&
    rect.bottom >= 100
  );
}