var validaciones = document.querySelectorAll('input'),
    button = document.getElementById('procesar'),
    resultados = document.querySelector('.resultados'),
    cerrar = document.querySelector('.cerrar'),
    formulario = document.querySelector('form');


//seleccion de cada uno de las entradas de texto
var mes = document.getElementsByName('mes')[0],
    renta = document.getElementsByName('renta')[0],
    celular = document.getElementsByName('celular')[0],
    internet = document.getElementsByName('internet')[0],
    serviciosFijos = document.getElementsByName('serviciosFijos')[0],
    vidaOtros = document.getElementsByName('vidaOtros')[0],
    herramienta = document.getElementsByName('herramienta')[0],
    dominio = document.getElementsByName('dominio')[0],
    hosting = document.getElementsByName('hosting')[0],
    otrosTrabajo = document.getElementsByName('otrosTrabajo')[0],
    diasPorSemana = document.getElementsByName('diasPorSemana')[0],
    horasPorDia = document.getElementsByName('horasPorDia')[0],
    diasVacaciones = document.getElementsByName('horasPorDia')[0];




//validando todos los campos de texto dentro del formulario 
function validacionesFormularios() {
    validaciones.forEach(element => {
        if (element.value == false) {
            element.classList.add('require');
        } else {
            element.classList.remove('require');
            setTimeout(() => {
                button.classList.remove('procesando');
                resultados.classList.add('mostrar');
            }, 1500);

        }
    });
}


//vaciar campos
function vaciarInputs() {
    validaciones.forEach(element => {
        element.textContent = "";
    });
}

button.addEventListener('click', (e) => {
    e.preventDefault();
    button.classList.add('procesando');
    validacionesFormularios();
    setTimeout(() => {
        button.classList.remove('procesando');
        var gastos = gastosFijos(),
            trabajo = gastosFijosTrabajo(),
            totalMes = parseInt(mes.value) + gastos + trabajo,
            diasXsemana = parseInt(diasPorSemana.value),
            horasXdia = parseInt(horasPorDia.value),
            vacaciones = parseInt(diasVacaciones.value);

        var totalAnual = totalMes * 12,
            totalDiasSemana = diasXsemana * horasXdia,
            totalhorasMes = totalDiasSemana * 4,
            totalHorasYear = totalhorasMes * 12,
            valorPrecioXhora = totalAnual / totalHorasYear;


        mostrarResultados(totalMes, totalAnual, totalDiasSemana, totalhorasMes, totalHorasYear, valorPrecioXhora);

    }, 1500);

});

cerrar.addEventListener('click', () => {
    resultados.classList.remove('mostrar');

})

function mostrarResultados(totalMes, totalAnual, totalDiasSemana, totalhorasMes, totalHorasYear, valorPrecioXhora) {
    document.querySelector('.horasYear').innerText = totalMes ? totalMes : 'Error';
    document.querySelector('.totalAnual').innerText = totalAnual ? totalAnual : 'Error';
    document.querySelector('.totalDiasSemana').innerText = totalDiasSemana ? totalDiasSemana : 'Error';
    document.querySelector('.totalHorasMes').innerText = totalhorasMes ? totalhorasMes : 'Error';
    document.querySelector('.totalHorasYear').innerText = totalHorasYear ? totalHorasYear : 'Error';
    document.querySelector('.valorPrecioXhora').innerText = valorPrecioXhora == 'Infinity' ? 'Error' : valorPrecioXhora.toFixed(2);
}

//extraer los valores 
function gastosFijos() {
    //calculos de gastos fijos
    var valorRenta = parseInt(renta.value);
    var valorCelular = parseInt(celular.value);
    var valorInternet = parseInt(internet.value);
    var valorServiciosFijos = parseInt(serviciosFijos.value);
    var valorvidaOtros = parseInt(vidaOtros.value);
    // console.log(valorMes);
    // console.log(valorRenta);
    // console.log(valorCelular);
    // console.log(valorInternet);
    // console.log(valorServiciosFijos);
    // console.log(valorvidaOtros);
    var totalgastosFijos = valorRenta + valorCelular + valorInternet + valorServiciosFijos + valorvidaOtros;
    return totalgastosFijos;
}

function gastosFijosTrabajo() {
    var valorHerramienta = parseInt(herramienta.value);
    var valorDominio = parseInt(dominio.value);
    var valorHosting = parseInt(hosting.value);
    var valorOtrosTrabajo = parseInt(otrosTrabajo.value);

    // console.log(valorHerramienta);
    // console.log(valorDominio);
    // console.log(valorHosting);
    // console.log(valorOtrosTrabajo);
    var totalgastosFijosTrabajo = valorHerramienta + valorDominio + valorHosting + valorOtrosTrabajo;
    return totalgastosFijosTrabajo;

}