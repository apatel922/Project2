// import { Model } from "sequelize/types";

$(document).ready(function () {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page

  //welcome header
  // $.get("/api/user_data").then(function (data) {
  //   console.log(data);
  //   $(".member-name").text("Welcome, " + data.firstname);
  // var name = $("<h2>").text("Welcome, " + data.firstname);
  // $(name).addClass("member-header");
  // $("body").append(name);
  // });

  function apiCall() {
    $.get("/api/userall", function (results) {
      console.log(results);
      makeCard(results);
    });
  }

  function makeCard(results) {
    for (var i = 0; i < results.length; i++) {

      var first = results[i].firstname;
      var last = results[i].lastname;
      var gradYear = results[i].gradyear;
      var userName = results[i].username;
      var pic = $("<img>");
      pic.attr("src", results[i].profilepic);
      var email = results[i].email;
      var location = results[i].location;
      // var repos = results[i].publicRepos;

      //profile card
      var div1 = $("<div>");
      div1.addClass("col s12 m6");
      div1.attr("id", "div1");


      var div2 = $("<div>");
      div2.addClass("card");
      div2.attr("id", "card" + i);

      var imgdiv = $("<div>");
      imgdiv.addClass("card-image");
      imgdiv.attr("id", "imgdiv");

      pic.attr("id", "img1");
      imgdiv.append(pic);

      var btn = $("<a>");
      btn.attr("id", "fab");
      btn.addClass("btn-floating halfway-fab waves-effect waves-light modal-trigger");
      btn.attr("href", "#m1");
      btn.data("name", first + "" + last).data("github", userName).data("email", email).data("location", location);

      var icon = $("<i>");
      icon.addClass("material-icons");
      icon.text("style");
      btn.append(icon);

      imgdiv.append(btn);

      var div3 = $("<div>");
      div3.addClass("card-content");
      div3.attr("id", "div3");


      var text1 = $("<span>").text(first + " " + last);
      text1.addClass("card-title");
      text1.attr("id", "text1");
      div3.append(text1);

      var year = $("<span>").text(gradYear);
      year.addClass("class-year");
      text1.append(year);

      var div4 = $("<div>");
      div4.addClass("card-action");

      var github = $("<span>");
      github.text("Github: ");
      github.trigger("_blank");
      div4.append(github);


      var user = $("<a>");
      user.text(userName);
      user.attr("href", "https://github.com/" + userName);
      github.append(user);

      div2.append(imgdiv);
      div2.append(div3);
      div1.append(div2);
      div2.append(div4);
      $(".teamCards").append(div1);

      //modal
      $("#card" + i).on("click", ".btn-floating", function (event) {
        event.preventDefault();
        console.log("inside modal");
        console.log(this);

        $("#mheader").text($(this).data("name"));
        $("#mgithub").text("@" + $(this).data("github"));
        $("#email").text($(this).data("email"));
        $("#location").text($(this).data("location"));

      });
    }

  }
  apiCall();
});


