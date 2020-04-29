$(document).ready(function () {
  var signUpForm = $("#signup");
  // Getting references to our form and input
  // When the signup button is clicked, we validate the email and password are not blank
  function signUpUser(userData) {
    $.post("/api/signup", userData)
      // {
      //   firstname: userData.firstName,
      //   lastname: userData.lastName,
      //   email: userData.email,
      //   password: userData.password,
      //   username: userData.userName,
      //   gradyear: userData.gradYear,
      // profilepic: userData.profilePic,
      // )
      .then(function (data) {
        window.location.replace("/login");
        // If there's an error, handle it by throwing up a bootstrap alert
      })
      .catch(handleLoginErr);
  }
  signUpForm.on("click", function (event) {

    // var emailInput = $("email-input");
    // var passwordInput = $("password-input");
    // var firstname = $("first_name");
    // var lastname = $("last_name");
    // var gradyear = $("grad-year");
    // var username = $("#github").val().trim();

    event.preventDefault();
    // console.log(username);
    /*axios.get(`https://api.github.com/users/${username}`)
    .then(data => {
      // Github ProfilePic URL
      const profilePic = data.data.avatar_url
      //Github Email Address
      const url = data.data.html_url
      console.log(userData);
    });*/
    var userData = {
      email: $("#email-input").val().trim(),
      password: $("#password-input").val().trim(),
      firstname:  $("#first_name").val().trim(),
      lastname: $("#last_name").val().trim(),
      gradyear: $("#grad-year").val().trim(),
      username:  $("#github").val().trim(),
      profilepic: "https://via.placeholder.com/150",
      githuburl: "test.com/test"
    };

    //AXIOS call will go here-ish
    if (!userData.email || !userData.password) {
      return;
    }
    // If we have an email and password, run the signUpUser function
    //signUpUser(userData);
    // emailInput.val("");
    // passwordInput.val("");
    // firstname.val("");
    // lastname.val("");
    // gradyear.val("");
    // username.val("");
    // profilePic.val("");
    // gitHubUrl.val("");
    signUpUser(userData);
  });

  // Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors


  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }
});
