$(document).ready(function () {
  // Getting references to our form and inputs
  var loginForm = $("#login");
  var emailInput = $("input#email-input");
  var passwordInput = $("input#password-input");

  function loginUser(email, password) {
    console.log("Login User Call");

    $.ajax("/api/login", {
      data: {
        email: email,
        password: password
      },
      method: "POST",
    })
      .then(function (results) {
        console.log(results);
        // If there's an error, log the error
      })
      .catch(function (err) {
        console.log(err);
      });
  }

  // When the form is submitted, we validate there's an email and password entered
  loginForm.on("click", function (event) {
    event.preventDefault();
    var userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim()
    };
    console.log(userData);

    if (!userData.email || !userData.password) {
      return;
    }

    // If we have an email and password we run the loginUser function and clear the form
    loginUser(userData.email, userData.password);
    emailInput.val("");
    passwordInput.val("");
  });

  // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
});
