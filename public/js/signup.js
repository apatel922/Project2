$(document).ready(function () {

  $(".sidenav").sidenav();
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
    var pass = $("#password-input").parsley();
    var email = $("#email-input").parsley();
    var grad = $("#grad-year").parsley();

    if(!grad.isValid()){
      $("#error2").text("Must be a valid 4-digit year");
      $("#grad-year").addClass("invalid");
      return;
    }else{
      $("#error2").text("");
      $("#grad-year").removeClass("invalid");
    }

    if(!email.isValid()){
      $("#error1").text("Not a valid email address");
      return;
    }else{
      $("#error1").text("");
    }

    if(!pass.isValid()){
      $("#error").text("Password must be at least 5 characters long");
      $("#password-input").addClass("invalid");
      return;
    }else{
      $("#error").text("");
      $("#password-input").removeClass("invalid");
    }

    var userData = {
      email:  $("#email-input").val().trim(),
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
