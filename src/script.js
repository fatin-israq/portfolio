if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark');
  }
  
  // Wait for the rest of the page to load
  document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector("#hamburger");
    const menu = document.querySelector("#menu");
    const sun = document.querySelector("#sun");
    const moon = document.querySelector("#moon");
    const hLinks = document.querySelectorAll("#hLink");
  
    // Dark mode toggle
    moon.addEventListener("click", () => {
      document.body.classList.add("dark");
      localStorage.setItem('darkMode', 'enabled');
    });
  
    sun.addEventListener("click", () => {
      document.body.classList.remove("dark");
      localStorage.setItem('darkMode', 'disabled');
    });
  
    // Mobile menu toggle
    hamburger.addEventListener("click", () => {
      menu.classList.toggle("hidden");
      hamburger.classList.toggle("bg-white");
    });
  
    hLinks.forEach(link => {
      link.addEventListener("click", () => {
        menu.classList.toggle("hidden");
        hamburger.classList.toggle("bg-white");
      });
    });
  });
  