'use strict';

// ===> Load Ionicons ES module and fallback <=== //
// Dynamically load the Ionicons ES module
const ioniconsModule = document.createElement('script');
ioniconsModule.type = 'module';
ioniconsModule.src = 'https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js';
document.body.appendChild(ioniconsModule);

// Load the Ionicons fallback script for browsers that don't support ES modules
const ioniconsNoModule = document.createElement('script');
ioniconsNoModule.setAttribute('nomodule', ''); // Attribute ensures it's loaded only in unsupported browsers
ioniconsNoModule.src = 'https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js';
document.body.appendChild(ioniconsNoModule);


// ===> NAVBAR TOGGLE LOGIC <=== //
// Grab DOM elements for navbar interaction
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// Store elements that control navbar visibility
const elemArr = [navCloseBtn, overlay, navOpenBtn];

// Add event listeners for navbar opening and closing
elemArr.forEach(elem => {
  elem.addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");

    // Toggle the body's scroll behavior when the navbar is active
    if (navbar.classList.contains("active")) {
      // Disable body scroll when navbar is open
      document.body.style.overflow = "hidden";
    } else {
      // Re-enable body scroll when navbar is closed
      document.body.style.overflow = "auto";
    }
  });
});

// Close navbar when clicking any navbar link
const navbarLinks = document.querySelectorAll("[data-navbar-link]");
navbarLinks.forEach(link => {
  link.addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");

    // Ensure body scroll is re-enabled when navbar closes
    document.body.style.overflow = "auto";
  });
});


// ===> QUOTE MODAL LOGIC <=== //
const quoteModal = document.querySelector('[quote-modal]');
const quoteModalOpenBtn = document.querySelector('[quote-modal-open]');
const quoteModalCloseBtn = document.querySelector('[quote-modal-close]');
const quoteCard = document.getElementById('quoteModalCard');

// Function to open the quote modal
function openQuoteModal() {
  quoteModal.classList.add('active');
  document.body.classList.add('modal-open');
  positionQuoteCloseButton(); // Reposition close button on open
}

// Function to close the quote modal
function closeQuoteModal() {
  quoteModal.classList.remove('active');
  document.body.classList.remove('modal-open');
}

// Event listener to open quote modal
quoteModalOpenBtn?.addEventListener('click', (e) => {
  e.preventDefault();
  openQuoteModal();
});

// Event listener to close quote modal
quoteModalCloseBtn?.addEventListener('click', closeQuoteModal);

// Position the close button relative to the quote modal card
function positionQuoteCloseButton() {
  const rect = quoteCard.getBoundingClientRect();
  quoteModalCloseBtn.style.top = `${rect.top - 20}px`;
  quoteModalCloseBtn.style.left = `${rect.right - 25}px`;
}

// Recalculate position on window resize
window.addEventListener('resize', () => {
  if (quoteModal.classList.contains('active')) {
    positionQuoteCloseButton();
  }
});

// Quote modal form submission
document.getElementById('quoteForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const formData = new FormData(this);
  const data = {
    name: formData.get('name'),
    email: formData.get('email'),
    project: formData.get('project'),
    budget: formData.get('budget'),
    message: formData.get('message')
  };

  // Send the form data to the backend
  fetch('http://localhost:3000/submit-quote', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        // Show the success popup
        document.getElementById('popup').style.display = 'flex';
      }
    })
    .catch(error => console.error('Error:', error));
});

// Close popup and reset the form
document.getElementById('okButton').addEventListener('click', function () {
  document.getElementById('popup').style.display = 'none';
  document.getElementById('quoteForm').reset(); // Reset the form fields
});


// ===> LEARN MORE BUTTON & MODAL LOGIC <=== //
const modalOpenBtn = document.querySelector('[data-modal-open]');
const modal = document.querySelector('[data-modal]');
const modalCloseBtn = document.querySelector('[data-modal-close]');

// Function to open the modal
function openModal() {
  modal.classList.add('active');
  document.body.classList.add('modal-open');
}

// Function to close the modal
function closeModal() {
  modal.classList.remove('active');
  document.body.classList.remove('modal-open');
}

// Event listeners for opening and closing modal
modalOpenBtn.addEventListener('click', openModal);
modalCloseBtn.addEventListener('click', closeModal);

