// Function to toggle between "far" and "fas" heart icons when the heart button is clicked
function wishlist() {
    // Get references to the "far" and "fas" heart icons
    let heartFar = document.getElementById("heart-web-far");
    let heartFas = document.getElementById("heart-web-fas");
  
    // Check if the "far" icon is currently hidden (using the "hidden" class)
    if (heartFar.classList.contains("hidden")) {
      // If "far" is hidden, make it visible by removing the "hidden" class
      heartFar.classList.remove("hidden");
      // Hide the "fas" icon by adding the "hidden" class
      heartFas.classList.add("hidden");
    } else {
      // If "far" is visible, hide it by adding the "hidden" class
      heartFar.classList.add("hidden");
      // Make the "fas" icon visible by removing the "hidden" class
      heartFas.classList.remove("hidden");
    }
  }