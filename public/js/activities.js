$(document).ready(function() {
  // Getting references to the name inout and author container, as well as the table body
  var activityInput = $("#activityType");
  var speedInput = $("#speed");
  var unitsInput = $("#units");
  
  // Adding event listeners to the form to create a new object, and the button to delete
  // an Author
  $(document).on("submit", ".create-activity-form", handleActivityFormSubmit);

  // Getting the intiial list of Authors

  function handleActivityFormSubmit(event) {
    event.preventDefault();
    // Don't do anything if the name fields hasn't been filled out
    // if (!nameInput.val().trim().trim() && !ageInput.val().trim().trim()&& !heightInput.val().trim().trim() && !weightInput.val().trim().trim() && !genderInput.val().trim().trim()) {
    //   return;
    // }
    // Calling the upsertAuthor function and passing in the value of the name input
    upsertActivity({
      activity: activityInput.val().trim()
    ,
      speed: speedInput.val().trim()
    , 
      units: unitsInput.val().trim()
    });
  };

  function upsertActivity(authorData) {
    $.post("/api/calories", authorData)
      .then(console.log('workout added' + activityInput.val() + speedInput.val() + unitsInput.val()));
  }

});