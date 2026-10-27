// 1. The sentence
let sentence = "The movie is not that bad, I like it";

// 2. Position of "not"
let wordNot = sentence.indexOf("not");

// 3. Position of "bad"
let wordBad = sentence.indexOf("bad");

// 4 & 5. Replace "not...bad" with "good" if both exist and "bad" comes after "not"
if (wordNot !== -1 && wordBad !== -1 && wordBad > wordNot) {
  let result =
    sentence.slice(0, wordNot) +   
    "good" +
    sentence.slice(wordBad + 3);  
  console.log(result); 
} else {
  console.log(sentence);
}