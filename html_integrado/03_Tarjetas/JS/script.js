document.addEventListener('DOMContentLoaded', function(){
    const inputNombre = document.getElementById('nombreInput')
    const inputProfesion = document.getElementById('profesionInput')
    const inputEmail = document.getElementById('emailInput')
    const inputTelefono = document.getElementById('telefonoInput')
    const botonEnviar = document.getElementById('btnEnviar')
    const divResultado = document.getElementById('resultadoDiv')
    const botonReset = document.getElementById('btnReset')

    function procesarFormulario(){
        const nombre = inputNombre.value
        const profesion = inputProfesion.value
        const email = inputEmail.value
        const telefono = inputTelefono.value
        if(nombre.trim() === ''){
            alert('Favor de escribir el nombre')
            return;
        }
        if(profesion.trim() === ''){
            alert('Favor de escribir el profesion')
            return;
        }
        if(email.trim() === ''){
            alert('Favor de escribir el email')
            return;
        }
        if(telefono.trim() === ''){
            alert('Favor de escribir el telefono')
            return;
        }

        const htmlMostrar = `
        👤
        <h2>${nombre}</h2>
        <h4>${profesion}</h4>
        <br><br><br>
        <h4>${email}</h4>
        <h4>${telefono}</h4>
        `;

        divResultado.innerHTML = htmlMostrar
        divResultado.classList.add('mostrar')
        divResultado.scrollIntoView({behavior: 'smooth'})
    }

    botonEnviar.addEventListener('click', procesarFormulario)

    botonReset.addEventListener('click', function() {
        divResultado.classList.remove('mostrar')
        divResultado.innerHTML = ''
    })
})