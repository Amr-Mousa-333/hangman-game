// const words = ['Amr', 'MOUSA', 'SAYED', 'RASHED', 'LOVEJS']; //LIST WORD
// let chosenWord = words[Math.floor(Math.random() * words.length)].toUpperCase(); //0.2* 5 = 1 >> FLOOR >> 1
// let guessedLetters = []; //1)DONT REPET THE SAME LETTERS , COUNTER FOR LOESS
// let wrongGuesses = 0; // u hv 3 times wrong
// const maxWrong = 3;   // cntr for wrong
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
//  /*
//  اللي عملته لحد دلوقتي عملنا
// list حطينا فيها بعض الكلمات اللي احنا  هنخمنها بعدين
// وبعد كده عملنا معادله رياضيه علشان نقدر نوصل index جوا.
//  Array وبعد كده عملنا
//  فاضيه علشان array  ان هو ما يدخلش حروف كذا مره بعد كده نظبط بعض الحاجات زي الصوره لما يوصل 6 مرات يموت
//  او  وبعد كده عملنا الفانكشن اللي هي بتضيف الحرف اول حاجه بنعمل div جديد
//  وبعد كده بنعمل class علشان نقدر نتحكم في العنصر والوانه كده
//   ثالث حاجه بندي له id وبيكون كلمه
//  latter * index وبعد كده بنحط علامه
// under scor الخانات الفاضيه وبعد كده بنضيف الحرف ده في الخانه
//  */
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
//     wrongGuesses++; // زودنا الغلط

//     // تأثير الانتقال بين الصور (fade effect)
//     const img = document.getElementById("hangman-image");
//     img.style.opacity = 0;

//     setTimeout(() => {
//       img.src = `assets/images/step${wrongGuesses}.png`; //SWAP  IMAG 0 1 2 3
//       img.style.opacity = 1;
//     }, 200);

//     if (wrongGuesses >= maxWrong) { //DONE LOESS
//       setTimeout(() => {
//         alert("💀 Game Over! The word was: " + chosenWord); //ALEART MSG FOR LOSS
//       }, 600); // نستنى شوية لحد ما الصورة تظهر بالكامل
//     }
//   }
// }

// // REED FORM KEYBOARD
// document.addEventListener('keydown', function(event) {
//   let key = event.key; // ناخد المفتاح اللي اتضغط

//   // نتأكد إنه حرف من A ل Z فقط
//   if (/^[a-zA-Z]$/.test(key)) {
//     let letter = event.key.toUpperCase(); //ANY LETTER BE UPPER CASE
//     console.log('كدا الكيبود اشتغل  ' + letter);//CHEEK KEY

//     // شغل الفنكشن علطول
//     guessLetter(letter);

//     // لو في زرار بنفس الحرف في الكيبورد نديه active
//     const button = document.querySelector(`button[onclick="guessLetter('${letter}')"]`);
//         //document.querySelector(...) بيرجع الزر <button> اللي عنده نفس الـ onclick اللي بيمثل الحرف اللي ضغطت عليه.
// // مثال: لو ضغطت حرف "A" → هيدور على:
//     if (button) {
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

    // تأثير الانتقال بين الصور (fade effect)
    const img = document.getElementById("hangman-image");
    img.style.opacity = 0;

    setTimeout(() => {
      img.src = `assets/images/step${wrongGuesses}.png`; //SWAP  IMAG 0 1 2 3
      img.style.opacity = 1;
    }, 200);

    if (wrongGuesses >= maxWrong) { //DONE LOESS
      setTimeout(() => {
        alert("💀 Game Over! The word was: " + chosenWord); //ALEART MSG FOR LOSS
        showRestartButton(); // اعرض زرار اعادة اللعب
      }, 600);
    }
  } else {
    // ✅ نشيك لو كل الحروف اتخمنت (يعني مفيش "_" في الكلمة)
    const allGuessed = [...chosenWord].every((ch, i) => {
      const div = document.getElementById(`letter-${i}`);
      return div.textContent == ch;
    });

    if (allGuessed) {
      setTimeout(() => {
        alert("🎉 You Win!");
        showRestartButton(); // اعرض زرار اعادة اللعب
      }, 300);
    }
  }
}

// REED FORM KEYBOARD
document.addEventListener('keydown', function(event) {
  let key = event.key; // ناخد المفتاح اللي اتضغط

  // نتأكد إنه حرف من A ل Z فقط
  if (/^[a-zA-Z]$/.test(key)) {
    let letter = event.key.toUpperCase(); //ANY LETTER BE UPPER CASE
    console.log('كدا الكيبود اشتغل  ' + letter);//CHEEK KEY

    // شغل الفنكشن علطول
    guessLetter(letter);

    // لو في زرار بنفس الحرف في الكيبورد نديه active
    const button = document.querySelector(`button[onclick="guessLetter('${letter}')"]`);
    if (button) {
      button.classList.add('active');
      setTimeout(() => button.classList.remove('active'), 200);
    }
  }
});

// FUN SHOW RESTART BUTTON
function showRestartButton() {
  const container = document.getElementById('controls');
  let btn = document.createElement('button');
  btn.textContent = "🔄 Restart Game";
  btn.onclick = restartGame;
  container.appendChild(btn);
}

// FUN RESTART GAME
function restartGame() {
  // reset values
  guessedLetters = [];
  wrongGuesses = 0;
  chosenWord = words[Math.floor(Math.random() * words.length)].toUpperCase();

  // reset image
  const img = document.getElementById("hangman-image");
  img.src = "assets/images/step0.png";

  // remove old restart button
  const container = document.getElementById('controls');
  container.innerHTML = '';

  // recreate placeholders
  createWordPlaceholder();
}

createWordPlaceholder();
