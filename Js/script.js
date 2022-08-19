
// shuffel word //
let WordText = document.getElementById("word");

// hint //
let Hint = document.getElementById("hints");

// input field //
let input = document.getElementById("input");

// refersh-button //
let referesh = document.getElementById("referesh");

// check button //
let check = document.getElementById("check");

// Timing element //
let timeText = document.getElementById("sec");

// score 
let ScoreText = document.getElementById("score");
let score = 100;

// Accsess All Popup element //
let popContainer = document.getElementById("popup");

let popStatus = document.getElementById("pop-status");

// let popAnswer = document.getElementById("pop-answer");

let popCorrect = document.getElementById("pop-ans");

let popScore = document.getElementById("pop-score");

let btnOk = document.getElementById("ok");



let Correctword = "", timer;

// --------------------- Setting a TIme Limit --------------------- //

const initTime = (maxTime) => {

   clearInterval(timer);

   timer = setInterval(() => {

      if (maxTime > 0) {
         maxTime--;
         timeText.innerText = maxTime;
      }

      else {
         clearInterval(timer);
         // alert(`Time Off! ${Correctword.toUpperCase()} was the correct word. \n Your Score : ${score}`);


         // -- Open Popup --  //

         popStatus.innerText = "Oops!  Time Over !!";
         popCorrect.innerText = `${Correctword.toUpperCase()}`;
         popScore.innerText = score;
         popContainer.classList.add("Open-Popup");


         score = 100;
         ScoreText.innerText = score;
         initGame(); // Restat the game
      }

   }, 1000);

};

// ---------------------  getting random objects from words --------------------- //

const initGame = () => {

   //  initTime(30);
   input.value = "";


   let randomObj = words[Math.floor(Math.random() * (words.length))];
   //  it will generate 0 to length-1 number

   let wordArray = randomObj.word.split("");
   // splitting each letter of word . It have to shuffel 

   // console.log(wordArray);
   // console.log(randomObj);
   // console.log(randomObj.word);
   // console.log(randomObj.hint);

   let shuffelArray = [...wordArray]; // shallow copy (it will shave random letter)

   for (let i = wordArray.length - 1; i > 0; i--) {

      let j = Math.floor(Math.random() * (i + 1));
      // Getting a Random number betwwen : 0 and i+1

      [shuffelArray[i], shuffelArray[j]] = [shuffelArray[j], shuffelArray[i]];
      // Swapping two value of array element
   }

   //   console.log(shuffelArray);

   // --------- Now we have to show this to a user --------- //

   WordText.innerText = shuffelArray.join(""); // shoing array as a word text
   Hint.innerText = randomObj.hint; // hint

   //  Inputs //
   Correctword = randomObj.word.toLowerCase();
   input.setAttribute("maxlength", Correctword.length);
   //  set input's maximum length to Correct word length

};

initGame();

//  lets referseh a word by a button //

referesh.addEventListener('click', initGame);


//  at time input convert to uppercase automatic //

input.addEventListener('keyup', () => {
   let Ip = input.value.toUpperCase();
   input.value = Ip;
});

//  lets check input-word with actual answer //

const checkWord = () => {
   let userIp = input.value.toLocaleLowerCase(); // getting user value
   //  console.log(userIp);
   //  console.log(Correctword);


   if (userIp === "") {
      alert(`Please ! First Insert a Word!!`);
   }

   else if (userIp !== Correctword) {
      //   alert(`Oops! ${userIp} is not a Correct word !`);
      input.value = "";
      score = score - 50;

      // -- Open Popup --  //

      clearInterval(timer);
      popStatus.innerText = "Oops! You miss it. Not Correct!!";
      popCorrect.innerText = `${Correctword.toUpperCase()}`;
      popScore.innerText = score;
      popContainer.classList.add("Open-Popup");


      if (score < 0) {
         score = 100;
         //   alert(`Oops Game Over ! \n ${Correctword.toUpperCase()} was the correct word. \n Your Score : ${score}`);

         // -- Open Popup --  //
         clearInterval(timer);
         popStatus.innerText = "Oops!  Game Over !!";
         popCorrect.innerText = `${Correctword.toUpperCase()}`;
         popScore.innerText = score;
         popContainer.classList.add("Open-Popup");

         ScoreText.innerText = score;
      }
      initGame();
      ScoreText.innerText = score;
   }

   else {
      //   alert(`Congrats ! ${userIp.toUpperCase()} is  a Correct word !`);

      score = score + 100;

      // -- Open Popup --  //
      clearInterval(timer);
      popStatus.innerText = "Yay! You Done It.";
      popCorrect.innerText = `${userIp.toUpperCase()}`;
      popScore.innerText = score;
      popContainer.classList.add("Open-Popup");


      input.value = "";
      ScoreText.innerText = score;
      initGame();
   }

};

check.addEventListener('click', checkWord);

// ---------- Close popup ---------- //

const Close = () => {

   popContainer.classList.remove("Open-Popup");
   // Pop.classList.add("Close-Popup");

};

btnOk.addEventListener('click', Close);


