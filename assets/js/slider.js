
  const slider = document.getElementById('slider');
  const slideLeft = document.getElementById('slide-left');
  const slideRight = document.getElementById('slide-right');

  const scrollAmount = 300;     // jarak scroll per langkah
  const autoSlideDelay = 3000;  // delay dalam ms (3 detik)

  // Tombol manual
  slideLeft.addEventListener('click', () => {
    slider.scrollLeft -= scrollAmount;
  });

  slideRight.addEventListener('click', () => {
    slider.scrollLeft += scrollAmount;
  });

  // Auto slide
  let autoSlide = setInterval(() => {
    // Jika sudah di ujung kanan, balik ke awal
    if (slider.scrollLeft + slider.offsetWidth >= slider.scrollWidth) {
      slider.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
      slider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  }, autoSlideDelay);

