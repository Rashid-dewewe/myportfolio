
function runTypingEffect(){
    const text = 'I am Rashid Dewewe'
    const typingElement = document.getElementById('text');
    const typingDelay = 100; //time in milliseconds

    typeText(text, typingElement, typingDelay);
}

function typeText(text, typingElement, delay){
    for(let i=0; i < text.length; i++){
        setTimeout(()=>{
            typingElement.textContent += text.charAt(i);
        }, delay*i);
    }
}

document.addEventListener('DOMContentLoaded', runTypingEffect);



