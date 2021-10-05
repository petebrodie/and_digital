/**
* The following is the function where the solution shall be written
*/

function solution (input) {

  let legalCharacters = []
  for (let index in input) {
    if (Number(input[index]) && parseInt(input[index]) > -1) {
      legalCharacters.push(input[index])
    }
  }

  

  
  if (legalCharacters.length > 0) {
    return legalCharacters.join("")
  }
  else {
    console.log("No numbers were found!")
  } 
}


// // some example inputs
console.log(solution('326')); // expected ouput 632,623,362,326,263,236
console.log(solution('A 3B2 C6D')); // expected ouput 632,623,362,326,263,236
console.log(solution('ABC')); // expected ouput 632,623,362,326,263,236



