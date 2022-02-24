let spyMessage = "Look at this very secret message you have!";
let returnString = " "; 

let removeVowels = function(spyMessage) {
  for (let x = 0; x < spyMessage.length; x++) {
    if(spyMessage[x] === 'a' || spyMessage[x] === 'i' || spyMessage[x] === 'o' || spyMessage[x] === 'u' || spyMessage[x] === 'e'){
      continue; 
    }
    returnString += spyMessage[x]
  }
  return returnString;
}

removeVowels(spyMessage); 

console.log(returnString)