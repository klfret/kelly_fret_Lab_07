// alert("Lab 7 JSON Objects - JavaScript works!- 18 September 2014");



// global variables
var increase;
var decrease;
//var returnedAccSpeed;
var returnedDecSpeed;


// my vehicle object
var myDreamCar = {
		
			make:           "Nissan",
			model:          "Altima",
			color:          "Maroon",
			currentSpeed:   0,
			topSpeed:       175,
			
			getAccSpeed: function(acceleration) {
								
				this.currentSpeed = acceleration;
				
				if (this.currentSpeed <= this.topSpeed) {
					
					console.log("The current accelerated speed is " + this.currentSpeed + " mph.");
					
				} else {
					
					// if user's speed acceleration is greater than the top speed, output message and assign topSpeed to currentSpeed
					console.log("Invalid speed. The speed cannot exceed the vehicle's top speed of " + this.topSpeed + " mph.");
					
					this.currentSpeed = this.topSpeed;
				}					
				
			return this.currentSpeed;
				
		},

	
		getDecSpeed: function(deceleration) {
		
			this.currentSpeed = this.currentSpeed - deceleration;
			
			// if user's speed deceleration is less than 0, output message and assign 0 to currentSpeed
			if (this.currentSpeed < 0) {
				
				console.log("Invalid speed. The speed cannot be less than 0.");
				
				this.currentSpeed = 0;
			}
			
		return this.currentSpeed;
		
		}
};


// main code
console.log("My dream car is a " + myDreamCar.color + " or White, fully loaded, " + myDreamCar.make + " " + myDreamCar.model + ".");
console.log("The vehicle is parked with a current speed of " + myDreamCar.currentSpeed + " mph, but has a top speed of " + myDreamCar.topSpeed + " mph.");
console.log("\n");


// for loop to call the getAccSpeed method and increase the speed
for (var i = 0; i < 3; i++) {
	
	increase = parseInt(prompt("Enter number to accelerate speed: ", "0"));
	
	myDreamCar.getAccSpeed(increase);
	
};

console.log("\n");
console.log("The current speed is now " + myDreamCar.currentSpeed + " mph.");

// for loop to call the getDecSpeed method and decrease the speed
for (var i = 0; i < 3; i++) {
	
	decrease = parseInt(prompt("Enter number to decelerate speed: ", "5"));

	returnedDecSpeed = myDreamCar.getDecSpeed(decrease);
	
	if (returnedDecSpeed <= 0) {
	
		console.log("The vehicle has come to a complete stop.")	;
		break;
	
	}
	
};

console.log("After deceleration the final current speed is " + returnedDecSpeed + " mph.");
