document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const sidebar = document.querySelector('.sidebar');
    const container = document.querySelector('.container'); // Select the content container
  
    hamburgerMenu.addEventListener('click', function() {
      sidebar.classList.toggle('open');
      container.classList.toggle('open'); // Toggle a class on the content container
    });
  });