// Function to position the modal close button
function positionModalCloseButton() {
  const dataModalCard = document.getElementById('dataModalCard');
  const closeBtn = document.getElementById('modalCloseBtn');
  if (!dataModalCard || !closeBtn) return;

  const rect = dataModalCard.getBoundingClientRect();
  closeBtn.style.top = `${rect.top - 20}px`;
  closeBtn.style.left = `${rect.right - 25}px`;
}

// Toggle modal display on button click
function toggleModal(show = true) {
  const modal = document.querySelector('[data-modal]');
  if (show) {
    modal.classList.add('active');
    document.body.classList.add('modal-open');
    positionModalCloseButton();
  } else {
    modal.classList.remove('active');
    document.body.classList.remove('modal-open');
  }
}

// Event listener to open and close modal
document.querySelector('[data-modal-open]')?.addEventListener('click', () => toggleModal(true));
document.querySelector('[data-modal-close]')?.addEventListener('click', () => toggleModal(false));

// Recalculate position on window resize
window.addEventListener('resize', () => {
  const modal = document.querySelector('[data-modal]');
  if (modal?.classList.contains('active')) {
    positionModalCloseButton();
  }
});


// ===> SERVICE MODAL LOGIC <=== //
// Show service modal on button click
const serviceButtons = document.querySelectorAll('[data-service]');
const serviceModals = document.querySelectorAll('[data-service-modal]');
const serviceCloseButtons = document.querySelectorAll('[data-service-modal-close]');

serviceButtons.forEach(button => {
  const id = button.dataset.service;
  button.addEventListener('click', () => {
    const modal = document.getElementById(`modal-${id}`);
    const content = document.getElementById(`modalServiceCard${capitalize(id)}`);
    const closeBtn = modal.querySelector('[data-service-modal-close]');

    modal.classList.add('active');
    document.body.classList.add('modal-open');

    // Position the close button after modal opens
    if (content && closeBtn) {
      requestAnimationFrame(() => {
        const rect = content.getBoundingClientRect();
        closeBtn.style.top = `${rect.top - 20}px`;
        closeBtn.style.left = `${rect.right - 25}px`;
      });
    }
  });
});

// Close service modal
serviceCloseButtons.forEach(button => {
  button.addEventListener('click', () => {
    const id = button.dataset.modalId;
    document.getElementById(`modal-${id}`).classList.remove('active');
    document.body.classList.remove('modal-open');
  });
});

// Recalculate position on window resize
window.addEventListener('resize', () => {
  serviceModals.forEach(modal => {
    if (modal.classList.contains('active')) {
      const id = modal.id.replace('modal-', '');
      const content = document.getElementById(`modalServiceCard${capitalize(id)}`);
      const closeBtn = modal.querySelector('[data-service-modal-close]');
      if (content && closeBtn) {
        const rect = content.getBoundingClientRect();
        closeBtn.style.top = `${rect.top - 20}px`;
        closeBtn.style.left = `${rect.right - 25}px`;
      }
    }
  });
});

// Utility function to capitalize the first letter of a string
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}


// ===> PROJECT MODAL LOGIC <=== //
const projectButtons = document.querySelectorAll('[data-project]');
const projectModals = document.querySelectorAll('[data-project-modal]');
const projectCloseButtons = document.querySelectorAll('[data-project-modal-close]');

// Iterate over each project button
projectButtons.forEach(button => {
  const id = button.dataset.project;
  button.addEventListener('click', () => {
    const modal = document.getElementById(`modal-project-${id}`);
    const content = document.getElementById(`modalProjectCard${id}`);
    const closeBtn = modal.querySelector('[data-project-modal-close]');

    modal.classList.add('active');
    document.body.classList.add('modal-open');

    // Position the close button relative to the modal content
    if (content && closeBtn) {
      requestAnimationFrame(() => {
        const rect = content.getBoundingClientRect();
        closeBtn.style.top = `${rect.top - 20}px`;
        closeBtn.style.left = `${rect.right - 25}px`;
      });
    }
  });
});

// Close button logic for project modals
projectCloseButtons.forEach(button => {
  button.addEventListener('click', () => {
    const id = button.dataset.modalId;
    document.getElementById(`modal-project-${id}`).classList.remove('active');
    document.body.classList.remove('modal-open');
  });
});

