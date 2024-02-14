function hideElementId(elementId){
    const element=document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementId(elementId){
    const element=document.getElementById(elementId);
    element.classList.remove('hidden');
}
function getRandomAlphabet(){
    // get or create alphabet array
    const alphabetString='abcdefghijklmnopqrstuvwxys';
    const alphabets=alphabetString.split('');
    // console.log(alphabets);
    // get an index between 0 to 25
   const randomNumber=Math.random()*25;
   const index=Math.round(randomNumber);
   const alphabet=alphabets[index];
//    console.log(index,alphabet);
   return alphabet;
}

function setBackgroundColorByID(elementId){
    const element=document.getElementById(elementId);
    element.classList.add('bg-orange-400')
}