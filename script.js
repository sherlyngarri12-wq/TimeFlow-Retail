function login(){


    document.getElementById("loginScreen").style.display = "none";

    document.getElementById("dashboard").style.display = "block";

    document.getElementById("sidebar").style.display = "block";

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

    let eficiencia = Math.round((clientes / (cajas * 30)) * 100);

if(eficiencia > 100){

    eficiencia = 100;

}

    if(eficiencia < 50){

        alert("⚠ Eficiencia operativa baja detectada");

    }

    if(tiempo >= 60){

        let horas = (tiempo / 60).toFixed(1);

        document.querySelectorAll(".card h2")[0].innerText = horas + " h";

    }else{

        document.querySelectorAll(".card h2")[0].innerText = tiempo + " min";

    }

    document.querySelectorAll(".card h2")[1].innerText = cajas;

    document.querySelectorAll(".card h2")[2].innerText = clientes;

    document.querySelectorAll(".card h2")[3].innerText = eficiencia + "%";

document.getElementById("barraInterna").style.width =
eficiencia + "%";

alert("Datos actualizados correctamente");

}

function reporte(){

    const { jsPDF } = window.jspdf;

    const doc = new jsPDF();

    doc.setFont("helvetica");

    doc.setFontSize(22);

    doc.text("Reporte Operativo", 20, 20);

    doc.setFontSize(14);

    doc.text("TimeFlow Retail", 20, 30);

    doc.line(20,35,190,35);

    doc.text(
    "Fecha: " + new Date().toLocaleDateString(),
    20,
    50
    );

    doc.text(
    "Hora: " + new Date().toLocaleTimeString(),
    20,
    60
    );

    doc.text(
    "Tiempo promedio: " +
    document.querySelectorAll(".card h2")[0].innerText,
    20,
    80
    );

    doc.text(
    "Cajas activas: " +
    document.querySelectorAll(".card h2")[1].innerText,
    20,
    90
    );

    doc.text(
    "Clientes atendidos: " +
    document.querySelectorAll(".card h2")[2].innerText,
    20,
    100
    );

    doc.text(
    "Eficiencia: " +
    document.querySelectorAll(".card h2")[3].innerText,
    20,
    110
    );

    doc.text("Alertas:",20,130);

    doc.text(
    "- Caja 2 presenta saturacion",
    25,
    140
    );

    doc.text(
    "- Redistribucion recomendada",
    25,
    150
    );

    doc.save("Reporte_TimeFlow.pdf");

}

function logout(){

    document.getElementById("sidebar").style.display = "none";

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

function mostrarSeccion(id){

    let secciones =
    document.querySelectorAll(".section");

    secciones.forEach(function(sec){

        sec.style.display = "none";

    });

    document.getElementById(id).style.display = "block";

}