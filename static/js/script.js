document.addEventListener("DOMContentLoaded", function () {
    const accordionItems = document.querySelectorAll(".accordion-item");

    accordionItems.forEach((item) => {
      const header = item.querySelector(".accordion-header");
      const sign = item.querySelector(".toggle-sign");

      header.addEventListener("click", () => {
        item.classList.toggle("active");
        sign.textContent = item.classList.contains("active") ? "-" : "+";
      });
    });
  });
  function toggleMenu() {
    const navbar = document.querySelector(".navbarsm");
    navbar.classList.toggle("active");
  }

  // Add the following JavaScript for the accordion functionality
  document.addEventListener("DOMContentLoaded", function () {
    const accordionBtns = document.querySelectorAll(".accordion-btn");

    accordionBtns.forEach(function (btn) {
      btn.addEventListener("click", function () {
        this.classList.toggle("active");
        const content = this.nextElementSibling;
        if (content.style.display === "block") {
          content.style.display = "none";
        } else {
          content.style.display = "block";
        }
      });
    });
    const menuToggle = document.querySelector(".menu-toggle");
    menuToggle.addEventListener("click", toggleMenu);
  });
