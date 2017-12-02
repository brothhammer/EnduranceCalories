$(document).ready(function() {
    // Getting references to the name inout and author container, as well as the table body
    var nameInput = $("#name");
    var ageInput = $("#age");
    var heightInput = $("#height");
    var heightUnitInput = $("#heightUnit");
    var weightInput = $("#weight");
    var genderInput = $("#gender");

    // Adding event listeners to the form to create a new object, and the button to delete
    // an Author
    $(document).on("submit", ".create-form", handleAuthorFormSubmit);

    // Getting the intiial list of Authors

    function handleAuthorFormSubmit(event) {
        event.preventDefault();
        // Don't do anything if the name fields hasn't been filled out
        // if (!nameInput.val().trim().trim() && !ageInput.val().trim().trim()&& !heightInput.val().trim().trim() && !weightInput.val().trim().trim() && !genderInput.val().trim().trim()) {
        //   return;
        // }
        // console.log(heightUnitInput.val())
        if (heightUnitInput.val() === "in") {
            heightInput = parseInt(heightInput.val()) * 2.54;
        } else { heightInput = heightInput.val().trim() }


        // Calling the upsertAuthor function and passing in the value of the name input
        upsertAuthor({
            name: nameInput.val().trim(),
            age: ageInput.val().trim(),
            height: heightInput,
            weight: weightInput.val().trim(),
            gender: genderInput.val().trim()
        });
    };

    function upsertAuthor(authorData) {
        $.post("/api/users", authorData, function() {
            window.location.href = "/activity";
        })
        console.log('user added');
    }

});