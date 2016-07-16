function Counter(clicksLimit) {
  this.clicksLimit = clicksLimit;
  //this.color = "yellow"; 
  // console.log(this.clicked); // to be commented out
};

var firstCounter = new Counter(10);
var secondCounter = new Counter(15);
var thirdCounter = new Counter(1);

Counter.prototype.click = function(button) {
  
  // Color check and change
  if(this.clicksLimit > 1) {
    button.style.backgroundColor = "blue";
  } else if(this.clicksLimit <= 1) {
    button.style.backgroundColor = "red";
    button.disabled = true;    
  }

  // Click limit counter
  if(this.clicksLimit >= 1 ) {
    this.clicksLimit--;
    console.log('Limit now is: ' + this.clicksLimit);
  } else if (this.clicksLimit === 0) {
    this.clicksLimit = 0;
    console.log('Limit now is ZERO: ' + this.clicksLimit);
  }
};

Counter.prototype.reset = function() {
  firstCounter.clicksLimit = 10; 
  secondCounter.clicksLimit = 15;
  thirdCounter.clicksLimit = 1; 

  firstButton.style.backgroundColor = "yellow"; 
  secondButton.style.backgroundColor = "yellow"; 
  thirdButton.style.backgroundColor = "yellow"; 
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
  
  firstCounter.clicksLimit = 10; 
  secondCounter.clicksLimit = 15;
  thirdCounter.clicksLimit = 1; 

  firstButton.style.backgroundColor = "yellow"; 
  secondButton.style.backgroundColor = "yellow"; 
  thirdButton.style.backgroundColor = "yellow";

  firstButton.disabled = false; 
  secondButton.disabled = false; 
  thirdButton.disabled = false;  

}, false);
