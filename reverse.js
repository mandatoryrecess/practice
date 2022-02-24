let string = "hello"; 

const newString = string.split('').reverse().join(''); 

console.log(newString)

//without built in functions 

let text = "Let's See If I Can Reverse You"; 
let newText = " "; 

for (let x = text.length - 1; x >= 0; x--) {
  newText += text[x]
}
console.log(newText);