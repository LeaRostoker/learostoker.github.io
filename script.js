window.addEventListener("DOMContentLoaded", () => {
    const nameElement = document.getElementById("name");
    const nameText = "Léa Rostoker";
  
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


  