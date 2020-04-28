$(document).ready(function () {
  var signUpForm = $("#signup");
  // Getting references to our form and input
  // When the signup button is clicked, we validate the email and password are not blank
  signUpForm.on("click", function (event) {

    var emailInput = $("input#email-input");
    var passwordInput = $("input#password-input");
    var firstname = $("input#first_name");
    var lastname = $("input#last_name");
    var gradyear = $("input#grad-year");
    var username = $("#github").val().trim();

    event.preventDefault();
    console.log(username);
    /*axios.get(`https://api.github.com/users/${username}`)
    .then(data => {
      // Github ProfilePic URL
      const profilePic = data.data.avatar_url
      //Github Email Address
      const url = data.data.html_url
      var userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim(),
      firstName: firstname.val().trim(),
      lastName: lastname.val().trim(),
      gradYear: gradyear.val().trim(),
      userName: username,
      profilePic: profilePic,
      gitHubUrl: url
    };
    console.log(userData);
  });*/

    //AXIOS call will go here-ish
    if (!userData.email || !userData.password) {
      return;
    }
    // If we have an email and password, run the signUpUser function
    //signUpUser(userData);
    emailInput.val("");
    passwordInput.val("");
    firstname.val("");
    lastname.val("");
    gradyear.val("");
    username.val("");
    profilePic.val("");
    gitHubUrl.val("");
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
        window.location.replace("/login");
        // If there's an error, handle it by throwing up a bootstrap alert
      })
      .catch(handleLoginErr);
  }

  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }
});
