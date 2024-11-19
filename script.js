const sound = new Audio(
    "https://freesound.org/data/previews/399/399934_1676145-lq.mp3"
  );
  
  popit.onclick = function (event) {
    const target = event.target;
  
    // Check if clicked element is a circle
    if (!target.matches(".circle")) {
      return;
    }
  
    // Play sound
    sound.pause();
    sound.currentTime = 0;
    sound.play();
  
    // Add vibration
    if ("vibrate" in navigator) {
      navigator.vibrate(100);
    }
  
    // Toggle "pressed" class
    target.classList.toggle("pressed");
  
    // Check if all circles are pressed
    const allCircles = document.querySelectorAll(".circle");
    const allPressed = Array.from(allCircles).every((circle) =>
      circle.classList.contains("pressed")
    );
  
    if (allPressed) {
      // Show popup message
      document.getElementById("popup-overlay").style.display = "block";
      document.getElementById("popup-message").style.display = "block";
  
      // Reset game after 3 seconds
      setTimeout(() => {
        document.getElementById("popup-overlay").style.display = "none";
        document.getElementById("popup-message").style.display = "none";
        location.reload(); // Reload the page
      }, 3000);
    }
  };
  