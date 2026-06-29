const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

if (menuBtn && mobileMenu) {
  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
  });
}

/* Close mobile menu when clicking link */
const mobileLinks = document.querySelectorAll(".mobile-menu a");

mobileLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
  });
});

/* Replay animation every time section comes into view */
const animatedItems = document.querySelectorAll(
  ".reveal, .reveal-left, .reveal-right"
);

const animationObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      } else {
        entry.target.classList.remove("active");
      }
    });
  },
  {
    threshold: 0.25
  }
);

animatedItems.forEach((item) => {
  animationObserver.observe(item);
});

function revealOnScroll() {
  revealElements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (elementTop < windowHeight - 100) {
      element.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

/* Active navbar link on scroll */
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

function activeNavOnScroll() {
  let currentSection = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 120;
    const sectionHeight = section.offsetHeight;

    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href") === `#${currentSection}`) {
      link.classList.add("active");
    }
  });
}

window.addEventListener("scroll", activeNavOnScroll);

/* Contact form */
const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thanks! Your message has been submitted.");
    contactForm.reset();
  });
}/* Scroll reveal animation */
const revealItems = document.querySelectorAll(".reveal, .reveal-left, .reveal-right");

function revealOnScroll() {
  revealItems.forEach((item) => {
    const itemTop = item.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (itemTop < windowHeight - 100) {
      item.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
/* Replay front page animation every time Home section appears */
const homeSection = document.querySelector("#home");

if (homeSection) {
  const homeObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          homeSection.classList.add("home-active");
        } else {
          homeSection.classList.remove("home-active");
        }
      });
    },
    {
      threshold: 0.45
    }
  );

  homeObserver.observe(homeSection);
}
/* Replay ONLY person image animation when Home section comes back */
(() => {
  const homeSection = document.querySelector("#home");
  const personImage = document.querySelector(".person-layer");

  if (!homeSection || !personImage) return;

  const personObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // remove animation class first
          personImage.classList.remove("person-replay");

          // restart animation safely
          requestAnimationFrame(() => {
            personImage.classList.add("person-replay");
          });
        } else {
          // reset only person image, not right-side lines
          personImage.classList.remove("person-replay");
        }
      });
    },
    {
      threshold: 0.35
    }
  );

  personObserver.observe(homeSection);
})();
/* Replay right-side panel animation every time Home section appears */
(() => {
  const homeSection = document.querySelector("#home");
  const rightPanel = document.querySelector(".right-info-panel");

  if (!homeSection || !rightPanel) return;

  const rightPanelObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          rightPanel.classList.remove("panel-active");

          // restart animation
          void rightPanel.offsetWidth;

          rightPanel.classList.add("panel-active");
        } else {
          rightPanel.classList.remove("panel-active");
        }
      });
    },
    {
      threshold: 0.35
    }
  );

  rightPanelObserver.observe(homeSection);
})();
/* Replay skill card progress animation */
const skillCards = document.querySelectorAll(".creative-skill-card");

const skillObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      } else {
        entry.target.classList.remove("active");
      }
    });
  },
  {
    threshold: 0.35
  }
);
skillCards.forEach((card) => {
  skillObserver.observe(card);});
/* Top right Features button */
const topFeatureButtons = document.querySelectorAll(".top-feature-btn");

topFeatureButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const features = this.getAttribute("data-features");
    alert("Project Features:\n\n" + features);
  });
});
/* Auto show Features or Coming Soon based on data-status */
const projectStatusBoxes = document.querySelectorAll(".project-status");

projectStatusBoxes.forEach((box) => {
  const status = box.getAttribute("data-status");
  const features = box.getAttribute("data-features");

  if (status === "feature") {
    box.innerHTML = `
      <button class="top-feature-btn">
        Features
      </button>
    `;

    const featureBtn = box.querySelector(".top-feature-btn");

    featureBtn.addEventListener("click", function () {
      alert("Project Features:\n\n" + features);
    });
  }

  if (status === "coming") {
    box.innerHTML = `
      <span class="coming-soon-badge">
        Coming Soon
      </span>
    `;
  }
});
/* ================= SAFE CONTACT FORM WORKING ================= */
const footerYear = document.querySelector("#footerYear");

if (footerYear) {
  footerYear.textContent = new Date().getFullYear();
}
function sendEmail(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  const subject = "New Portfolio Message from " + name;

  const body =
    "Name: " + name + "\n" +
    "Email: " + email + "\n\n" +
    "Message:\n" + message;

  window.location.href =
    "mailto:aryansinghatwork@gmail.com?subject=" +
    encodeURIComponent(subject) +
    "&body=" +
    encodeURIComponent(body);
}
