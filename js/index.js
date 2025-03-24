document.addEventListener("DOMContentLoaded", function() {
  console.log("DOM fully loaded");

  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const logo = document.getElementById('logo-img');
  const navbar = document.getElementById('navbar');

  if (!menuToggle || !mobileMenu || !logo || !navbar) {
      console.error("One or more elements are missing!");
      return; // Stop execution if elements are missing
  }

  menuToggle.addEventListener('click', function(event) {
      mobileMenu.classList.toggle('hidden'); 
  });

  document.addEventListener('click', function(event) {
      if (!menuToggle.contains(event.target) && !mobileMenu.contains(event.target)) {
          mobileMenu.classList.add('hidden'); 
      }
  });

  window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
        navbar.classList.remove('bg-transparent');
        navbar.classList.add('bg-white'); // Change this if you want another color
        logo.src = "./assets/images/logo2.png";
        menuToggle.classList.add('text-black');
        menuToggle.classList.remove('text-white');

        navbar.querySelectorAll('a').forEach(link => {
            link.classList.add('text-black');
            link.classList.remove('text-white');
        });
    } else {
        navbar.classList.add('bg-transparent');
        navbar.classList.remove('bg-white');
        logo.src = "./assets/images/logo.png"; // Change back to original logo
        menuToggle.classList.add('text-white');
        menuToggle.classList.remove('text-black');

        navbar.querySelectorAll('a').forEach(link => {
            link.classList.add('text-white');
            link.classList.remove('text-black');
        });
    }
});

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
        // Hide all other lists except the clicked one
        document.querySelectorAll(".card ul").forEach((list) => {
            if (list !== clickedCard.querySelector("ul")) {
                list.classList.add("hidden");
                list.classList.remove("opacity-100");
            }
        });

        // Toggle visibility of the clicked card's list
        let list = clickedCard.querySelector("ul");
        list.classList.toggle("hidden");
        list.classList.toggle("opacity-100");
    }

    document.querySelectorAll(".card").forEach((card) => {
        card.addEventListener("click", function (event) {
            event.stopPropagation(); 
            toggleList(this);
        });
    });

    // Click outside to close all lists
    document.addEventListener("click", function () {
        document.querySelectorAll(".card ul").forEach((list) => {
            list.classList.add("hidden");
            list.classList.remove("opacity-100");
        });
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




