$(document).ready(function () {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  //$.get("/api/user_data").then(function (userData) {

  var mysql = require("mysql");
  var express = require("express");

  var app = express();

  var PORT = process.env.PORT || 8080;

  var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Spencer11!",
    database: "members_db"
  });

  connection.connect(function (err) {
    if (err) throw err;
    makeCard();
  });

  function makeCard() {

    connection.query("SELECT * FROM userData ORDER BY id", function (err, userData) {

      for (var i = 0; i < userData.length; i++) {
        var first = userData.firstName;
        var last = userData.lastName;
        //var email = userData.email;
        var gradYear = userData.gradYear;
        //var userName = userData.userName;
        //var pic = userData.profilePic
        var bio = userData.bio;

        //welcome header
        var name = $("<h2>").text("Welcome, " + first + " " + last);
        $(name).addClass("member-header");
        $("body").append(name);


        //profile card
        var div1 = $("<div>");
        div1.addClass("col s12 m6");
        $("body").append(div1)

        var div2 = $("<div>");
        div2.addClass("card");
        div1.append(div2);

        // var imgdiv = $("<div>");
        // imgdiv.addClass("card-image");
        // div1.append(imgdiv);

        // var img1 = $("<img>")
        // img1.picture(pic);
        // div1.append(img1);

        //add button

        var div3 = $("<div>");
        div3.addClass("card-content");
        imgdiv.append(div3);

        var text1 = $("<span>");
        text1.addClass("card-title");
        div3.append(text1);

        var year = $("<span>").text(gradYear);
        year.addClass("class-year");
        div3.append(year);

        var text2 = $("<p>").text(bio);
        div3.append(text2);

      }
    });
  }
  //});

  // Start our server so that it can begin listening to client requests.
  app.listen(PORT, function () {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
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

