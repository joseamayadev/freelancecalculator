var mes = document.getElementsByName('mes')[0],
    validaciones = document.querySelectorAll('input'),
    button = document.getElementById('procesar'),
    resultados = document.querySelector('.resultados'),
    formulario = document.querySelector('form');





//validando todos los campos de texto dentro del formulario 
function validacionesFormularios() {
    validaciones.forEach(element => {
        if (element.value == false) {
            element.classList.add('require');
        } else {
            element.classList.remove('require');
            setTimeout(() => {
                button.classList.remove('procesando');
                resultados.classList.add('mostrar')
            }, 1500);

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