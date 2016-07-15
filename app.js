function Counter(clicksLimit) {
  this.clicksLimit = clicksLimit;
};

var firstCounter = new Counter(10);
var secondCounter = new Counter(15);
var thirdCounter = new Counter(1);

Counter.prototype.down = function() {
  
  if(this.clicksLimit >= 1 ) {
    
    this.clicksLimit--;
    console.log('Limit now is: ' + this.clicksLimit);

  } else if (this.clicksLimit === 0) {

    this.clicksLimit = 0;
    console.log('Limit now is ZERO : ' + this.clicksLimit);
  }  
};

var firstButton = document.getElementById('first-button');     
firstButton.addEventListener('click', function() { firstCounter.down() }, false); 

var secondButton = document.getElementById('second-button');     
secondButton.addEventListener('click', function() { secondCounter.down() }, false); 

var thirdButton = document.getElementById('third-button');     
thirdButton.addEventListener('click', function() { thirdCounter.down() }, false); 

