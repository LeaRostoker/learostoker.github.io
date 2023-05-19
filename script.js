document.addEventListener("DOMContentLoaded", function() {
    const nameElement = document.querySelector(".name");
    const nameText = "Lea Rostoker";
    let index = 0;
  
    function typeWriter() {
      if (index < nameText.length) {
        nameElement.textContent += nameText.charAt(index);
        index++;
        setTimeout(typeWriter, 100);
      }
    }
  
    typeWriter();
  });
  