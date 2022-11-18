document.addEventListener('DOMContentLoaded', function(){

    //CONSTANTES
    const nombre = document.querySelector('#nombre');
    const email = document.querySelector('#email');
    const mensaje = document.querySelector('#mensaje');
    const formulario = document.querySelector('.formulario');

    const datos = {
        nombre: '',
        email: '',
        mensaje: ''
    };

    //EVENTOS
    nombre.addEventListener('input', leerDatos);
    email.addEventListener('input', leerDatos);
    mensaje.addEventListener('input', leerDatos);

    //El evento Submit, envio de datos del formulario
    formulario.addEventListener('submit', function(e){
        e.preventDefault();

        //Validar formulario

        const{nombre, email, mensaje} = datos;

        if (nombre === '' || email === '' || mensaje === ''){
            mostrarError(`todos los campos son obligatorios`);
            return;  //corta la ejecucion
        }
        //Enviar formulario
        mostrarExito();
    });
    

    //FUNCIONES
    function leerDatos(e){
        datos[e.target.id] = e.target.value;
        /* console.log(datos); */
    };

    function mostrarError(mensaje){
        const error = document.createElement('P');
        error.textContent = mensaje;
        error.classList.add('error');

        formulario.appendChild(error);

        //Desaparezca despues de 5 segundos
        setTimeout( () => {
            error.remove();
        }, 5000);
    }

    function mostrarExito(){
        const exito = document.createElement('P');
        exito.textContent = 'Se a enviado correctamente'
        exito.classList.add('correcto');

        formulario.appendChild(exito);
        setTimeout( () => {
            exito.remove()
        },5000)
    }

});