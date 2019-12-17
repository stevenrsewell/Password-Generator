var characterLength =
    prompt("Please choose between 8 and 128 characters.");
if (characterLength > 128 || characterLength < 8) {
    characterLength = prompt("Please choose between 8 and 128.");
}
else {
    var includeSpecial = confirm("Would you like to include special characters?")

    var includeNumbers = confirm("Would you like to include numbers?")

    var includeUpper = confirm("Would you like to include upper case characters?")

    var includeLower = confirm("Would you like to include lower case characters?")

    function generatePassword() {

        var charList = "";

        if (includeSpecial) {
            charList = charList + "!@#$%^&*()-_=+~";
        }

        if (includeNumbers) {
            charList = charList + "0123456789";
        }

        if (includeUpper) {
            charList = charList + "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        }

        if (includeLower) {
            charList = charList + "abcdefghijklmnopqrstuvwxyz";
        }


        var password = "";
        for (var i = 0; i < passCharacterLength; i++) {
            password += charList[Math.floor(Math.random() * charList.length)];
        }
        document.getElementById('passwordBox').value = password;
    }

}