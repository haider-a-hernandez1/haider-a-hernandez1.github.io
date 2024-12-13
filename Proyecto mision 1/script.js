// Función para validar el formulario de registro
function validarFormulario() {
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var contrasena = document.getElementById("contrasena").value;
    var confirmarContrasena = document.getElementById("confirmarContrasena").value;
    var mensajeError = document.getElementById("mensajeError");

    // Validación de la contraseña
    if (contrasena !== confirmarContrasena) {
        mensajeError.textContent = "Las contraseñas no coinciden.";
        return false;
    }

    // Validación del nombre (debe tener al menos 3 caracteres)
    if (nombre.length < 3) {
        mensajeError.textContent = "El nombre debe tener al menos 3 caracteres.";
        return false;
    }

    // Validación del correo
    if (!email.includes("@")) {
        mensajeError.textContent = "Por favor, introduce un correo electrónico válido.";
        return false;
    }

    mensajeError.textContent = "";
    return true;
}



// Obtener referencias a los botones y formularios
const btnRegistro = document.getElementById('btnRegistro');
const btnLogin = document.getElementById('btnLogin');
const registroFormulario = document.getElementById('registroFormulario');
const loginFormulario = document.getElementById('loginFormulario');

// Mostrar el formulario de Registro y ocultar el de Login
btnRegistro.addEventListener('click', () => {
    registroFormulario.style.display = 'block';
    loginFormulario.style.display = 'none';
});

// Mostrar el formulario de Login y ocultar el de Registro
btnLogin.addEventListener('click', () => {
    loginFormulario.style.display = 'block';
    registroFormulario.style.display = 'none';
});




// Variables globales
let carrito = [];  // Array para almacenar los cursos seleccionados
const totalSpan = document.getElementById("total-carrito");
const descuentoSpan = document.getElementById("descuento");
const totalConDescuentoSpan = document.getElementById("total-descuento");
const btnBorrarCarrito = document.getElementById("btnBorrarCarrito");

// Función para agregar cursos al carrito
function agregarAlCarrito(precio, nombre) {
    carrito.push({ nombre, precio });
    actualizarCarrito(); // Actualizar el carrito
}

// Función para actualizar el carrito y el total
function actualizarCarrito() {
    let total = 0;
    carrito.forEach(item => {
        total += item.precio;
    });

    // Mostrar el total en el carrito
    totalSpan.textContent = total.toFixed(2);

    // Calcular el descuento y el total con descuento
    const descuento = total * 0.1;  // 10% de descuento
    const totalConDescuento = total - descuento;

}

// Función para borrar el carrito
function borrarCarrito() {
    carrito = []; // Limpiar el array del carrito
    actualizarCarrito(); // Actualizar la vista del carrito
    alert("Carrito vacío, puedes empezar de nuevo.");
}

// Agregar eventos a los botones "Agregar al carrito"
document.querySelectorAll('.agregar-carrito').forEach(button => {
    button.addEventListener('click', (event) => {
        const precio = parseFloat(event.target.getAttribute('data-precio'));
        const nombre = event.target.previousElementSibling.previousElementSibling.textContent;
        agregarAlCarrito(precio, nombre); // Agregar al carrito
    });
});

// Evento para borrar el carrito
btnBorrarCarrito.addEventListener("click", borrarCarrito);

// Función para validar formulario (mantén la misma lógica que ya tienes)
function validarFormulario() {
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var contrasena = document.getElementById("contrasena").value;
    var confirmarContrasena = document.getElementById("confirmarContrasena").value;
    var mensajeError = document.getElementById("mensajeError");

    if (contrasena !== confirmarContrasena) {
        mensajeError.textContent = "Las contraseñas no coinciden.";
        return false;
    }

    if (nombre.length < 3) {
        mensajeError.textContent = "El nombre debe tener al menos 3 caracteres.";
        return false;
    }

    if (!email.includes("@")) {
        mensajeError.textContent = "Por favor, introduce un correo electrónico válido.";
        return false;
    }

    mensajeError.textContent = "";
    return true;
}

