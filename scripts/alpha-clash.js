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

function play(){
    hideElementId('home-screen');
    showElementId('play-ground');
}