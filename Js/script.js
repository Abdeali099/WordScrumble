// getting random objects from words //

const initGame = () => {

    let randomObj = words[Math.floor(Math.random()*(words.length))];
    //  it will generate 0 to length-1 number

    let wordArray = randomObj.word.split("");
    // splitting each letter of word . It have to shuffel 

    console.log(wordArray);
    console.log(randomObj);
    console.log(randomObj.word);
    console.log(randomObj.hint);

    let copyw=[...wordArray]; // shallow copy (it will shave random letter)

    for (let i = wordArray.length-1; i >0; i--)
     {
        
        let j = Math.floor(Math.random()*(i+1));
        // Getting a Random number betwwen : 0 and i+1

        [copyw[i],copyw[j]] = [copyw[j],copyw[i]];
        // Swapping two value of array element
     }

    
           console.log(copyw);
};

initGame();


