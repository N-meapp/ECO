const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const menuLinks = mobileMenu.querySelectorAll('a');
const logo = document.getElementById('logo-img');
const navbar = document.getElementById('navbar');

menuToggle.addEventListener('click', function(event) {
  mobileMenu.classList.toggle('hidden'); 
});

document.addEventListener('click', function(event) {
  if (!menuToggle.contains(event.target) && !mobileMenu.contains(event.target)) {
    mobileMenu.classList.add('hidden'); 
  }
});

mobileMenu.addEventListener('click', function(event) {
  event.stopPropagation();
});

menuLinks.forEach(link => {
  link.addEventListener('click', function() {
    mobileMenu.classList.add('hidden'); 
  });
});

window.addEventListener('scroll', function () {
  const links = navbar.querySelectorAll('a');
  const dropdownButton = document.getElementById('dropdownButton'); // Packages button
  const dropdownMenu = document.getElementById('dropdownMenu'); // Dropdown menu
  const dropdownLinks = dropdownMenu.querySelectorAll('a'); // Dropdown options

  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
    navbar.classList.remove('bg-transparent');
    logo.src = "./assets/images/logo2.png"; // Change logo on scroll
    menuToggle.classList.add('text-black');
    menuToggle.classList.remove('text-white');

    links.forEach(link => {
      link.classList.add('text-black');
      link.classList.remove('text-white');
    });

    // Ensure Packages button and dropdown links turn black
    dropdownButton.classList.add('text-black');
    dropdownButton.classList.remove('text-white');

    dropdownLinks.forEach(link => {
      link.classList.add('text-black');
      link.classList.remove('text-white');
    });
  } 
});


















 
  function openModal(imageSrc) {
    const modal = document.getElementById("modal");
    const modalImage = document.getElementById("modal-image");
    
    modal.classList.remove("hidden");  
    modalImage.src = imageSrc; 
  }
  

  function closeModal() {
    const modal = document.getElementById("modal");
    modal.classList.add("hidden");  
  }
  

  window.onclick = function(event) {
    const modal = document.getElementById("modal");
    if (event.target === modal) { 
        closeModal();  
    }
  };
  














  const scrollContainer = document.querySelector(".scroll-container");
  let isDown = false;
  let startX;
  let scrollLeft;
  
  scrollContainer.addEventListener("mousedown", (e) => {
    isDown = true;
    scrollContainer.classList.add("active");
    startX = e.pageX - scrollContainer.offsetLeft;
    scrollLeft = scrollContainer.scrollLeft;
  });
  
  scrollContainer.addEventListener("mouseleave", () => {
    isDown = false;
    scrollContainer.classList.remove("active");
  });
  
  scrollContainer.addEventListener("mouseup", () => {
    isDown = false;
    scrollContainer.classList.remove("active");
  });
  
  scrollContainer.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - scrollContainer.offsetLeft;
    const walk = (x - startX) * 2; 
    scrollContainer.scrollLeft = scrollLeft - walk;
  });
  document.addEventListener("DOMContentLoaded", function () {
    const scrollContainer = document.querySelector(".scroll-container");
    const leftArrow = document.getElementById("leftArrow");
    const rightArrow = document.getElementById("rightArrow");
    const cards = document.querySelectorAll(".card");
    let cardWidth = 0;
    
    function updateCardWidth() {
      if (cards.length > 0) {
        cardWidth = cards[0].offsetWidth; 
      }
    }
  
    function scrollLeft() {
      scrollContainer.scrollBy({ left: -cardWidth, behavior: "smooth" });
    }
  
    function scrollRight() {
      scrollContainer.scrollBy({ left: cardWidth, behavior: "smooth" });
    }
  

    leftArrow.addEventListener("click", scrollLeft);
    rightArrow.addEventListener("click", scrollRight);
  
   
    function disableAutoScrollOnMobile() {
      if (window.innerWidth <= 768) { 
        scrollContainer.style.overflowX = "hidden"; 
      } else {
        scrollContainer.style.overflowX = "auto"; 
      }
    }
  

    window.addEventListener("resize", function () {
      updateCardWidth();
      disableAutoScrollOnMobile();
    });
  

    updateCardWidth();
    disableAutoScrollOnMobile();
  });
  

  document.addEventListener("DOMContentLoaded", function () {
    function toggleList(clickedCard) {
        if (window.innerWidth <= 768) { // Enable click-based toggling only on small screens
            document.querySelectorAll(".card ul").forEach((list) => {
                if (list !== clickedCard.querySelector("ul")) {
                    list.classList.add("hidden");
                    list.classList.remove("opacity-100");
                }
            });

            let list = clickedCard.querySelector("ul");
            list.classList.toggle("hidden");
            list.classList.toggle("opacity-100");
        }
    }

    document.querySelectorAll(".card").forEach((card) => {
        card.addEventListener("click", function (event) {
            if (window.innerWidth <= 768) { // Apply click only for mobile view
                event.stopPropagation(); 
                toggleList(this);
            }
        });
    });

    // Click outside to close all lists (only in mobile view)
    document.addEventListener("click", function () {
        if (window.innerWidth <= 768) {
            document.querySelectorAll(".card ul").forEach((list) => {
                list.classList.add("hidden");
                list.classList.remove("opacity-100");
            });
        }
    });
});

  


document.addEventListener("DOMContentLoaded", function () {
  const reveals = document.querySelectorAll(".reveal");

  function revealOnScroll() {
    reveals.forEach((element) => {
      const windowHeight = window.innerHeight;
      const elementTop = element.getBoundingClientRect().top;
      const elementVisible = 100; // Adjust threshold

      if (elementTop < windowHeight - elementVisible) {
        element.classList.add("active");
      } else {
        element.classList.remove("active");
      }
    });
  }

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll(); // Run once in case elements are in view on load
});









const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");

option1.addEventListener("click", () => {
  option1.classList.add("bg-white", "text-black");
  option1.classList.remove("bg-transparent", "text-white");
  
  option2.classList.add("bg-transparent", "text-white");
  option2.classList.remove("bg-white", "text-black");
});

option2.addEventListener("click", () => {
  option2.classList.add("bg-white", "text-black");
  option2.classList.remove("bg-transparent", "text-white");

  option1.classList.add("bg-transparent", "text-white");
  option1.classList.remove("bg-white", "text-black");
});






