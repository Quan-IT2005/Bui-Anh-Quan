// Bùi Anh Quân - Interactive scripts & CV Modal
document.addEventListener('DOMContentLoaded', () => {
  // Modal Elements
  const cvModal = document.getElementById('cvModal');
  const openCvNavBtn = document.getElementById('openCvNavBtn');
  const openCvHeroBtn = document.getElementById('openCvHeroBtn');
  const openCvFooterBtn = document.getElementById('openCvFooterBtn');
  const closeCvBtn = document.getElementById('closeCvBtn');
  const closeCvFooterBtn = document.getElementById('closeCvFooterBtn');
  const printCvBtn = document.getElementById('printCvBtn');

  const openModal = () => {
    if (cvModal) {
      cvModal.classList.add('active');
      cvModal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }
  };

  const closeModal = () => {
    if (cvModal) {
      cvModal.classList.remove('active');
      cvModal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  };

  if (openCvNavBtn) openCvNavBtn.addEventListener('click', openModal);
  if (openCvHeroBtn) openCvHeroBtn.addEventListener('click', openModal);
  if (openCvFooterBtn) openCvFooterBtn.addEventListener('click', openModal);
  if (closeCvBtn) closeCvBtn.addEventListener('click', closeModal);
  if (closeCvFooterBtn) closeCvFooterBtn.addEventListener('click', closeModal);

  // Close when click backdrop
  if (cvModal) {
    cvModal.addEventListener('click', (e) => {
      if (e.target === cvModal) {
        closeModal();
      }
    });
  }

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && cvModal && cvModal.classList.contains('active')) {
      closeModal();
    }
  });

  // Print CV
  if (printCvBtn) {
    printCvBtn.addEventListener('click', () => {
      window.print();
    });
  }

  // Copy Email interaction
  const copyBtn = document.getElementById('copyEmailBtn');
  const copyText = document.getElementById('copyBtnText');
  const contactEmail = 'dtc235200608@ictu.edu.vn';

  if (copyBtn) {
    copyBtn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(contactEmail);
        const originalText = copyText.textContent;
        copyText.textContent = 'Đã sao chép: ' + contactEmail + ' ✓';
        copyBtn.style.borderColor = 'var(--accent-teal)';
        copyBtn.style.color = 'var(--accent-teal)';

        setTimeout(() => {
          copyText.textContent = originalText;
          copyBtn.style.borderColor = '';
          copyBtn.style.color = '';
        }, 2500);
      } catch (err) {
        prompt('Email của mình:', contactEmail);
      }
    });
  }

  // Smooth appearance on scroll (Intersection Observer)
  const animatedElements = document.querySelectorAll('.profile-card, .skill-item, .step-card');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15
  });

  animatedElements.forEach((el, index) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
    el.style.transitionDelay = ${(index % 4) * 0.1}s;
    observer.observe(el);
  });
});
