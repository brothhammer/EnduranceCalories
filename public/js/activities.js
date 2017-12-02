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
            activity: activityInput.val().trim(),
            speed: speedInput.val().trim(),
            units: unitsInput.val().trim(),
            duration: durationInput.val().trim(),
            intensity: intensityInput.val().trim(),
            UserId: userSelect.val()
        };


        // calculateCalories(newActivity);

        submitActivity(newActivity);
    };

    //function to submit activity to the database and re-direct user to results page
    function submitActivity(activityData) {
        $.post("/api/calories", activityData, function() {
            window.location.href = "/calculator/?user_id=" + activityData.UserId;
        });
        console.log("activtiy added");
    }


    var userSelect = $("#userList");
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
            window.location.href = "/adduser";
        }
        console.log("renderUserList");
        // $(".hidden").removeClass("hidden");
        var rowsToAdd = [];
        for (var i = 0; i < data.length; i++) {
            rowsToAdd.push(createUserRow(data[i]));
            console.log(data[i]);
        }
        userSelect.empty();
        console.log(rowsToAdd);
        console.log(userSelect);
        userSelect.append(rowsToAdd);
        userSelect.val(data.userId);
        console.log(userID);
    }

    // Creates the author options in the dropdown
    function createUserRow(user) {
        var listOption = $("<option>");
        listOption.attr("value", user.id);
        listOption.text(user.name);
        return listOption;
    }

    // function calculateCalories(activityData) {
    //   var userURL = 'api/users/' + activityData.UserId;
    //   var sex, height, weight, age;
    //   $.ajax({
    //     method: 'GET',
    //     url: userURL
    //   }).done(function(data){
    //     sex = data.gender;
    //     height = data.height;
    //     weight = data.weight;
    //     age = data.age;
    //   });

    //   calculator(sex, height, weight, age, activityData.activity, activityData.speed, activityData.units, activityData, duration);
    // };

});