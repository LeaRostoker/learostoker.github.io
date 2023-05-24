window.addEventListener("DOMContentLoaded", () => {
    const nameElement = document.getElementById("name");
    const nameText = "Léa Rostoker.";
  
    let charIndex = 0;
    let timer;
  
    function type() {
      const text = nameText.slice(0, charIndex);
      nameElement.textContent = text;
      charIndex++;
  
      if (charIndex <= nameText.length) {
        timer = setTimeout(type, 100);
      } else {
        setTimeout(function() {
            profileImage.style.display = "block";
          }, 20);
        }
    }
  
    type();
  });

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      const targetElement = document.querySelector(this.getAttribute('href'));
      const offset = -70; 
      
      window.scrollTo({
        top: targetElement.offsetTop + offset,
        behavior: 'smooth'
      });
    });
  });

  document.addEventListener("DOMContentLoaded", function() {
    // Define the number of bubbles to create
    const NUM_BUBBLES = 10;
  
    let bubbles = [];
  
    // Create the bubbles
    for (let i = 0; i < NUM_BUBBLES; i++) {
      let bubble = document.createElement("div");
      bubble.classList.add("bubble");
      bubble.style.top = Math.floor(Math.random() * 80) + "%";
      bubble.style.left = Math.floor(Math.random() * 80) + "%";
      document.getElementById("bubble-container").appendChild(bubble);
      bubbles.push(bubble);
    }
  
    // Add a click event listener to each bubble
    for (let i = 0; i < bubbles.length; i++) {
      bubbles[i].addEventListener("click", function() {
        this.style.animation = "none";
        this.style.backgroundColor = "red";
        this.classList.remove("moving");
      });
    }
  
    // Move the bubbles around the screen
    setInterval(function() {
      for (let i = 0; i < bubbles.length; i++) {
        let top = parseInt(bubbles[i].style.top);
        let left = parseInt(bubbles[i].style.left);
        let newTop = top + Math.floor(Math.random() * 10) - 5;
        let newLeft = left + Math.floor(Math.random() * 10) - 5;
  
        if (newTop < 0 || newTop > 80) {
          newTop = top - Math.floor(Math.random() * 10);
        }
        if (newLeft < 0 || newLeft > 80) {
          newLeft = left - Math.floor(Math.random() * 10);
        }
  
        bubbles[i].style.top = newTop + "%";
        bubbles[i].style.left = newLeft + "%";
  
        if (bubbles[i].classList.contains("moving")) {
          bubbles[i].classList.remove("moving");
        } else {
          bubbles[i].classList.add("moving");
        }
      }
    }, 1000);
  });
  
  

  