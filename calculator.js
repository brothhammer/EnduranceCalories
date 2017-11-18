// Takes in all of the command line arguments
var inputString = process.argv;

// Parses the command line argument to capture the "operand" (add, subtract, multiply, etc) and the numbers
var sex = inputString[2];
var height = inputString[3];
var age = inputString[4];
var activity = inputString[5];
var weight = inputString[6];
var speed = inputString[7];
var duration = inputString[8];


// Here's the variable we will be modifying with the new numbers
var outputCalories;
var rmr;

if (sex === "female") {
  rmr = (9.99 * (parseFloat(weight)*.454))+(6.25 * parseFloat(height))-(4.92*parseFloat(age))-161;
}else if (sex === "male"){
  rmr = (9.99 * (parseFloat(weight)*.454))+(6.25 * parseFloat(height))-(4.92*parseFloat(age))+5;
}

// Determines the operand selected...
// Based on the operand we run the appropriate math on the two numbers
if (activity === "running") {
  if(speed === "5") {
    outputCalories = ((0.0616 * parseFloat(weight))-0.145)*parseFloat(duration);
  }else if (speed === "7") {
    outputCalories = ((0.0863 * parseFloat(weight))-0.168)*parseFloat(duration);
  }else if (speed === "9") {
    outputCalories = ((0.109 * parseFloat(weight))-0.159)*parseFloat(duration);
  }else(console.log("Speed not represented"))
}

else if (activity === "swimming") {
  if(speed === "25") {
    outputCalories = ((0.04 * parseFloat(weight))-0)*parseFloat(duration);
  }else if (speed === "35") {
    outputCalories = ((0.0484 * parseFloat(weight))+0.0545)*parseFloat(duration);
  }else if (speed === "50") {
    outputCalories = ((0.0719 * parseFloat(weight))-0.177)*parseFloat(duration);
  }else(console.log("Speed not represented"))
}

else if (operand === "cycling") {
  if(speed === "15") {
    outputCalories = ((0.0725 * parseFloat(weight))+0.00909)*parseFloat(duration);
  }else if (speed === "20") {
    outputCalories = ((0.107 * parseFloat(weight))+0.0182)*parseFloat(duration);
  }else if (speed === "25") {
    outputCalories = ((0.136 * parseFloat(weight))-0.0682)*parseFloat(duration);
  }else(console.log("Speed not represented"))
}

else if (operand === "lifting") {
  outputCalories = ((0.0528 * parseFloat(weight))-0.105)*parseFloat(duration);
}

else if (operand === "aerobic") {
  outputCalories = ((0.0461 * parseFloat(weight))+0.105)*parseFloat(duration);
}

else {
  outputNum = "Not a recognized command";
}


// Prints the outputNumber
console.log(outputCalories);
console.log(rmr);







