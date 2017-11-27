$(document).ready(function() {

  // Getting references to the user inputs
  var nameInput = $("#name");
  var activityInput = $("#activity");
  var speedInput = $("#speed");
  var unitsInput = $("#units");
  var durationInput = $("#duration");
  var intensityInput = $("#intensity");
  
  // Adding event listeners to the form to create a new object, and the button to delete
  // an Author
 $(document).on("submit", ".create-form", handleActivityFormSubmit);

  // Getting the intiial list of Authors

  function handleActivityFormSubmit(event) {
    event.preventDefault();
    // Don't do anything if the name fields hasn't been filled out
    // if (!nameInput.val().trim().trim() && !ageInput.val().trim().trim()&& !heightInput.val().trim().trim() && !weightInput.val().trim().trim() && !genderInput.val().trim().trim()) {
    //   return;
    // }
    // Calling the upsertAuthor function and passing in the value of the name input
    upsertActivity({
      name: nameInput.val().trim()
    ,
      activity: activityInput.val().trim()
    , 
      speed: speedInput.val().trim()
    , 
      units: unitsInput.val().trim()
    , 
      duration: durationInput.val().trim()
    , 
      intensity: intensityInput.val().trim()
    });
  };

  function upsertActivity(activityData) {
    $.post("/api/calories", activityData)
      .then(console.log('activity added'));
  }

});

