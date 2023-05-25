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

  //CONTACT FORM

  function sendEmail(){
    var params = {
      reply_email: getElementById("email").value,
      message: getElementById("message").value
    };
    
    const serviceID = "service_qq2k9tr";
    const templateID = "template_h1kxlya";
    
    emailjs
      .send( serviceID, templateID, params )
      .then((res) => {
          document.getElementById("email").value = "";
          document.getElementById("message").value = "";
          console.log(res);
          alert("your message was sent successfully!");
      })
      .catch(err=>console.log(err));
  }

  function alertMail(){
    alert("your message was sent successfully!");
  }


  // GAME

  document.addEventListener("DOMContentLoaded", function() {
    // Define the number of bubbles to create
    const NUM_BUBBLES = 10;
  
    // Create an array to hold the bubbles
    let bubbles = [];
  
    // Get the dimensions of the screen
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
  
    // Create the bubbles
    for (let i = 0; i < NUM_BUBBLES; i++) {
      let bubble = document.createElement("div");
      bubble.classList.add("bubble");
  
      // Set random position within the screen space
      const bubbleSize = 50; // Assuming the bubble size is 50x50 pixels
      const randomX = Math.floor(Math.random() * (screenWidth - bubbleSize));
      const randomY = Math.floor(Math.random() * (screenHeight - bubbleSize));
      bubble.style.top = randomY + "px";
      bubble.style.left = randomX + "px";
  
      document.getElementById("bubble-container").appendChild(bubble);
      bubbles.push(bubble);
    }
  
    // Set initial position and velocity
    var x = 0; // initial x position
    var y = 0; // initial y position
    var vx = 2; // velocity along x-axis
    var vy = 2; // velocity along y-axis

    // Update the position of the bubble
    function updateBubblePosition() {
      // Update the position
      x += vx;
      y += vy;

      // Check if the bubble hit the edges
      if (x + bubble.offsetWidth >= window.innerWidth || x <= 0) {
        vx *= -1; // reverse velocity along x-axis
      }

      if (y + bubble.offsetHeight >= window.innerHeight || y <= 0) {
        vy *= -1; // reverse velocity along y-axis
      }

      // Set the new position
      bubble.style.left = x + 'px';
      bubble.style.top = y + 'px';

      // Call the updateBubblePosition function again
      requestAnimationFrame(updateBubblePosition);
    }

    // Start the animation
    updateBubblePosition();

  });


  