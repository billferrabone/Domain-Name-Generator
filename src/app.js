/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const pronoun = ["the", "our"];
  const adj = ["great", "big"];
  const noun = ["jogger", "racoon"];
  let com = [".com", ".org", ".net"];
  let domgen = [];

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let l = 0; l < com.length; l++) {
          console.log(pronoun[i] + "" + adj[j] + "" + noun[k] + "" + com[l]);
          domgen.push(pronoun[i] + "" + adj[j] + "" + noun[k] + "" + com[l]);
        }
      }
    }
  }
  let ramdomdomain = domgen[Math.floor(Math.random() * domgen.length)];
  document.getElementById("dominio").innerHTML = ramdomdomain;

  //   //write your code here
  //   console.log("Hello Rigo from the console!");
};
