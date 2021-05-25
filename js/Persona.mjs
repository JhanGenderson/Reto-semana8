    const URL = "https://609f10635f32be00171cd34d.mockapi.io/users"

class crearPersona{
    
  obtenerPersona(){
        return new Promise((resolve,reject) => {
            fetch(URL)
            .then(respuesta => {
                return respuesta.json()
            })
            .then(personas => {
                resolve(personas)
            })
            .catch(error => reject(error))
        })
    }

   crearUsuario(objUsuario){
        return new Promise((resolve, reject) =>{
            let configuracion = {
                method:'POST',
                body:JSON.stringify(objUsuario), 
                headers: {'Content-Type':'application/json'}
            }

            fetch(URL, configuracion)
            .then(respuesta => respuesta.json())
            .then(personaCreada => resolve(personaCreada))
            .catch(error => reject(error))
        })
    }
}

export{
    crearPersona
}