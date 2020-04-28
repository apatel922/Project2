$(document).ready(function () {
  // Getting references to our form and input
  var signUpForm = $("form#signup");
  var emailInput = $("input#email-input");
  var passwordInput = $("input#password-input");
  var firstname = $("input#first_name");
  var lastname = $("input#last_name");
  var gradyear = $("input#grad-year");
  var username = $("input#username");

  // When the signup button is clicked, we validate the email and password are not blank
  signUpForm.on("submit", function (event) {
    event.preventDefault();
    var userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim(),
      firstName: firstname.val().trim(),
      lastName: lastname.val().trim(),
      gradYear: gradyear.val().trim(),
      userName: username.val().trim(),
      profilePic: "",
      gitHubUrl: "",
    };

    if (!userData.email || !userData.password) {
      return;
    };

    $.ajax({
      type: "GET",
      url: `https://api.github.com/users/${userData.userName}?client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}`,
      async: true,
      dataType: "json",
      success: function (res) {
        userData.profilePic = res.data.avatar_url;
        userData.gitHubUrl = res.data.html_url;

        console.log(res);

        signUpUser(userData);
        
        // emailInput.val("");
        // passwordInput.val("");
        // firstname.val("");
        // lastname.val("");
        // gradyear.val("");
        // username.val("");
        // profilePic.val("");
        // gitHubUrl.val("");    
      }
  });

  // Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors
  function signUpUser(userData) {
    $.post("/api/signup", {
      firstname: userData.firstName,
      lastname: userData.lastName,
      email: userData.email,
      password: userData.password,
      username: userData.userName,
      gradyear: userData.gradYear,
      profilepic: userData.profilePic,
      githuburl: userData.gitHubUrl,
    })
      .then(function (data) {
        window.location.replace("/members");
        // If there's an error, handle it by throwing up a bootstrap alert
      })
      .catch(handleLoginErr);
  }

  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }
});
});
