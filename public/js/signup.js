$(document).ready(function () {
  var signUpForm = $("#signup");
  // Getting references to our form and input
  // When the signup button is clicked, we validate the email and password are not blank
  function signUpUser(userData) {
    $.post("/api/signup", userData)

      .then(function () {
    
        window.location.replace("/login");
        // If there's an error, handle it by throwing up a bootstrap alert
      })
      .catch(handleLoginErr);
  }
  signUpForm.on("click", function (event) {

    event.preventDefault();

    var userData = {
      email: $("#email-input").val().trim(),
      password: $("#password-input").val().trim(),
      firstname:  $("#first_name").val().trim(),
      lastname: $("#last_name").val().trim(),
      gradyear: $("#grad-year").val().trim(),
      username:  $("#github").val().trim(),
    };

    if (!userData.email || !userData.password) {
      return;
    }
  
    signUpUser(userData);
  });

  // Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any error

  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }
});
