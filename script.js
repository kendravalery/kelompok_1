document.addEventListener("DOMContentLoaded", () => {
  const menuicon = document.querySelector('#menu-icon');
  const navbar = document.querySelector('.navbar');
  const sections = document.querySelectorAll('section');
  const navlinks = document.querySelectorAll('header nav a');

  menuicon.onclick = () => {
    menuicon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
  };

  window.onscroll = () => {
    let top = window.scrollY;

    sections.forEach(sec => {
      let offset = sec.offsetTop - 150;
      let height = sec.offsetHeight;
      let id = sec.getAttribute('id');

      if (top >= offset && top < offset + height) {
        navlinks.forEach(link => {
          link.classList.remove('active');
        });
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      }
    });

    // Close menu on scroll (mobile)
    menuicon.classList.remove('bx-x');
    navbar.classList.remove('active');
  };
});
