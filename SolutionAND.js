/**
* The following is the function where the solution shall be written
*/

function solution (input) {

  let legalCharacters = []
  for (index in input) {
    if (Number(input[index])) {
      legalCharacters.push(input[index])
    }
  }

  // for (let i = 0; i < input.length; i++) {
  //   let char = input[i]
  //   let remainingChars = input.slice(0, i) + input.slice(i + 1, input.length)

  //   for (let permutation of results (remainingChars)) {
  //     results.push(char + permutation)}
  // }

  return legalCharacters; 
}


// // some example inputs
console.log(solution('326')); // expected ouput 632,623,362,326,263,236
console.log(solution('A 3B2 C6D')); // expected ouput 632,623,362,326,263,236



