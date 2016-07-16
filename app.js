function Counter(clicksLimit) {
  this.clicksLimit = clicksLimit;
  this.clicksNumber = 0;
};

var firstCounter = new Counter(10);
var secondCounter = new Counter(15);
var thirdCounter = new Counter(1);

Counter.prototype.click = function(button) {
 
  this.clicksNumber++;
 
  if(this.clicksNumber < this.clicksLimit) {

    button.style.backgroundColor = "blue";
    button.nextSibling.innerHTML = this.clicksNumber;
    console.log('Limit: ' + this.clicksLimit + ' number of clicks: ' + this.clicksNumber);

  } else if(this.clicksNumber === this.clicksLimit) {
  
    button.style.backgroundColor = "red";
    button.disabled = true;
    button.nextSibling.innerHTML = this.clicksLimit;
    console.log('Limit: ' + this.clicksLimit + ' number of clicks: ' + this.clicksNumber);
  
  }
};

// Event Listeners for all buttons
var firstButton = document.getElementById('first-button');     
firstButton.addEventListener('click', function() { firstCounter.click(firstButton) }, false); 

var secondButton = document.getElementById('second-button');     
secondButton.addEventListener('click', function() { secondCounter.click(secondButton) }, false); 

var thirdButton = document.getElementById('third-button');     
thirdButton.addEventListener('click', function() { thirdCounter.click(thirdButton) }, false); 

var resetButton = document.getElementById('reset-button');     
resetButton.addEventListener('click', function() {   

  // Reset of click limit values
  firstCounter.clicksLimit = 10; 
  secondCounter.clicksLimit = 15;
  thirdCounter.clicksLimit = 1; 

  firstCounter.clicksNumber = 0; 
  secondCounter.clicksNumber = 0;
  thirdCounter.clicksNumber = 0; 

  // Reset of default color
  firstButton.style.backgroundColor = "yellow"; 
  secondButton.style.backgroundColor = "yellow"; 
  thirdButton.style.backgroundColor = "yellow";

  // Reset of buttons to be active 
  firstButton.disabled = false; 
  secondButton.disabled = false; 
  thirdButton.disabled = false;  

  // Reset to remove counter values
  firstButton.nextSibling.innerHTML = '';
  secondButton.nextSibling.innerHTML = '';
  thirdButton.nextSibling.innerHTML = '';

}, false);
