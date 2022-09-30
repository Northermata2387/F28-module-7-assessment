
// Part 2: 1) Sum Zero

function sumFinder(arr, num) {
    let obj = {}
    let diff
  
    for (let i = 0; i < arr.length; i++) {
      diff = num - arr[i]
  
      if (obj[diff]) {
        return true
      } else {
        obj[arr[i]] = true
      }
    }
    return false
  }
  
 console.log(sumFinder([1, 2, 3, -2], 0)); // returns true
 console.log(sumFinder([1, 2, 3, 4], 0)); // returns False

// Runtime could be O(n)



// Part 2: 2) Unique Characters

function singleWord(list) {
    var obj = {};
    for (var i = 0; i < list.length; ++i) {
      var ch = list[i];
      if (obj[ch]) return false;
      obj[ch] = true;
    }
    return true;
  }

console.log(singleWord("Monday")); // true
console.log(singleWord("Moonday")); // false

// Runtime could be O(n)



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

console.log(pangrams("The quick brown fox jumps over the lazy dog!")); // true
console.log(pangrams("I like cats, but not mice")); // false

// Runtime could be O(n)



// Part 2: 4) Longest Word

// function findLongestWord(str) {
    function findLongestWord(str) {
        var longestWord = str.split(' ').reduce(function(longest, currentWord) {
          return currentWord.length > longest.length ? currentWord : longest;
        }, "");
        return longestWord.length;
      }

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));

// Runtime could be O(n)



// Extra credit

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
