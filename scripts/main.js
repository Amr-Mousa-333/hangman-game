// const words = ['Amr', 'MOUSA', 'SAYED', 'RASHED', 'LOVEJS']; //LIST WORD
// let chosenWord = words[Math.floor(Math.random() * words.length)].toUpperCase(); //0.2* 5 = 1 >> FLOOR >> 1
// let guessedLetters = []; //1)DONT REPET THE SAME LETTERS , COUNTER FOR LOESS
// function createWordPlaceholder() { // GREAT LETTER
//   const wordPlaceholder = document.getElementById('word-placeholder');
//   wordPlaceholder.innerHTML = ''; // MAKE EMPTY
//   for (let i = 0; i < chosenWord.length; i++) { //LOOP ON ALL CHOOSES WORD
//     const letterDiv = document.createElement('div');//GREAT DIV FOR LETTER LIKE (A M R ) 3 DIV
//     letterDiv.classList.add('letter'); // CLASS FOR APPEND LETTER
//     letterDiv.id = `letter-${i}`; // EVERY ELEMENT(LETTER) HV ID (LETTER-INDEX)
//     letterDiv.textContent = '_';//CONTENT IN THE DIV = _
//     wordPlaceholder.appendChild(letterDiv);//ADD NEW LETTER INSIDE DIV
//   }
// }
// /*
// اللي عملته لحد دلوقتي عملنا
// list حطينا فيها بعض الكلمات اللي احنا  هنخمنها بعدين
// وبعد كده عملنا معادله رياضيه علشان نقدر نوصل index جوا.
//  Array وبعد كده عملنا
//  فاضيه علشان array  ان هو ما يدخلش حروف كذا مره بعد كده نظبط بعض الحاجات زي الصوره لما يوصل 6 مرات يموت
// او  وبعد كده عملنا الفانكشن اللي هي بتضيف الحرف اول حاجه بنعمل div جديد
//  وبعد كده بنعمل class علشان نقدر نتحكم في العنصر والوانه كده
//  ثالث حاجه بندي له id وبيكون كلمه
// latter * index وبعد كده بنحط علامه
// under scor الخانات الفاضيه وبعد كده بنضيف الحرف ده في الخانه
// */
// function guessLetter(letter) { // FUN FOR GUESS LETTER
//   letter = letter.toUpperCase(); // ALL LETTER UPPER CASE
//   if (guessedLetters.includes(letter)) {//U GUESS LETTER INSIDE RADOME WORD
//     alert("U Guess This Letter Before");
//     return;
//   }
//   guessedLetters.push(letter);// ADD IN GUESS LIST (CANT REPET)

//   const wordPlaceholder = document.getElementById('word-placeholder');//GET DIV IN HTML
//   let correctGuess = false; // IF CORRECT = TRUE OR UN CORRECT = FALSE

//   for (let i = 0; i < chosenWord.length; i++) {//LOOP ON CHOOSE WORD
//     if (chosenWord[i] == letter) { // SEE IF LETTER IN RANDOM WORD(ANY INDEX IN WORD)
//       const letterDiv = document.getElementById(`letter-${i}`);//CATCH INDEX LETTER OM RANDOM WORD
//       letterDiv.textContent = letter;//PUT THE LETTER CORRECT GUESS ON INDEX LETTER OM RANDOM WORD
//       correctGuess = true;//CORRECT GUESS
//     }
//   }

//   if (!correctGuess) {
//     alert('Not Correct Guess'); //NOT CORRECT
//   }
// }
// document.addEventListener('keydown', function(event) {//REED FORM KEYBOARD
//   const letter = event.key.toUpperCase(); //ANY LETTER BE UPPER CASE
//   if (/[A-Z]/.test(letter)) {
//     console.log('كدا الكيبود اشتغل  ' + letter);
//     const button = document.querySelector(`button[onclick="guessLetter('${letter}')"]`);
//     //document.querySelector(...) بيرجع الزر <button> اللي عنده نفس الـ onclick اللي بيمثل الحرف اللي ضغطت عليه.
// // مثال: لو ضغطت حرف "A" → هيدور على:
//     if (button) {
//       button.click();
//       button.classList.add('active');
//       setTimeout(() => button.classList.remove('active'), 200);
//     }
//   }
// });
// createWordPlaceholder();
const words = ['Amr', 'MOUSA', 'SAYED', 'RASHED', 'LOVEJS']; //LIST WORD
let chosenWord = words[Math.floor(Math.random() * words.length)].toUpperCase(); //0.2* 5 = 1 >> FLOOR >> 1
let guessedLetters = []; //1)DONT REPET THE SAME LETTERS , COUNTER FOR LOESS
let wrongGuesses = 0; // عدد المحاولات الغلط
const maxWrong = 3;   // اقصى عدد صور

