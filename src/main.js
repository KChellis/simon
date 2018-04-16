import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Simon } from './simon.js';
var simon = new Simon ();
var index = 0;
function displayColor(i) {
  var tempSimon = simon;
  if (tempSimon.colors[i] === "red") {
    $("#red").addClass("highlight");
  } else if (tempSimon.colors[i] === "blue") {
    $("#blue").addClass("highlight");
  } else if (tempSimon.colors[i] === "yellow") {
    $("#yellow").addClass("highlight");
  } else {
    $("#green").addClass("highlight");
  }
  setTimeout (function() {
    $(".colorBtn").removeClass("highlight");
  }, 1000);
}


$(function() {
  $(".startBtn").click(function(){
    $(".startBtn").hide();
    $(".colorBtn").show();
    simon.addColor();
    setTimeout(displayColor(0), 200);
  });
  $(".colorBtn").click(function() {
    var userColor = $(this).val();
    if (simon.compareArray(userColor, index)) {
      index += 1;
      console.log(index);
    } else {
      $(".startup").hide();
      $(".lose").show();
    }
    if (index === simon.colors.length) {
      simon.addColor();
      for (var i = 0; i < index; i++) {
        displayColor(i);
        console.log(simon.colors);
      }
    }
  });
  $("#restart").click(function() {
    location.reload();
  });
});
