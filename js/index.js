function animar() {
    const element =   document.getElementById('animar');
    element.style.visibility='initial';
    element.classList.add('animated', 'zoomIn');
    element.addEventListener('animationend', function() { 
        element.classList.remove('animated', 'zoomIn');
        element.style.visibility='initial';
     })
    
}
function desanimar() {
    const element =   document.getElementById('animar');
    element.classList.add('animated', 'zoomOut');
    element.addEventListener('animationend', function() { 
        element.classList.remove('animated', 'zoomOut');
        element.style.visibility='hidden';
     })
}

(()=>{
    const element =   document.getElementById('animar');
    element.style.visibility='hidden';
})()