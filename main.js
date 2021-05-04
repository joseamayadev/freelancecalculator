var mes = document.getElementsByName('mes')[0],
    validaciones = document.querySelectorAll('input'),
    button = document.getElementById('procesar');




//validando todos los campos de texto dentro del formulario 
function validacionesFormularios() {
    validaciones.forEach(element => {
        if (element.value == false) {
            element.classList.add('require');
        } else {
            element.classList.remove('require');
        }
    });
}

button.addEventListener('click', (e) => {
    e.preventDefault();
    button.classList.add('procesando');
    validacionesFormularios();
    setTimeout(() => {
        button.classList.remove('procesando');


    }, 1500);
})