// Lógica para agregar cursos con descuento (como ya tienes)
let cursos = [
    { nombre: "Matemáticas", precio: 25 },
    { nombre: "Pintura", precio: 30 },
    { nombre: "Ciberseguridad", precio: 35 },
    { nombre: "Mecánica Automotriz", precio: 40 },
    { nombre: "Medicina", precio: 45 },
];


const abrirFormulario = document.getElementById('abrirFormulario');
        const cerrarFormulario = document.getElementById('cerrarFormulario');
        const formularioContainer = document.getElementById('formularioContainer');
        const formulario = document.getElementById('formulario');
        const cursosContainer = document.getElementById('cursosContainer');

        // Mostrar el modal
        abrirFormulario.addEventListener('click', () => {
            formularioContainer.style.display = 'flex';
        });

        // Cerrar el modal
        cerrarFormulario.addEventListener('click', () => {
            formularioContainer.style.display = 'none';
            formulario.reset();
        });

        // Manejar el envío del formulario
        formulario.addEventListener('submit', (e) => {
            e.preventDefault(); // Evita recargar la página

            // Obtener valores
            const nombreCurso = document.getElementById('nombreCurso').value;
            const descripcionCurso = document.getElementById('descripcionCurso').value;
            const imagenCurso = document.getElementById('imagenCurso').files[0];

            // Crear un lector de archivos
            const lector = new FileReader();
            lector.onload = function (evento) {
                // Crear la tarjeta del curso
                const nuevoCurso = document.createElement('div');
                nuevoCurso.classList.add('curso');

                const img = document.createElement('img');
                img.src = evento.target.result;

                const titulo = document.createElement('h3');
                titulo.textContent = nombreCurso;

                const descripcion = document.createElement('p');
                descripcion.textContent = descripcionCurso;

                // Añadir todo al contenedor
                nuevoCurso.appendChild(img);
                nuevoCurso.appendChild(titulo);
                nuevoCurso.appendChild(descripcion);
                cursosContainer.appendChild(nuevoCurso);
            };
            lector.readAsDataURL(imagenCurso);

            // Cerrar el modal y resetear
            formularioContainer.style.display = 'none';
            formulario.reset();
        });


let total = 0;
let contadorCursos = 0;
const btnAgregarCurso = document.getElementById("btnAgregarCurso");
const cursosListado = document.getElementById("cursosListado");

btnAgregarCurso.addEventListener("click", () => {
    if (contadorCursos < cursos.length) {
        // Obtener el curso
        let curso = cursos[contadorCursos];
        
        // Calcular el precio con descuento
        let descuento = contadorCursos * 5; // 5 dólares de descuento por cada curso adicional
        let precioConDescuento = curso.precio - descuento;

        // Agregar el curso al listado
        const cursoElemento = document.createElement("div");
        cursoElemento.classList.add("curso");
        cursoElemento.innerHTML = `
            <h4>${curso.nombre}</h4>
            <p>Precio original: $${curso.precio}</p>
            <p>Precio con descuento: $${precioConDescuento}</p>
        `;
        cursosListado.appendChild(cursoElemento);

        // Actualizar el total
        total += precioConDescuento;
        totalElemento.textContent = total.toFixed(2);

        // Incrementar contador de cursos
        contadorCursos++;
    } else {
        alert("Ya no hay más cursos disponibles.");
    }
});




// Función para agregar cursos al carrito
function agregarAlCarrito(precio, nombre) {
    carrito.push({ nombre, precio });
    actualizarCarrito(); // Actualizar el carrito

    // Mostrar una alerta de confirmación
    alert(`${nombre} ha sido agregado al carrito. Precio: $${precio}`);

    // Actualizar la bola flotante con el total del carrito
    actualizarBolaFlotante();
}




// Función para actualizar el carrito y el total
function actualizarCarrito() {
    let total = 0;
    carrito.forEach(item => {
        total += item.precio;
    });

    // Mostrar el total en el carrito
    totalSpan.textContent = total.toFixed(2);

    // Calcular el descuento y el total con descuento
    const descuento = total * 0.1;  // 10% de descuento
    const totalConDescuento = total - descuento;

    // Mostrar el descuento y el total con descuento
    descuentoSpan.textContent = descuento.toFixed(2);
    totalConDescuentoSpan.textContent = totalConDescuento.toFixed(2);
}















   





    







    
    
    



