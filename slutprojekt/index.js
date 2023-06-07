function scrollToSection(event) {
    event.preventDefault();
    const targetSection = document.querySelector(this.getAttribute('href'));
    targetSection.scrollIntoView({ behavior: 'smooth' });
  }
  
  const aboutUsButton = document.querySelector('a[href="#about-us"]');
  aboutUsButton.addEventListener('click', scrollToSection);


  const productButton = document.querySelector('a[href="#products"]');
  productButton.addEventListener('click', scrollToSection);