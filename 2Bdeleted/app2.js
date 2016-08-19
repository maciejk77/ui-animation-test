// Version to disable button if the amount on the button pressed is over the max limit, may continue with lower amount until max 100 is reached

var targetFunds = 100;
var totalFunds = 47;

function clickCallback() {
  
  totalFunds + this.amount <= targetFunds ? totalFunds += this.amount : this.disabled = true;
  display[0].innerText = totalFunds;

};

// Get references to all DOM elements
var buttons = document.querySelectorAll(".js-button");
var display = document.querySelectorAll(".js-display");

// Iterate through list of buttons and initialise them with the needed values
buttons.forEach(function (button, index) {
  
  // Get the limit for this button from a custom data attribute in the button markup
  button.amount = parseInt(button.getAttribute("data-value"));

  // Bind the clickCallback to the button click event
  button.addEventListener('click', clickCallback, false); 

});