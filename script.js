//Let's go
/* Code
by
Jaycode*/
function passwordGenerator(length, includeLowercase, includeLUppercase, includeNumber, includeSymbols){
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numberChars = '0123456789';
    const symbolsChars = '~!@#$%^&*()_|+*-/'


    let allowedChars = '';
    const password = '';

    allowedChars += includeLowercase ? lowercaseChars : '';
    allowedChars += includeLUppercase ? uppercaseChars : '';
    allowedChars += includeNumber ? numberChars : '' ;
    allowedChars += includeSymbols ? symbolsChars : '' ;

if(length <= 0){
    return `(Password must be at least 1)`
}

if(allowedChars.length === 0){
    return `(At least one set of character needs to be selected)`
}

for(let i = 0; i < length; i++){
    const randomIndex = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars;
}

    return  password;
}

const passwordLength = 12;
const includeLowercase = true;
const includeLUppercase = true;
const includeNumber = true;
const includeSymbols = true;

const password = passwordGenerator(passwordLength, includeLowercase,  includeLUppercase, includeNumber,  includeSymbols);

console.log('Generated Password: ${password}');