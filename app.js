var targetFunds = 100;
var totalFunds = 47;

function clickCallback() {
  
  if(totalFunds + this.amount < targetFunds) {
    displayRemaining[0].innerHTML = 'You need ' + '&pound;' + (targetFunds - totalFunds) + ' more to reach your target';
    
  } else {
    displayRemaining[0].innerHTML = totalFunds + this.amount + ' TARGET REACHED!';
    
    buttons.forEach(function(button, index) {
      button.disabled = true;
    });
  }

  totalFunds += this.amount;
  display[0].innerText = totalFunds;
  progress.setAttribute("value", totalFunds);
};

// Get references to all DOM elements
var buttons = document.querySelectorAll(".js-button");
var display = document.querySelectorAll(".js-display");
var displayRemaining = document.querySelectorAll(".js-display-remaining");
var progress = document.getElementsByTagName("progress")[0];

// Iterate through list of buttons and initialise them with the needed values
buttons.forEach(function (button, index) {
  
  // Get the limit for this button from a custom data attribute in the button markup
  button.amount = parseInt(button.getAttribute("data-value"));

  // Bind the clickCallback to the button click event
  button.addEventListener('click', clickCallback, false); 

});


