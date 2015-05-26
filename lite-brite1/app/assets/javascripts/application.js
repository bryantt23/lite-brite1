// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

// http://jsfiddle.net/arunpjohny/ffxjkq2p/
// set number rows and columns
var rows = 4;
var columns = 4;

// this function adds a div to the row class?
var $row = $("<div />", {
  class: 'row'
});

// this function adds a div to the square class?
var $square = $("<div />", {
  class: 'square'
});

$(function () {
  //add columns to the the temp row object
  for (var i = 0; i < columns; i++) {
    $row.append($square.clone());
  }

  //clone the temp row object with the columns to the wrapper
  for (var i = 0; i < rows; i++) {
    $("#wrapper").append($row.clone());
  }


  $(".square").on("click", function() {
      $(this).css("background", "red");
  })
});


  // $('square').hover(function(){
  //     $('square').css("background-color", "yellow");
  //     }, function(){
  //     $('square').css("background-color", "pink");
  // });


// $("square").hover(function(){
//     $("square").css("background-color", "yellow");
//     }, function(){
//     $("square").css("background-color", "pink");
// });
