function login(){

    document.getElementById("loginScreen").style.display = "none";

    document.getElementById("dashboard").style.display = "block";

}

function actualizar(){

    document.getElementById("panelDatos").style.display = "block";

}

function guardarDatos(){

    let tiempo = document.getElementById("nuevoTiempo").value;

    let cajas = document.getElementById("nuevasCajas").value;

    let clientes = document.getElementById("nuevosClientes").value;

    let historial = document.getElementById("listaHistorial");

let nuevoRegistro = document.createElement("li");

nuevoRegistro.innerHTML =
new Date().toLocaleTimeString() +
" - Datos operativos actualizados";

historial.prepend(nuevoRegistro);

    
    // CALCULAR EFICIENCIA AUTOMÁTICAMENTE
    let eficiencia = Math.round((clientes / (cajas * 30)) * 100);

    if(eficiencia < 50){

    alert("⚠ Eficiencia operativa baja detectada");

}

    
    // ACTUALIZAR TARJETAS
    if(tiempo >= 60){

    let horas = (tiempo / 60).toFixed(1);

    document.querySelectorAll(".card h2")[0].innerText = horas + " h";

}else{

    document.querySelectorAll(".card h2")[0].innerText = tiempo + " min";

}

    document.querySelectorAll(".card h2")[1].innerText = cajas;

    document.querySelectorAll(".card h2")[2].innerText = clientes;

    document.querySelectorAll(".card h2")[3].innerText = eficiencia + "%";

    
    alert("Datos actualizados correctamente");

}

function reporte(){

    alert("Reporte generado exitosamente");

}

function logout(){

    location.reload();

}

const fecha = new Date();

document.getElementById("fecha").innerHTML =
fecha.toLocaleDateString();

setInterval(function(){

    const ahora = new Date();

    document.getElementById("reloj").innerHTML =
    ahora.toLocaleTimeString();

},1000);