// Reposition close buttons on window resize for project modals
window.addEventListener('resize', () => {
  projectModals.forEach(modal => {
    if (modal.classList.contains('active')) {
      const id = modal.id.replace('modal-project-', '');
      const content = document.getElementById(`modalProjectCard${id}`);
      const closeBtn = modal.querySelector('[data-project-modal-close]');
      if (content && closeBtn) {
        const rect = content.getBoundingClientRect();
        closeBtn.style.top = `${rect.top - 20}px`;
        closeBtn.style.left = `${rect.right - 25}px`;
      }
    }
  });
});


// ===> BLOG MODAL LOGIC <=== //
const blogButtons = document.querySelectorAll('[data-blog]');
const blogModals = document.querySelectorAll('[data-blog-modal]');
const blogCloseButtons = document.querySelectorAll('[data-blog-modal-close]');

// Iterate over each blog button
blogButtons.forEach(button => {
  const id = button.dataset.blog;
  button.addEventListener('click', () => {
    const modal = document.getElementById(`modal-blog-${id}`);
    const content = document.getElementById(`modalBlogCard${id}`);
    const closeBtn = modal.querySelector('[data-blog-modal-close]');

    modal.classList.add('active');
    document.body.classList.add('modal-open');

    // Position the close button relative to the modal content
    if (content && closeBtn) {
      requestAnimationFrame(() => {
        const rect = content.getBoundingClientRect();
        closeBtn.style.top = `${rect.top - 20}px`;
        closeBtn.style.left = `${rect.right - 25}px`;
      });
    }
  });
});

// Close button logic for blog modals
blogCloseButtons.forEach(button => {
  button.addEventListener('click', () => {
    const id = button.dataset.modalId;
    const modal = document.getElementById(`modal-blog-${id}`);
    modal.classList.remove('active');
    document.body.classList.remove('modal-open');
  });
});

// Reposition blog modal close buttons on window resize
window.addEventListener('resize', () => {
  blogModals.forEach(modal => {
    if (modal.classList.contains('active')) {
      const id = modal.id.replace('modal-blog-', '');
      const content = document.getElementById(`modalBlogCard${id}`);
      const closeBtn = modal.querySelector('[data-blog-modal-close]');
      if (content && closeBtn) {
        const rect = content.getBoundingClientRect();
        closeBtn.style.top = `${rect.top - 20}px`;
        closeBtn.style.left = `${rect.right - 25}px`;
      }
    }
  });
});


// ===> NEWS MODAL LOGIC <=== //
const newsButtons = document.querySelectorAll('[data-news]');
const newsModals = document.querySelectorAll('[data-news-modal]');
const newsCloseButtons = document.querySelectorAll('[data-news-modal-close]');

// Iterate over each news button
newsButtons.forEach(button => {
  const id = button.dataset.news;
  button.addEventListener('click', () => {
    const modal = document.getElementById(`modal-news-${id}`);
    const content = document.getElementById(`modalNewsCard${id}`);
    const closeBtn = modal.querySelector('[data-news-modal-close]');

    modal.classList.add('active');
    document.body.classList.add('modal-open');

    // Position the close button relative to the modal content
    if (content && closeBtn) {
      requestAnimationFrame(() => {
        const rect = content.getBoundingClientRect();
        closeBtn.style.top = `${rect.top - 20}px`;
        closeBtn.style.left = `${rect.right - 25}px`;
      });
    }
  });
});

// Close button logic for news modals
newsCloseButtons.forEach(button => {
  button.addEventListener('click', () => {
    const id = button.dataset.modalId;
    const modal = document.getElementById(`modal-news-${id}`);
    modal.classList.remove('active');
    document.body.classList.remove('modal-open');
  });
});

// Close news modals if clicked outside the modal
newsModals.forEach(modal => {
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('active');
      document.body.classList.remove('modal-open');
    }
  });
});

// Reposition news modal close buttons on window resize
window.addEventListener('resize', () => {
  newsModals.forEach(modal => {
    if (modal.classList.contains('active')) {
      const id = modal.id.replace('modal-news-', '');
      const content = document.getElementById(`modalNewsCard${id}`);
      const closeBtn = modal.querySelector('[data-news-modal-close]');
      if (content && closeBtn) {
        const rect = content.getBoundingClientRect();
        closeBtn.style.top = `${rect.top - 20}px`;
        closeBtn.style.left = `${rect.right - 25}px`;
      }
    }
  });
});


// ===> GO-TOP-BUTTON ACTIVE LOGIC <=== //
const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

// Listen for scroll events to show/hide header and go-top button
window.addEventListener("scroll", function () {
  if (window.scrollY >= 300) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }
});



