// Assignment Code
let generateBtn = document.querySelector("#generate");
let numsChoice = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
let upperChoice = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
let lowerChoice = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
let spcChoice= ['`',"!","@","#","$","%","^","&","*","(",")","_","+","-","=","[","]","{","}",";",":","|",".","<",">","/","?","~"]

let passwordGenerated
let passwordToGenerate =[]
let min = 0
let numInput
let upperInput
let lowerInput
let spcInput
let userInput

// Write password to the #password input
let writePassword=(()=> {
  passwordGenerated = []

  userInput = prompt('Please enter in number between 8 - 128 for password Generation')
while (userInput < 8 || userInput > 128){
  if(userInput  === null || userInput === ''){
    break;
  }
  userInput = prompt('Please enter in number between 8 - 128 for password Generation')
}

upperInput = prompt('Would you like upper case letters in your password, type yes or no')
while (upperInput.toLowerCase() !== 'yes' || upperInput.toLowerCase() !== 'no'){
  if (upperInput === null || upperInput === ''){
    upperInput = 'no'
  }
  if(upperInput.toLowerCase()  === 'yes' || upperInput.toLowerCase() === 'no'){
    break;
  }
  upperInput = prompt('Would you like upper case letters in your password, type yes or no') 
}


numInput = prompt('Would you like numbers in your password, type yes or no')
while (numInput.toLowerCase() !== 'yes' || numInput.toLowerCase() !== 'no'){
  if (numInput === null || numInput === ''){
    numInput = 'no'
  }
  if(numInput.toLowerCase()  === 'yes' || numInput.toLowerCase() === 'no'){
    break;
  }
  numInput = prompt('Would you like numbers in your password, type yes or no')
}


lowerInput = prompt('Would you like lower case letters in your password, type yes or no')
while (lowerInput.toLowerCase() !== 'yes' || lowerInput.toLowerCase() !== 'no'){
  if (lowerInput === null || lowerInput === ''){
    lowerInput = 'no'
  }
  if(lowerInput.toLowerCase()  === 'yes' || lowerInput.toLowerCase() === 'no'){
    break;
  }
  lowerInput = prompt('Would you like lower case letters in your password, type yes or no')
}


spcInput = prompt('Would you like special characters in your password, type yes or no')
while (spcInput.toLowerCase() !== 'yes' || spcInput.toLowerCase() !== 'no'){
  if (spcInput === null || spcInput === ''){
    spcInput = 'no'
  }
  if(spcInput.toLowerCase()  === 'yes' || spcInput.toLowerCase() === 'no'){
    break;
  }
  spcInput = prompt('Would you like special characters in your password, type yes or no')
}

  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
  passwordToGenerate = []
  spcInput = ''
  numInput = ''
  upperInput = ''
  lowerInput = ''


})




let generatePassword=(()=>{
  if(numInput.toLowerCase() === 'yes'){
    numsChoice.forEach((num)=>{
     
      passwordToGenerate.push(num)
    })
    if(numInput.toLowerCase() === 'yes'){
      passwordGenerated.push(numsChoice[Math.floor(Math.random()*(numsChoice.length - min +1))+min])
      userInput--
    }
  }
  if(lowerInput.toLowerCase() === 'yes'){
    lowerChoice.forEach((lower)=>{
      passwordToGenerate.push(lower)
    })
    if(lowerInput.toLowerCase() === 'yes'){
      passwordGenerated.push(lowerChoice[Math.floor(Math.random()*(lowerChoice.length - min +1))+min])
      userInput--
    }
  }
  if(upperInput.toLowerCase() === 'yes'){
    upperChoice.forEach((upper)=>{
      passwordToGenerate.push(upper)
    })
    if(upperInput.toLowerCase() === 'yes'){
      passwordGenerated.push(upperChoice[Math.floor(Math.random()*(upperChoice.length - min +1))+min])
      userInput--
    }
  }
  if(spcInput.toLowerCase() === 'yes'){
    spcChoice.forEach((spc)=>{
      passwordToGenerate.push(spc)
    })
    if(spcInput.toLowerCase() === 'yes'){
      passwordGenerated.push(spcChoice[Math.floor(Math.random()*(spcChoice.length - min +1))+min])
      userInput--
    }
  }

  let max = passwordToGenerate.length -1
  for (i = 0; i< userInput; i++){

    passwordGenerated.push(passwordToGenerate[Math.floor(Math.random()*(max - min +1))+min])
  }
  return passwordGenerated.join('')
})



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);






