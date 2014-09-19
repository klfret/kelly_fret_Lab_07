// alert("Lab 7 JSON Objects - JavaScript works!- 18 September 2014");

//Next, create two methods for the object. The first should be an acceleration 
//method so that when the method is called, the current speed property will update 
//by whatever amount you send into the method.  Note that this will require your 
//method to have an argument that is sent in when the method is called.  Also keep 
//in mind that the current speed can never exceed the top speed of the vehicle.

// global variables
var increase = 55;
var decrease;
var resultSpeed;

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
					
					//this.currentSpeed = this.currentSpeed + acceleration;
					console.log("The current speed is " + this.currentSpeed + "mph.");
					
				} else {
					
					console.log("Not allow to exceed the vehicle's top speed limit of " + this.topSpeed + "mph.");
				}					
			
			return this.currentSpeed;
				
			}
};


// main code
console.log("My dream car is a " + myDreamCar.color + ", " + myDreamCar.make + " " + myDreamCar.model + ".");
console.log("This vehicle has a top speed of " + myDreamCar.topSpeed + "mph.");


for (var i = 0; i < 3; i++) {
	
	returnedSpeed = myDreamCar.getAccSpeed(increase);
	increase = increase + returnedSpeed;
	console.log(increase);
};













