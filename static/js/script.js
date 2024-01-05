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

    // // Function to show the appropriate modal based on the dropdown selection
    // function showSelectedModal() {
    //   var dropdown = document.getElementById('paymentMethod');
    //   var selectedOption = dropdown.options[dropdown.selectedIndex].value;
  
    //   if (selectedOption === 'card') {
    //     showModal('cardModal');
    //   } else if (selectedOption === 'bank') {
    //     showModal('bankModal');
    //   }
    // }
  
    // // Function to show a modal by ID
    // function showModal(modalId) {
    //   var modal = document.getElementById(modalId);
    //   modal.style.display = 'block';
    // }
  
    // // Function to close a modal by ID
    // function closeModal(modalId) {
    //   var modal = document.getElementById(modalId);
    //   modal.style.display = 'none';
    // }
  
    // // Attach an event listener to the "Donate Now" button
    // document.querySelector('.mainbtn').addEventListener('click', function() {
    //   // Call the function to show the appropriate modal
    //   showSelectedModal();
    // });