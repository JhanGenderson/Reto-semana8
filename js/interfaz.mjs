class Interface {
    
    printPersona(arregloPersona){
        const contenido = document.getElementById("lista")

        let listPersonas = '';

        arregloPersona.forEach(({name,edad,job,avatar}) =>{
            let cardPersona = `<div class="col-6 col-lg-3 mb-2">
                <div class="card">
                    <img src= "${avatar}" class="card-img-top" alt="producto">
                    <div class="card-body">
                        <h4 class="card-title">
                            ${name}
                        </h4>
                        <p class="card-text">
                        ${edad}
                        </p>
                    </div>
                    <div class="card-footer">
                    <span class="fw-bold">Job:</span> ${job}
                    </div>
                </div>
            </div>`;

            listPersonas= listPersonas + cardPersona;
        })
        contenido.innerHTML = listPersonas;
    }
}

export{
    Interface
}