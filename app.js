function clickCallback() {
  
  if (this.clickCounter < this.clickLimit) {
    
    this.clickCounter++;
    this.classList.add("counter-active");

    // Assuming there will be 1 display element for each button, in the right order in the DOM;
    displays[this.buttonIndex].innerText = this.clickCounter;

    if (this.clickCounter === this.clickLimit) {
      this.disabled = true;
      this.innerText = "NO MORE!";
    }

  }

};

function resetCallback() {

  // Reset all buttons
  buttons.forEach(function (button) {
    button.disabled = false;
    button.clickCounter = 0;
    button.classList.remove("counter-active");
    button.innerText = button.defaultText;
  });

  // Reset all displays
  displays.forEach(function (display) {
    display.innerText = "";
  });

}

// Get references to all DOM elements
var buttons = document.querySelectorAll(".js-button");
var displays = document.querySelectorAll(".js-display");
var reset = document.querySelector(".js-reset");

// Iterate through list of buttons and initialise them with the needed values
buttons.forEach(function (button, index) {

  // Index of this button in the list of buttons to be saved as a custom property in the button object
  button.buttonIndex = index;

  // Original text shown in the button (Click Me) to be used later when resetting the button
  button.defaultText = button.innerText; 
  
  // Initial click counter value
  button.clickCounter = 0;

  // Get the limit for this button from a custom data attribute in the button markup
  button.clickLimit = parseInt(button.getAttribute("data-limit"));

  // Bind the clickCallback to the button click event
  button.addEventListener('click', clickCallback, false); 

});

// Bind the resetCallback to the reset button click event
reset.addEventListener('click', resetCallback, false); 

