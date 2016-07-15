function Counter(clicksLimit) {
  this.clicksLimit = clicksLimit;
  this.clicked = false; 
  console.log(this.clicked); // to be commented out
};

var firstCounter = new Counter(10);
var secondCounter = new Counter(15);
var thirdCounter = new Counter(1);

Counter.prototype.click = function() {
  
// i.e. $('#first-button').style.backgroundColor = "blue" to switch button color

  if(this.clicksLimit >= 1 ) {
    
    this.clicksLimit--;
    console.log('Limit now is: ' + this.clicksLimit);

  } else if (this.clicksLimit === 0) {

    this.clicksLimit = 0;
    console.log('Limit now is ZERO: ' + this.clicksLimit);
  }
};

function switchColor(button) {
  button.style.backgroundColor = "blue";
} 

// Event Listeners for all buttons
var firstButton = document.getElementById('first-button');     
firstButton.addEventListener('click', function() { firstCounter.click() }, false); 

var secondButton = document.getElementById('second-button');     
secondButton.addEventListener('click', function() { secondCounter.click() }, false); 

var thirdButton = document.getElementById('third-button');     
thirdButton.addEventListener('click', function() { thirdCounter.click() }, false); 

var resetButton = document.getElementById('reset-button');     
resetButton.addEventListener('click', function() {   
  firstCounter.clicksLimit = 10; 
  secondCounter.clicksLimit = 15;
  thirdCounter.clicksLimit = 1; 
  // this.clicked = false; switch to false again 
}, false);
