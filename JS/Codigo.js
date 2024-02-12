function obtenerPaisesIndependientes() {
    fetch("https://restcountries.com/v3.1/all")
        .then(function (response) {
            if (response.status == 200) {
                return response.json();
            } else {
                return Promise.reject({ codigo: response.status, mensaje: "Datos Incorrectos" });
            }
        })
        .then(function (datos) {
            datos.forEach(function (pais) {
                const nombreComunEnEspanol = pais.translations.spa.common;
                const paisesIndependientes = pais.independent;

                if (paisesIndependientes) {
                    var tbody = document.getElementById("PaisesIndependientes");
                    
                    var fila = document.createElement("tr");

                    var celdaNombre = document.createElement("td");
                    if(nombreComunEnEspanol != "Uruguay"){
                        celdaNombre.textContent = nombreComunEnEspanol;

                        fila.appendChild(celdaNombre);
    
                        tbody.appendChild(fila);
                    }else{
                        celdaNombre.textContent = nombreComunEnEspanol + "🟡🔵⚪🔵";

                        fila.appendChild(celdaNombre);
    
                        tbody.appendChild(fila);
                    }
                  
                }
            });
        })
        .catch(function (error) {
            console.log(error.mensaje);
        });
}

obtenerPaisesIndependientes();
