import { getSyllables } from './syllables.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';


$(function() {
  $("#haiku").submit(function(event) {
    event.preventDefault();
    let firstLine = $("#first-line").val().split(" ");
    let secondLine = $("#second-line").val().split(" ");
    let thirdLine = $("#third-line").val().split(" ");
    console.log(firstLine,"\n", secondLine, "\n", thirdLine);
    let firstCount = 0;
    let secondCount = 0;
    let thirdCount = 0;

    for(let i=0; i<firstLine.length; i++) {
      firstCount += getSyllables(firstLine[i]);
    }
    for(let i=0; i<secondLine.length; i++) {
      secondCount += getSyllables(secondLine[i]);
    }
    for(let i=0; i<thirdLine.length; i++) {
      thirdCount += getSyllables(thirdLine[i]);
    }
    console.log(firstCount,"\n", secondCount, "\n", thirdCount);
  });
});
