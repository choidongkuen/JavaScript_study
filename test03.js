console.log('in ths js');
// console.dir(document.querySelector('body'));

const h2Element = document.querySelector('h2');
const pElement = document.querySelector('p');


function replaceH2Test(){
    h2Element.innerText = '안녕하세요';
}


h2Element.addEventListener('click',replaceH2Test())
h2Element.addEventListener('click',replaceH2Test())

