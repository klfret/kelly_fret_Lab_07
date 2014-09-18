alert("Lab 7 JSON Objects - JavaScript works!- 18 September 2014");


// global variables
var accSpeed;
var decSpeed;
var currentSpeed;

// object
var myDrmCar = {
		
			make:       "Nissan",
			model:      "Altima",
			color:      "Maroon",
			curSpeed:   0,
			topSpeed:   150,
			getAccSpeed: function(accel) {
				var incSpeed;
				
				this.incSpeed = this.curSpeed + this.accel;	
			
				return accel;
				
				}	
};


// main code
console.log("My dream car is a " + myDrmCar.color + ", " + myDrmCar.make + ", " + myDrmCar.model + ".");

var speedArray = [70, 100,151];

for (var i = 0; i < speedArray.length; i++) {
	
 		currentSpeed = myDrmCar.getAccSpeed(speedArray[i]);
		console.log("The current speed is " + currentSpeed + " mph.");
};




















