function Counter(clicksLimit) {
  this.clicksLimit = clicksLimit;
};

var firstCounter = new Counter(10);
var secondCounter = new Counter(15);
var thirdCounter = new Counter(1);

Counter.prototype.reset = function() {
  return firstCounter;
  return secondCounter;
  return thirdCounter;
};

Counter.prototype.down = function() {
  
  if(this.clicksLimit >= 1 ) {
    
    this.clicksLimit--;
    console.log('Limit now is: ' + this.clicksLimit);

  } else if (this.clicksLimit === 0) {

    this.clicksLimit = 0;
    console.log('Limit now is ZERO : ' + this.clicksLimit);
  }  
};

// Event Listeners for all buttons
var firstButton = document.getElementById('first-button');     
firstButton.addEventListener('click', function() { firstCounter.down() }, false); 

var secondButton = document.getElementById('second-button');     
secondButton.addEventListener('click', function() { secondCounter.down() }, false); 

var thirdButton = document.getElementById('third-button');     
thirdButton.addEventListener('click', function() { thirdCounter.down() }, false); 

var resetButton = document.getElementById('reset-button');     
resetButton.addEventListener('click', function() { 
  
  firstCounter.clicksLimit = 10; 
  secondCounter.clicksLimit = 15;
  thirdCounter.clicksLimit = 1; 

}, false);