function createWordPlaceholder() { // GREAT LETTER
  const wordPlaceholder = document.getElementById('word-placeholder');
  wordPlaceholder.innerHTML = ''; // MAKE EMPTY
  for (let i = 0; i < chosenWord.length; i++) { //LOOP ON ALL CHOOSES WORD
    const letterDiv = document.createElement('div');//GREAT DIV FOR LETTER LIKE (A M R ) 3 DIV
    letterDiv.classList.add('letter'); // CLASS FOR APPEND LETTER
    letterDiv.id = `letter-${i}`; // EVERY ELEMENT(LETTER) HV ID (LETTER-INDEX)
    letterDiv.textContent = '_';//CONTENT IN THE DIV = _
    wordPlaceholder.appendChild(letterDiv);//ADD NEW LETTER INSIDE DIV
  }
}
/*
اللي عملته لحد دلوقتي عملنا
list حطينا فيها بعض الكلمات اللي احنا  هنخمنها بعدين
وبعد كده عملنا معادله رياضيه علشان نقدر نوصل index جوا.
 Array وبعد كده عملنا
 فاضيه علشان array  ان هو ما يدخلش حروف كذا مره بعد كده نظبط بعض الحاجات زي الصوره لما يوصل 6 مرات يموت
او  وبعد كده عملنا الفانكشن اللي هي بتضيف الحرف اول حاجه بنعمل div جديد
 وبعد كده بنعمل class علشان نقدر نتحكم في العنصر والوانه كده
 ثالث حاجه بندي له id وبيكون كلمه
latter * index وبعد كده بنحط علامه
under scor الخانات الفاضيه وبعد كده بنضيف الحرف ده في الخانه
*/
function guessLetter(letter) { // FUN FOR GUESS LETTER
  letter = letter.toUpperCase(); // ALL LETTER UPPER CASE
  if (guessedLetters.includes(letter)) {//U GUESS LETTER INSIDE RADOME WORD
    alert("U Guess This Letter Before");
    return;
  }
  guessedLetters.push(letter);// ADD IN GUESS LIST (CANT REPET)

  const wordPlaceholder = document.getElementById('word-placeholder');//GET DIV IN HTML
  let correctGuess = false; // IF CORRECT = TRUE OR UN CORRECT = FALSE

  for (let i = 0; i < chosenWord.length; i++) {//LOOP ON CHOOSE WORD
    if (chosenWord[i] == letter) { // SEE IF LETTER IN RANDOM WORD(ANY INDEX IN WORD)
      const letterDiv = document.getElementById(`letter-${i}`);//CATCH INDEX LETTER OM RANDOM WORD
      letterDiv.textContent = letter;//PUT THE LETTER CORRECT GUESS ON INDEX LETTER OM RANDOM WORD
      correctGuess = true;//CORRECT GUESS
    }
  }

  if (!correctGuess) {
    wrongGuesses++; // زودنا الغلط
    document.getElementById("hangman-image").src = `assets/images/step${wrongGuesses}.png`; // غير الصورة

    if (wrongGuesses >= maxWrong) {
      alert("💀 Game Over! The word was: " + chosenWord);
    }
  }
}
document.addEventListener('keydown', function(event) {//REED FORM KEYBOARD
  const letter = event.key.toUpperCase(); //ANY LETTER BE UPPER CASE
  if (/[A-Z]/.test(letter)) {
    console.log('كدا الكيبود اشتغل  ' + letter);
    const button = document.querySelector(`button[onclick="guessLetter('${letter}')"]`);
    //document.querySelector(...) بيرجع الزر <button> اللي عنده نفس الـ onclick اللي بيمثل الحرف اللي ضغطت عليه.
// مثال: لو ضغطت حرف "A" → هيدور على:
    if (button) {
      button.click();
      button.classList.add('active');
      setTimeout(() => button.classList.remove('active'), 200);
    }
  }
});
createWordPlaceholder();
