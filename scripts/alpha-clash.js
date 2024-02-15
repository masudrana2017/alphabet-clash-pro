// function play(){
//     /*
//     stpe-1: hide the home screen. to hide the screen add the class hidden to the home screen
//     step-2: show the play ground
//     */ 
//    const homeSection=document.getElementById('home-screen');
//    homeSection.classList.add('hidden');
//    const playSection=document.getElementById('play-ground');
//    playSection.classList.remove('hidden');
// }

function handlekeyboardpresskey(event){
    // console.log(event.key);
    const playerPressed=event.key;
    // console.log('player pressed',playerPressed);
    // stop game if player pressed 'Esc'
    if(playerPressed==='Escape'){
        gameOver();
    }
    // get the expected to pressed
    const currentElphabetElement=document.getElementById('current-alphabet');
    // console.log(currentElphabetElement.innerText);
    const targetElphabet=currentElphabetElement.innerText;
    const expectedElphabet=targetElphabet.toLowerCase();
    console.log(expectedElphabet, playerPressed);

    if(playerPressed===expectedElphabet){
        const currentScore=getElementByTextId('current-score');
        const updatedSocre=currentScore+1;
        setTextElementValueById('current-score',updatedSocre);
        // ---------------------------------
        // updated score
        // // 1. get the curren score
        // const currentScoreElement=document.getElementById('current-score');
        // const currentScoreText=currentScoreElement.innerText;
        // const currentScore=parseInt(currentScoreText);
        // // 2. increase the current score 1
        // const newScore=currentScore+1;
        // // 3. show the update score
        // currentScoreElement.innerText=newScore;
        // start a new round
        // ---------------------------------------
        removeBackgroundColorByID(expectedElphabet);
        continueGame();
    }
    else{
        const currentLife=getElementByTextId('current-life');
        const updateLife=currentLife-1;
        setTextElementValueById('current-life',updateLife)
        if(updateLife===0){
            gameOver();
        }
        // ----------------------
        // console.log('you missed. you lost a life');
        // // 1. get the current life
        // const currentLifeElement=document.getElementById('current-life');
        // const currentLifeText=currentLifeElement.innerText;
        // const currentLife=parseInt(currentLifeText);
        // // 2. reduce the current life
        // const updateLife=currentLife-1;
        // // 3. display the update life
        // currentLifeElement.innerText=updateLife;
        // ----------------------------------------
    }
}
// capture keyboard press key
document.addEventListener('keyup',handlekeyboardpresskey)

function continueGame(){
    // Generate a random alphabet 
    const alphabet=getRandomAlphabet();
    // console.log('Your Random Alphabet:',alphabet);
    // set generate randomly alphabet to the screen (show it)
    const currentElphabetElement=document.getElementById('current-alphabet');
    currentElphabetElement.innerText=alphabet;
    // set Background Color
    setBackgroundColorByID(alphabet);
}

function play(){
    // hide everything show only the playground
    hideElementId('home-screen');
    hideElementId('final-score');
    showElementId('play-ground');
    setTextElementValueById('current-life',5);
    setTextElementValueById('current-score',0);
    continueGame();
    // reset score and life

}

function gameOver(){
    hideElementId('play-ground');
    showElementId('final-score');
    // update final score
    // 1. get the final score
    const lastScore=getElementByTextId('current-score');
    setTextElementValueById('last-score',lastScore);
    // clear last selected alphabet
    const currentAlphabet=getTextById('current-alphabet');
    removeBackgroundColorByID(currentAlphabet);
}
