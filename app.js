var targetFunds = 100;
var startFunds = 47;
var totalFunds = startFunds;

function clickCallback() {
  
  // Toping up funds based on the amount passed from the button
  totalFunds += this.amount;

  // As long as accumulated funds are below 100 (target funds to be collected)
  if(totalFunds < targetFunds) {

    displayRemaining[0].innerHTML = 'You need ' + '&pound;' + (targetFunds - totalFunds) + ' more to reach your target'; 
    var procentage = 'width: ' + totalFunds + '%';
  
  // Once accumulated funds reach or are just over 100 (target funds to be collected)
  } else if(totalFunds >= targetFunds) {
    
    displayRemaining[0].innerHTML = 'Target reached! ' + '&pound;' + totalFunds + ' in total' ;
    var procentage = 'width: ' + targetFunds + '%';
    disableButtons();     
  }

  // Update display message with the accumulated amount
  display[0].innerHTML = '&pound;' + totalFunds;
  // Attach style set with procentage variable
  progress.setAttribute('style', procentage);

};

// Get references to all DOM elements
var buttons = document.querySelectorAll(".js-button");
var display = document.querySelectorAll(".counter");
var displayRemaining = document.querySelectorAll(".layout__message");
var progress = document.querySelector(".meter > span");

// Iterate through list of buttons and initialise them with the amounts
buttons.forEach(function (button, index) {
  
  // Get the limit for this button from a custom data attribute in the button markup
  button.amount = parseInt(button.getAttribute("data-value"));

  // Bind the clickCallback to the button click event
  button.addEventListener('click', clickCallback, false); 

});

function animateBar() { 
  var position = 0;
  
  setInterval(function() {
    if(position <= startFunds) { 
      display[0].innerHTML = '&pound;' + totalFunds;
      procentage = 'width: ' + position + '%';
      progress.setAttribute('style', procentage);
      position++;
    } 
  }, 2000/60);
}

function disableButtons() {
 // Disabling buttons so they cannot be clicked after target of £100 is reached
  buttons.forEach(function(button, index) {
    button.disabled = true;
  });
}



/* 

// Version to disable button if the value on the button pressed is over the remaining amount, 
// may continue with lower amount until max 100 is reached, was not sure whether on last click going over 100 is allowed, hence this script

function clickCallback() {
  
  totalFunds + this.amount <= targetFunds ? totalFunds += this.amount : this.disabled = true;
  display[0].innerText = totalFunds;

};

*/
