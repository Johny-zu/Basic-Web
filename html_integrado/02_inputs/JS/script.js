// Versión MÍNIMA y funcional (sin validaciones complejas)
document.addEventListener('DOMContentLoaded', function() {
    const inputNombre = document.getElementById('nombreInput')
    const inputApellido = document.getElementById('apellidoInput')
    const inputEmail = document.getElementById('emailInput')
    const inputPass = document.getElementById('passInput')
    const botonEnviar = document.getElementById('btnEnviar')
    const divResultado = document.getElementById('resultadoDiv')

    function procesarFormulario() {
        const nombre = inputNombre.value
        const apellido = inputApellido.value
        const email = inputEmail.value
        const pass = inputPass.value

        if (nombre.trim() === '') {
            alert('Por favor, escribe tu nombre');
            return;  // 'return' detiene la función aquí
        }
        if (apellido.trim() === '') {
            alert('Por favor, escribe tu apellido');
            return;
        }
        if (email.trim() === '') {
            alert('Por favor, escribe tu email');
            return;
        }
        if (pass.trim() === '') {
            alert('Por favor, escribe tu contraseña');
            return;
        }

        const htmlMostrar = `
        <h4>Información Enviada Correctamente</h4>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Apellido:</strong> ${apellido}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Contraseña:</strong> ${'*'.repeat(pass.length)}</p>
        <small>Enviado: ${new Date().toLocaleString()}</small>`;

        divResultado.innerHTML = htmlMostrar
        divResultado.classList.add('mostrar')
        divResultado.scrollIntoView({behavior: 'smooth'})
    }

    botonEnviar.addEventListener('click', procesarFormulario)
    const botonReset = document.querySelector('#formularioUno input[type="reset"]');
});