// alert("Lab 7 JSON Objects - JavaScript works!- 18 September 2014");

//Next, create two methods for the object. The first should be an acceleration 
//method so that when the method is called, the current speed property will update 
//by whatever amount you send into the method.  Note that this will require your 
//method to have an argument that is sent in when the method is called.  Also keep 
//in mind that the current speed can never exceed the top speed of the vehicle.

// global variables
var increase = 40;
var decrease = 30;
var resultSpeed;
var returnedAccSpeed;
var returnedDecSpeed;


// object
var myDreamCar = {
		
			make:           "Nissan",
			model:          "Altima",
			color:          "Maroon",
			currentSpeed:   0,
			topSpeed:       175,
			
			getAccSpeed:    function(acceleration) {
				
				this.currentSpeed = acceleration;
				
				if (this.currentSpeed <= this.topSpeed) {
					
					console.log("The current speed is " + this.currentSpeed + " mph.");
					
				} else {
					
					console.log("Invalid speed. The speed cannot exceed " + this.topSpeed + " mph.");
				}					
			
			return this.currentSpeed;
				
		},

	
		getDecSpeed: function(deceleration) {
		
			this.currentSpeed = this.currentSpeed - deceleration;
			// console.log(this.currentSpeed);
			if (this.CurrentSpeed < 0) {
				
				console.log("Invalid speed. The speed must be greater than 0.");
			}
			
		return this.currentSpeed;
		
		}
};


// main code
console.log("My dream car is a " + myDreamCar.color + ", " + myDreamCar.make + " " + myDreamCar.model + ".");
console.log("The vehicle is parked with a current speed of " + myDreamCar.currentSpeed + " mph, but has a top speed of " + myDreamCar.topSpeed + " mph.");

// for loop to call the getAccSpeed method and increase speed
for (var i = 0; i < 3; i++) {
	
	returnedAccSpeed = myDreamCar.getAccSpeed(increase);
	increase = increase + returnedAccSpeed;
	
};


// for loop to call the getDecSpeed method and decrease speed
for (var i = 0; i < 3; i++) {
	console.log("initial " + decrease);
	returnedDecSpeed = myDreamCar.getDecSpeed(decrease);
	//console.log(returnedDecSpeed);
	resultSpeed = returnedDecSpeed;
	console.log("second " + resultSpeed);
};

console.log("The final speed is " + resultSpeed + " mph.");









