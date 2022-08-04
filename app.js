
const pronoun = ["the", "our"];
const adj = ["great", "big"];
const noun = ["jogger", "racoon"];
let com = [".com", ".org", ".net"];

for (let i = 0; i < pronoun.length; i++) {
  for (let j = 0; j < adj.length; j++) {
    for (let k = 0; k < noun.length; k++) {
      for (let l = 0; l < com.length; l++) {
        console.log(pronoun[i] + "" + adj[j] + "" + noun[k] + "" + com[l]);
      }
    }
  }
}