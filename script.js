// Bùi Anh Quân - Interactive scripts
document.addEventListener('DOMContentLoaded', () => {
  // Copy Email interaction
  const copyBtn = document.getElementById('copyEmailBtn');
  const copyText = document.getElementById('copyBtnText');
  const contactEmail = 'quan.it2005@gmail.com';

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
