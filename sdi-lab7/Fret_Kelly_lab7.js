alert("Lab 7 JSON Objects - JavaScript works!- 18 September 2014");


// global variables
var newAccSpeed;
var newDecSpeed;

// object
var myDrmCar = {
		
			make:       "Nissan",
			model:      "Altima",
			color:      "Maroon",
			curSpeed:   0,
			topSpeed:   150,
			getAccSpeed: function(speedup) {
				var incSpeed;
				
				this.incSpeed = this.curSpeed + this.speedup;	
			
				return incSpeed;
				
				}	
	
	
	
	
};


// main code
console.log("My dream car is a " + myDrmCar.color + ", " + myDrmCar.make + ", " + myDrmCar.model + ".");
myDrmCar.getAccSpeed(newAccSpeed);
console.log("The current speed is: " + newAccSpeed + "mph.");

