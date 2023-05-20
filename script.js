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
  

  