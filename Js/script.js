
// shuffel word //
let WordText=document.getElementById("word");

// hint //
let Hint=document.getElementById("hints");

// input field //
let input=document.getElementById("input");

// refersh-button //
let referesh=document.getElementById("referesh");

// check button //
let check=document.getElementById("check");

let Correctword="";

// ---------------------  getting random objects from words --------------------- //

const initGame = () => {

    let randomObj = words[Math.floor(Math.random()*(words.length))];
    //  it will generate 0 to length-1 number

    let wordArray = randomObj.word.split("");
    // splitting each letter of word . It have to shuffel 

    // console.log(wordArray);
    // console.log(randomObj);
    console.log(randomObj.word);
    console.log(randomObj.hint);

    let shuffelArray=[...wordArray]; // shallow copy (it will shave random letter)

    for (let i = wordArray.length-1; i >0; i--)
     {
        
        let j = Math.floor(Math.random()*(i+1));
        // Getting a Random number betwwen : 0 and i+1

        [shuffelArray[i],shuffelArray[j]] = [shuffelArray[j],shuffelArray[i]];
        // Swapping two value of array element
     }

          console.log(shuffelArray);

     // --------- Now we have to show this to a user --------- //

     WordText.innerText=shuffelArray.join(""); // shoing array as a word text
     Hint.innerText=randomObj.hint; // hint

    //  Inputs //
     Correctword=randomObj.word.toLowerCase();
     input.setAttribute("maxlength",Correctword.length);
    //  set input's maximum length to Correct word length
    
};

initGame();

 //  lets referseh a word by a button //
 referesh.addEventListener('click',initGame);


//  at time input convert to uppercase automatic //
input.addEventListener('keyup',()=>{
    let Ip=input.value.toUpperCase();
    input.value=Ip;
});

 //  lets check input-word with actual answer //

 const checkWord = () =>{                  
     let userIp=input.value.toLocaleLowerCase(); // getting user value
     console.log(userIp);
     console.log(Correctword);


     if (userIp==="")
     {
        alert(`Please ! First Insert a Word!!`);     
     }

     else if(userIp !== Correctword) 
     {
        alert(`Oops! ${userIp} is not a Correct word !`);
        input.value="";
     } 

     else
     {
        alert(`Congrats ! ${userIp.toUpperCase()} is  a Correct word !`);
        input.value="";
        initGame();
     }

     

 };

 check.addEventListener('click',checkWord);




