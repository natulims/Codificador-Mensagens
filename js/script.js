function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }

 function caesarCipher() {
    let letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    let shift = 1;
    let outputString = "";
  
    let userString = document.getElementById("input").value.toUpperCase();
    console.log(userString)
  
    for (count = 0; count < userString.length; count++) {
      const character = userString[count];
      const letterIndex = letters.indexOf(character);
      const newIndex = (letterIndex + shift) % 26;
      const newCharacter = letters[newIndex];
      outputString = outputString + newCharacter;
   }
  
    document.getElementById("output").value = outputString;
  }