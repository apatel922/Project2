$(document).ready(function () {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  //$.get("/api/user_data").then(function (userData) {
  function apiCall() {
    $.get("/api/userall", function (results) {
      console.log(results);
      makeCard(results);
    });
  }

  function makeCard(members) {
    for (var i = 0; i < members.length; i++) {
      var first = members[i].firstname;
      var last = members[i].lastname;
      var gradYear = members[i].gradyear;
      var bio = "test test test";
      var pic = $("<img>");
      pic.src = "/public/placeholder.jpg";
      //var email = members[i].email;
      //var userName = members[i].username;

      

      //welcome header
      var name = $("<h2>").text("Welcome, " + members[members.length - 1].firstname);
      $(name).addClass("member-header");
      $("body").append(name);


      //profile card
      // var div1 = $("<div>");
      // div1.addClass("col s12 m6");
      // $("body").append(div1)

      // var div2 = $("<div>");
      // div2.addClass("card");
      // div1.append(div2);

      var imgdiv = $("<div>");
      imgdiv.addClass("card-image");
      div2.append(imgdiv);
      div2.append(pic);

      //add button

      var div3 = $("<div>");
      div3.addClass("card-content");
      div2.append(div3);

      var text1 = $("<span>").text(first + " " + last);
      text1.addClass("card-title");
      div3.append(text1);

      var year = $("<span>").text(gradYear);
      year.addClass("class-year");
      div3.append(year);

      var text2 = $("<p>").text(bio);
      div3.append(text2);

    }
  }
  apiCall();
});


