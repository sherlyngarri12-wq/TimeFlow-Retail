function login(){

    document.getElementById("loginScreen").style.display = "none";

    document.getElementById("dashboardSection").style.display = "block";

    document.getElementById("sidebar").style.display = "block";

}

function actualizar(){

    document.getElementById("panelDatos").style.display = "block";

}

function guardarDatos(){

    let tiempo =
    document.getElementById("nuevoTiempo").value;

    let cajas =
    document.getElementById("nuevasCajas").value;

    let clientes =
    document.getElementById("nuevosClientes").value;

    let historial =
    document.getElementById("listaHistorial");

    let nuevoRegistro =
    document.createElement("li");

    nuevoRegistro.innerHTML =
    new Date().toLocaleTimeString() +
    " - Datos operativos actualizados";

    historial.prepend(nuevoRegistro);

    let eficiencia =
Math.round(
(clientes * 10) /
(tiempo + cajas)
);

    if(eficiencia > 100){

        eficiencia = 100;

    }

    if(eficiencia < 50){

        alert("⚠ Eficiencia operativa baja detectada");

    }

    if(tiempo >= 60){

        let horas =
        (tiempo / 60).toFixed(1);

        document.querySelectorAll(".card h2")[0].innerText =
        horas + " h";

    }else{

        document.querySelectorAll(".card h2")[0].innerText =
        tiempo + " min";

    }

    document.querySelectorAll(".card h2")[1].innerText =
    cajas;

    let tablaCajas =
document.getElementById("tablaCajas");

tablaCajas.innerHTML = "";

for(let i = 1; i <= cajas; i++){

    let fila =
    document.createElement("tr");

    let tiempoCaja =
    Math.floor(Math.random() * 10) + 1;

    let estado = "Activa";

    if(tiempoCaja >= 7){

        estado = "Saturada";

    }

    fila.innerHTML =

    "<td>Caja " + i + "</td>" +
    "<td>" + estado + "</td>" +
    "<td>" + tiempoCaja + " min</td>";

    tablaCajas.appendChild(fila);

}

    document.querySelectorAll(".card h2")[2].innerText =
    clientes;

    document.querySelectorAll(".card h2")[3].innerText =
    eficiencia + "%";

    let rendimiento = 100;

/* TIEMPO */

rendimiento -= tiempo * 0.8;

/* CLIENTES */

if(clientes > 150){

    rendimiento -= 20;

}else if(clientes > 100){

    rendimiento -= 10;

}

/* CAJAS */

rendimiento += cajas * 5;

/* LIMITES */

if(rendimiento > 100){

    rendimiento = 100;

}

if(rendimiento < 10){

    rendimiento = 10;

}

document.getElementById("barraInterna").style.width =
rendimiento + "%";

document.getElementById(
"rendimientoCajas"
).innerText =
eficiencia + "%";

document.getElementById(
"rendimientoInventario"
).innerText =
(eficiencia - 5) + "%";

document.getElementById(
"rendimientoDistribucion"
).innerText =
(eficiencia - 10) + "%";

if(eficiencia < 60){

    document.getElementById(
    "estadoCajas"
    ).innerText =
    "Saturado";

    document.getElementById(
    "estadoInventario"
    ).innerText =
    "Riesgo";

    document.getElementById(
    "estadoDistribucion"
    ).innerText =
    "Retrasos";

}else{

    document.getElementById(
    "estadoCajas"
    ).innerText =
    "Operando";

    document.getElementById(
    "estadoInventario"
    ).innerText =
    "Estable";

    document.getElementById(
    "estadoDistribucion"
    ).innerText =
    "Alta demanda";

}

document.getElementById("eficienciaActual").innerText =
eficiencia + "%";

document.getElementById("ordenesHora").innerText =
clientes;

document.getElementById("tiempoRespuesta").innerText =
tiempo + " min";

let mermaBase = 8;

let devoluciones = 5;

let penalizaciones = 2;

let jornadasLargas = 1;

/* MERMA */

if(mermaBase >= 5){

    eficiencia -= 5;

}

/* DEVOLUCIONES */

if(devoluciones >= 5){

    eficiencia -= 3;

}

/* PROVEEDORES */

if(penalizaciones >= 2){

    eficiencia -= 4;

}

/* JORNADAS */

if(jornadasLargas >= 1){

    eficiencia -= 6;

}

if(eficiencia < 10){

    eficiencia = 10;

}

if(eficiencia >= 85){

    document.getElementById("estadoOperacion").innerText =
    "Operación estable y eficiente";

}else if(eficiencia >= 60){

    document.getElementById("estadoOperacion").innerText =
    "Operación moderada con carga media";

}else{

    document.getElementById("estadoOperacion").innerText =
    "⚠ Riesgo operativo detectado";

}

document.getElementById(
"ordenesCompletadas"
).innerText = clientes;

document.getElementById(
"alcanceOperativo"
).innerText = eficiencia + "%";

document.getElementById(
"respuestaPromedio"
).innerText = tiempo + " min";

document.getElementById(
"clientesPico"
).innerText =
Math.round(clientes * 0.7);

document.getElementById(
"clientesManana"
).innerText =
Math.round(clientes * 0.3);

let estadoManana = "Flujo normal";

let estadoPico = "Hora pico";

if(clientes < 50){

    estadoManana = "Bajo flujo";

    estadoPico = "Flujo moderado";

}

if(clientes > 150){

    estadoPico = "Saturación crítica";

}

document.querySelectorAll(
"#indicadoresSection table tr td:nth-child(3)"
)[0].innerText =
estadoManana;

document.querySelectorAll(
"#indicadoresSection table tr td:nth-child(3)"
)[1].innerText =
estadoPico;

document.getElementById(
"ordenesPendientes"
).innerText =
Math.round(clientes * 0.1);

document.getElementById(
"ordenesCanceladas"
).innerText =
Math.round(clientes * 0.03);

document.getElementById(
"ordenesExitosas"
).innerText =
Math.round(clientes * 0.87);

document.getElementById(
"barraIndicadores"
).style.width =
eficiencia + "%";

let merma = 0;

/* STOCK BAJO */

if(stock < 30){

    merma += 10;

}

/* SATURACION */

if(capacidad >= 80){

    merma += 15;

}

/* ACTUALIZAR MERMA */

document.getElementById(
"porcentajeMerma"
).innerText =
merma + "%";

document.getElementById(
"productosPerdidos"
).innerText =
Math.round(merma / 2);

document.getElementById(
"impactoFinanciero"
).innerText =
"$" + (merma * 250);

document.getElementById(
"barraMerma"
).style.width =
merma + "%";

/* RIESGOS */

if(merma >= 20){

    document.getElementById(
    "riesgoAlmacen"
    ).innerText =
    "Alto";

    document.getElementById(
    "estadoAlmacen"
    ).innerText =
    "Riesgo operativo";

    document.getElementById(
    "riesgoDistribucion"
    ).innerText =
    "Alto";

    document.getElementById(
    "estadoDistribucionMerma"
    ).innerText =
    "Pérdidas detectadas";

}else{

    document.getElementById(
    "riesgoAlmacen"
    ).innerText =
    "Bajo";

    document.getElementById(
    "estadoAlmacen"
    ).innerText =
    "Estable";

    document.getElementById(
    "riesgoDistribucion"
    ).innerText =
    "Bajo";

    document.getElementById(
    "estadoDistribucionMerma"
    ).innerText =
    "Normal";

}

if(eficiencia < 50){

    document.getElementById(
    "textoIndicador"
    ).innerText =
    "Operación crítica detectada";

}else{

    document.getElementById(
    "textoIndicador"
    ).innerText =
    "Operación estable y eficiente";

}

    alert("Datos actualizados correctamente");

}

