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

// Lógica para agregar cursos con descuentos
let cursos = [
    { nombre: "Matemáticas", precio: 25 },
    { nombre: "Pintura", precio: 30 },
    { nombre: "Ciberseguridad", precio: 35 },
    { nombre: "Mecánica Automotriz", precio: 40 },
    { nombre: "Medicina", precio: 45 },
];

let total = 0;
let contadorCursos = 0;

const btnAgregarCurso = document.getElementById("btnAgregarCurso");
const totalElemento = document.getElementById("total");
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