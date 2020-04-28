$(document).ready(function () {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(function (userData) {

    var first = userData.firstName;
    var last = userData.lastName;
    //var email = userData.email;
    var gradYear = userData.gradYear;
    //var userName = userData.userName;
    //var pic = userData.profilePic
    //var bio = userData.bio

    //welcome header
    var name = $("<h2>").text("Welcome, " + first + " " + last);
    $(name).addClass("member-header");
    $("body").append(name);


    //profile card
    var title = $(".card-title")
    title.text(first + " " + last);
    title.addClass("card-title")

    var year = $(".class-year")
    year.text(gradYear);
    year.addClass("class-year")

    var 

    
    
    //$(".card-body").text(bio);
    //$(".card-image").picture(pic);


  });
});


  // var userData = {
  //   email: emailInput.val().trim(),
  //   password: passwordInput.val().trim(),
  //   firstName: firstname.val().trim(),
  //   lastName: lastname.val().trim(),
  //   gradYear: gradyear.val().trim(),
  //   userName: username.val().trim(),
  //   profilePic: "",
  //   gitHubUrl:

