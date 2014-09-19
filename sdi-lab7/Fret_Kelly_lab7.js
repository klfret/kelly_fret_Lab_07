// alert("Lab 7 JSON Objects - JavaScript works!- 18 September 2014");

//Next, create two methods for the object. The first should be an acceleration 
//method so that when the method is called, the current speed property will update 
//by whatever amount you send into the method.  Note that this will require your 
//method to have an argument that is sent in when the method is called.  Also keep 
//in mind that the current speed can never exceed the top speed of the vehicle.

// global variables
var increase;
var decrease;
var resultAccSpeed;
var resultDecSpeed;
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
				
				// this.currentSpeed = this.currentSpeed + acceleration;
				
				this.currentSpeed = acceleration;
				
				if (this.currentSpeed <= this.topSpeed) {
					
					console.log("The current accelerated speed is " + this.currentSpeed + " mph.");
					
				} else {
					
					console.log("Invalid speed. The speed cannot exceed " + this.topSpeed + " mph.");
					// if user's speed acceleration is greater than the top speed, assign topSpeed to currentSpeed
					this.currentSpeed = this.topSpeed;
				}					
				
			return this.currentSpeed;
				
		},

	
		getDecSpeed: function(deceleration) {
		
			// this.currentSpeed = this.currentSpeed - deceleration;
			this.currentSpeed = deceleration;
			// console.log(this.currentSpeed);
			if (this.currentSpeed < 0) {
				
				console.log("Invalid speed. The speed cannot be less than 0.");
				// if user's speed deceleration is less than 0, assign 0 to currentSpeed
				this.currentSpeed = 0;
			}
			
		return this.currentSpeed;
		
		}
};


// main code
console.log("My dream car is a " + myDreamCar.color + "or White, fully loaded, " + myDreamCar.make + " " + myDreamCar.model + ".");
console.log("The vehicle is parked with a current speed of " + myDreamCar.currentSpeed + " mph, but has a top speed of " + myDreamCar.topSpeed + " mph.");
console.log("\n");


// for loop to call the getAccSpeed method and increase speed
for (var i = 0; i < 3; i++) {
	
	increase = parseInt(prompt("What speed do you want to accelerate to: ", "0"));
	
	//returnedAccSpeed = 
	myDreamCar.getAccSpeed(increase);
	//resultAccSpeed = returnedAccSpeed;
	//console.log(resultAccSpeed);
};

console.log("\n");
console.log("The current speed is now " + myDreamCar.currentSpeed + " mph");

// for loop to call the getDecSpeed method and decrease speed
for (var i = 0; i < 3; i++) {
	
	// console.log("The current speed is now " + myDreamCar.currentSpeed + " mph");
	
	decrease = parseInt(prompt("What speed do you want to decelerate to: ", "5"));
	//parseInt(decrease);
	returnedDecSpeed = myDreamCar.getDecSpeed(decrease);
	
	if (returnedDecSpeed <= 0) {
	
		console.log("The vehicle has come to a complete stop.")	;
		break;
	
	}
	
	//myDreamCar.getDecSpeed(decrease);
	
	//resultDecSpeed = returnedDecSpeed;
	//console.log("speed = " + returnedSpeed);
};

console.log("After deceleration the final current speed is " + returnedDecSpeed + " mph.");









