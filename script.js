const Nombre = document.getElementById("Nombre")
const Apellido = document.getElementById("Apellido")
const Contraseña = document.getElementById("Contraseña")
const Edad = document.getElementById("Edad")

const Nombreresultado = document.getElementById("respuestaNombre")
const Apellidoresultado = document.getElementById("respuestaApellido")
const Contraseñaresultado = document.getElementById("respuestaContraseña")
const Edadresultado = document.getElementById("respuestaEdad")
const formulario = document.getElementById("formulario")

function color() {
 document.body.classList.toggle("color")

}

function enviarFormulario() {
    if (Nombre.value.trim() == "" || Apellido.value.trim() == "" || Contraseña.value.trim() == "") {
        alert("Por favor, ingrese todos los datos");
    } else {
        Nombreresultado.innerText = "Nombre:" + Nombre.value
        Apellidoresultado.innerText = "Apellido:" + Apellido.value
        Contraseñaresultado.innerText = "Contraseña:" + Contraseña.value
        Edadresultado.innerText = "Edad:" + Edad.value

        const EdadNumero = parseInt(Edad.value);

        if (EdadNumero >= 18) {
            Edadresultado.innerText = "Es mayor de edad";
            formulario.classList.remove("menor");
        } else {
            Edadresultado.innerText = "Es menor de edad";

            formulario.classList.add("menor");



        }
    }




}