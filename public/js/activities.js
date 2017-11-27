$(document).ready(function() {

  // Getting references to the user inputs
  var nameInput = $("#user");
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

    var newActivity = {
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
    };

    submitActivity(newActivity);
  };

  function submitActivity(activityData) {
    $.post("/api/calories", activityData)
      .then(console.log('activity added'));
  }


  var userSelect = $("#user");
  var userID;

  getUsers();

  // A function to get Authors and then render our list of Authors
  function getUsers() {
    $.get("/api/users", renderUserList);
  }
  // Function to either render a list of authors, or if there are none, direct the user to the page
  // to create an author first
  function renderUserList(data) {
    if (!data.length) {
      window.location.href = "/users";
    }
    // $(".hidden").removeClass("hidden");
    var rowsToAdd = [];
    for (var i = 0; i < data.length; i++) {
      rowsToAdd.push(createUserRow(data[i]));
    }
    userSelect.empty();
    console.log(rowsToAdd);
    console.log(userSelect);
    userSelect.append(rowsToAdd);
    userSelect.val(userId);
  }

  // Creates the author options in the dropdown
  function createUserRow(user) {
    var listOption = $("<option>");
    listOption.attr("value", user.id);
    listOption.text(user.name);
    return listOption;
  }

});

