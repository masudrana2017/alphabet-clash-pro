function hideElementId(elementId){
    const element=document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementId(elementId){
    const element=document.getElementById(elementId);
    element.classList.remove('hidden');
}