function reporte(){

    const { jsPDF } = window.jspdf;

    const doc = new jsPDF();

    doc.setFont("helvetica");

    doc.setFontSize(22);

    doc.text("Reporte Operativo",20,20);

    doc.setFontSize(14);

    doc.text("TimeFlow Retail",20,30);

    doc.line(20,35,190,35);

    doc.text(
    "Fecha: " +
    new Date().toLocaleDateString(),
    20,
    50
    );

    doc.text(
    "Hora: " +
    new Date().toLocaleTimeString(),
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

function mostrarSeccion(id, boton){

    let secciones =
    document.querySelectorAll(".section");

    secciones.forEach(function(sec){

        sec.style.display = "none";

    });

    document.getElementById(id).style.display =
    "block";

    let botones =
    document.querySelectorAll(".menu-btn");

    botones.forEach(function(btn){

        btn.classList.remove("active");

    });

    boton.classList.add("active");

}

function agregarProducto(){

    let producto =
    document.getElementById("productoNuevo").value;

    let stock =
    document.getElementById("stockNuevo").value;

    let picking =
    document.getElementById("pickingNuevo").value;

    let estado = "Disponible";

    if(stock < 30){

        estado =
        "<span style='color:red;'>Bajo stock</span>";

    }

    let tabla =
    document.getElementById("tablaInventario");

    let nuevaFila =
    document.createElement("tr");

    nuevaFila.innerHTML =
    "<td>" + producto + "</td>" +
    "<td>" + stock + "</td>" +
    "<td>" + picking + "</td>" +
    "<td>" + estado + "</td>";

    tabla.appendChild(nuevaFila);

    let total =
    document.querySelectorAll(
    "#tablaInventario tr"
    ).length;

    document.getElementById(
    "totalProductos"
    ).innerText = total;

    if(stock < 30){

        let riesgo =
        parseInt(
        document.getElementById(
        "bajoStock"
        ).innerText
        );

        document.getElementById(
        "bajoStock"
        ).innerText = riesgo + 1;

    }

    let capacidad =
parseInt(
document.getElementById(
"capacidadAlmacen"
).innerText
);

capacidad += 2;

if(capacidad > 100){

    capacidad = 100;

}

document.getElementById(
"capacidadAlmacen"
).innerText =
capacidad + "%";

let productosRiesgo =
parseInt(
document.getElementById(
"bajoStock"
).innerText
);

let eficienciaActual =
parseInt(
document.getElementById(
"eficienciaActual"
).innerText
);

if(productosRiesgo >= 3){

    eficienciaActual -= 10;

}

if(eficienciaActual < 10){

    eficienciaActual = 10;

}

document.getElementById(
"eficienciaActual"
).innerText =
eficienciaActual + "%";

document.getElementById(
"barraEfectividad"
).style.width =
eficienciaActual + "%";

if(capacidad >= 90){

    document.getElementById(
    "estadoOperacion"
    ).innerText =
    "⚠ Almacén saturado";

}

let merma = 0;

/* TIEMPO ALTO */

if(tiempo > 120){

    merma += 15;

}else if(tiempo > 60){

    merma += 8;

}

/* MUCHAS CAJAS */

if(cajas > 15){

    merma += 10;

}

/* SATURACION */

if(clientes < cajas){

    merma += 12;

}

/* LIMITE */

if(merma > 100){

    merma = 100;

}

/* STOCK BAJO */

if(stock < 30){

    merma += 10;

}

/* SATURACION */

if(capacidad >= 80){

    merma += 15;

}

/* ACTUALIZAR */

document.getElementById(
"porcentajeMerma"
).innerText =
merma + "%";

document.getElementById(
"productosPerdidos"
).innerText =
Math.round(merma / 2);

document.getElementById(
"impactoFinanciero"
).innerText =
"$" + (merma * 250);

document.getElementById(
"barraMerma"
).style.width =
merma + "%";

if(merma >= 20){

    document.getElementById(
    "riesgoDistribucion"
    ).innerText =
    "Alto";

    document.getElementById(
    "estadoDistribucionMerma"
    ).innerText =
    "Pérdidas detectadas";

}else{

    document.getElementById(
    "riesgoDistribucion"
    ).innerText =
    "Bajo";

    document.getElementById(
    "estadoDistribucionMerma"
    ).innerText =
    "Normal";

}

/* ALERTAS */

if(merma >= 15){

    document.getElementById(
    "riesgoAlmacen"
    ).innerText =
    "Alto";

    document.getElementById(
    "estadoAlmacen"
    ).innerText =
    "Riesgo operativo";

}else{

    document.getElementById(
    "riesgoAlmacen"
    ).innerText =
    "Bajo";

    document.getElementById(
    "estadoAlmacen"
    ).innerText =
    "Estable";

}

    alert("Producto agregado correctamente");

}