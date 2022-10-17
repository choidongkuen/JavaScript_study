const resetButton = document.querySelector('.reset');


const onReset = function(event){
    console.log(event.target);
}

resetButton.addEventListener('click',onReset);
