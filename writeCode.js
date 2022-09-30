
// Part 2: 1) Sum Zero

function sumZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++){
      if (arr[i] + arr[j] === 0){
        return true
      } 
    }
  }
  return false
}
  
 console.log(sumZero([0])); // returns false
 console.log(sumZero([1])); // returns false
 console.log(sumZero([1, 2, 3])); // returns false
 console.log(sumZero([1, 2, 3, -2])); // returns true

// Runtime: O(n^2)



// Part 2: 2) Unique Characters

function singleWord(list) {
    let obj = {};
    for (let i = 0; i < list.length; ++i) {
      let ch = list[i];
      if (obj[ch]) return false;
      obj[ch] = true;
    }
    return true;
  }

console.log(singleWord("Monday")); // returns true
console.log(singleWord("Moonday")); // returns false

// Runtime: O(n)



// Part 2: 3) Pangram Sentence

function pangrams(s) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let regex = /\s/g;
    let lowercase = s.toLowerCase().replace(regex, "");
   
    for(let i = 0; i < alphabet.length; i++){
     if(lowercase.indexOf(alphabet[i]) === -1){
       return "not pangram";
     }
    }
   
   return "pangram";
 }

console.log(pangrams("The quick brown fox jumps over the lazy dog!")); // returns true
console.log(pangrams("I like cats, but not mice")); // returns false

// Runtime: O(n)



// Part 2: 4) Longest Word

const findLongestWord = (arr) => {
  let longestLength = 0

  arr.forEach((word) => {
      if(word.length > longestLength){
          longestLength = word.length
      }
  })
  return longestLength
}

console.log(findLongestWord(["hi", "hello"])); // returns 5

// Runtime: O(n)



// Extra Credit

// Space complexity options
// Constant Space O(1)
// Linear Space O(n)
// Quadratic Space O(n^2)

// Sum Zero:
// Linear Space O(n)

// Unique Characters:
// Linear Space O(n)

// Pangram Sentence
// Linear Space O(n)

// Longest Word
// Linear Space O(n)
