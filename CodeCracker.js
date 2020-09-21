// Programmer: Aidan Mann
// Date: 09/21/2020
// Description: Cracks randomly generated 6-digit numeric passcode

var secretPasscode = generatePasscode();
var guessedCode = crackPasscode(secretPasscode);


console.log('Guessed code is: ' + guessedCode);
console.log('Secret passcode is: ' + secretPasscode);





function crackPasscode(secretPasscode) {
    var guessCode = '';
    // iterate through possible digits 0-9 for each place 1-6
    for(var i = 0; i < 6; i++) {
        for(var j = 0; j <= 9; j++) {
            var curr = secretPasscode.charAt(i);
            parseInt(curr);
            if(j == curr) {
                j.toString();
                guessCode += j;
                break;
            }
        }
    }
    return guessCode;
}



// generates random 6 digit passcode
function generatePasscode() {
    let passCode = '';
    for(var i = 0; i < 6; i++) {
        // create 6 random digits 0-9
        var digit = Math.floor(Math.random() * 10);
        digit.toString();
        passCode += digit;
    }
    return passCode;
 }