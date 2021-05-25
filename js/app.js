import { crearPersona } from "./Persona.mjs"
import {Interface} from "./interfaz.mjs"


let persona = new crearPersona()
let interfaz = new Interface()

let btnCrear = document.getElementById("btn-crear")
let modalCrear = new bootstrap.Modal(document.getElementById("modal-crear"))
let btnGuardar = document.getElementById("btn-guardar")


let getPersona = () => {
  persona.obtenerPersona()
  .then(persona => {
    interfaz.printPersona(persona)
  })
  .catch(err => console.log(err))
}
getPersona()

btnCrear.addEventListener("click", () =>{
    modalCrear.show()
})

btnGuardar.addEventListener("click", () =>{
    let formulario = document.getElementById("form-crear")

    let nuevaPersona = {
      nombre: formulario["nombre"].value ,
      descripcion: formulario["edad"].value,
      precio: formulario["trabajo"].value,
  }
persona.crearUsuario(nuevaPersona)
    
    .then(personaCreada => {
        formulario.reset()
        modalCrear.hide()
        getPersona()
    })
    .catch(err => console.log(err))
})
