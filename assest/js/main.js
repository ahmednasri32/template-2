document.addEventListener("DOMContentLoaded", () => {
  /*============================
    DOM Element
  ============================*/
  const toggleMenu  = document.querySelector(".toggle-menu");
  const navMenu     = document.querySelector(".nav-links");
  const navLinks    = document.querySelectorAll(".nav-links li a");

  const bullets     = document.querySelectorAll(".bullet");

  const searchBtn   = document.getElementById("searchBtn");
  const searchInput = document.getElementById("searchInput");

  /* ===========================
    Toggle Mobile menu
  =============================*/
  if (toggleMenu && navMenu) {
    toggleMenu.addEventListener("click", (e) => {
      e.stopPropagation();
      navMenu.classList.toggle("open");
    });
  }

  /*============================
    Active Navbar Links
  =============================*/
  if (navLinks.length) {
    navLinks.forEach(link => {
      link.addEventListener("click", () => {

        navLinks.forEach(l => l.classList.remove("active"));
        link.classList.add("active");

        // close menu on mobile
        navMenu.classList.remove("open");
      });
    });
  }

  /*============================
    Close Menu When Click Outside
  ============================*/
  document.addEventListener("click", (e) => {
    if (!e.target.closest("nav")) {
      navMenu.classList.remove("open");
    }
  });
  /*============================
    Landing Bulllets Active
  ============================*/
   if (bullets.length) {
    bullets.forEach(bullet => {
      bullet.addEventListener("click", () => {
        bullets.forEach(b => b.classList.remove("active"));
        bullet.classList.add("active");
      });
    });
  }

  /* ===============================
     Search Box Toggle
  ================================ */
  if (searchBtn && searchInput) {
    searchBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      searchInput.classList.toggle("active");
      searchInput.focus();
    });

    document.addEventListener("click", (e) => {
      if (!e.target.closest(".search-box")) {
        searchInput.classList.remove("active");
      }
    });
  }

});