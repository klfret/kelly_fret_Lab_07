// alert("Lab 7 Objects - JavaScript works!- 18 September 2014");


// Kelly L. Fret
// SDI 1409
// Lab 7 - Objects
// 19 September 2014



// global variables
var increase = 0;
var decrease = 35;
var returnedDecSpeed;


// my vehicle object
var myDreamCar = {
		
			make:           "Nissan",
			model:          "Altima",
			color:          "Maroon",
			currentSpeed:   0,
			topSpeed:       175,
			
			// acceleration method
			getAccSpeed: function(acceleration) {
								
				this.currentSpeed = acceleration;
				
				if (this.currentSpeed <= this.topSpeed) {
					
					// if currentSpeed is less than or equal to topSpeed, output message
					console.log("The current accelerated speed is " + this.currentSpeed + " mph.");
					
				} else {
					
					// if speed acceleration is greater than the top speed, output message and assign topSpeed to currentSpeed
					console.log("Invalid speed. The speed cannot exceed the vehicle's top speed of " + this.topSpeed + " mph.");
					
					this.currentSpeed = this.topSpeed;
				}					
				
			// when method's process is complete, return currentSpeed's value
			return this.currentSpeed;
				
		},

		// deceleration method
		getDecSpeed: function(deceleration) {
		
			this.currentSpeed = this.currentSpeed - deceleration;
			
			// if speed deceleration is less than 0, output message and assign 0 to currentSpeed
			if (this.currentSpeed < 0) {
				
				console.log("Invalid speed. The speed cannot be less than 0.");
				
				this.currentSpeed = 0;
			}
			
		// when method's process is complete, return currentSpeed's value
		return this.currentSpeed;
		
		}
};


// main code
// output initial values
console.log("My dream car is a " + myDreamCar.color + " or White, fully loaded, " + myDreamCar.make + " " + myDreamCar.model + ".");
console.log("\n");
console.log("The vehicle is parked with a current speed of " + myDreamCar.currentSpeed + " mph, but has a top speed of " + myDreamCar.topSpeed + " mph.");
console.log("\n");


// for loop to call the getAccSpeed method and increase the speed
for (var i = 0; i < 3; i++) {
	
	// accelerate increase's values by 30
	increase += 30;
	
	// call getAccSpeed method
	myDreamCar.getAccSpeed(increase);
	
};

console.log("\n");
// output current speed
console.log("The current speed is now " + myDreamCar.currentSpeed + " mph.");


// for loop to call the getDecSpeed method and decrease the speed
for (var i = 0; i < 3; i++) {
	
	// decelerate decrease's values by 5
	decrease -= 5;
	
	// call getDecSpeed method
	returnedDecSpeed = myDreamCar.getDecSpeed(decrease);
	
	if (returnedDecSpeed <= 0) {
		
		// bring vehicle to complete stop
		console.log("The vehicle has come to a complete stop.")	;
		break;
	
	}
	
};

console.log("\n");
// output final current speed
console.log("After deceleration the final current speed is " + returnedDecSpeed + " mph.");
