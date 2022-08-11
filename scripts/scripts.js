window.onload = function () {
    // Gestión de fichas de motos
    // ────────────────────────────────────────────────────────────────────
    document.getElementById("info-ficha1").addEventListener("click", muestra);
    document.getElementById("espe-ficha1").addEventListener("click", muestra);
    document.getElementById("deta-ficha1").addEventListener("click", muestra);
    // ────────────────────────────────────────────────────────────────────
    document.getElementById("info-ficha2").addEventListener("click", muestra);
    document.getElementById("espe-ficha2").addEventListener("click", muestra);
    document.getElementById("deta-ficha2").addEventListener("click", muestra);
    // ────────────────────────────────────────────────────────────────────
    document.getElementById("info-ficha3").addEventListener("click", muestra);
    document.getElementById("espe-ficha3").addEventListener("click", muestra);
    document.getElementById("deta-ficha3").addEventListener("click", muestra);
    // ────────────────────────────────────────────────────────────────────
    document.getElementById("info-ficha4").addEventListener("click", muestra);
    document.getElementById("espe-ficha4").addEventListener("click", muestra);
    document.getElementById("deta-ficha4").addEventListener("click", muestra);
    // ────────────────────────────────────────────────────────────────────
    oculta();
};

// ────────────────────────────────────────────────────────────────────
function muestra(e) {
    console.log(e.target.id);
    // capturamos el id que entra
    let entrada = e.target.id;
    //capturamos si es info, espe o deta
    seleccion = entrada.substr(0, 4);
    //capturamos el bloque al que corresponde
    bloque = entrada.substr(-1);

    // asignamos número de bloque a los valores
    let info = "informacion-ficha" + bloque;
    let espe = "especificaciones-ficha" + bloque;
    let deta = "detalles-ficha" + bloque;
    let numFoto = 4;

    console.log(info, espe, deta);
    document.getElementById(info).style.display = "none";
    document.getElementById(espe).style.display = "none";
    document.getElementById(deta).style.display = "none";

    switch (seleccion) {
        case "info":
            document.getElementById(info).style.display = "flex";
            numFoto = bloque * 3 + 1;
            break;
        case "espe":
            document.getElementById(espe).style.display = "flex";
            numFoto = bloque * 3 + 2;
            break;
        case "deta":
            document.getElementById(deta).style.display = "flex";
            numFoto = bloque * 3 + 3;
            break;
    }
    let foto = "foto-bloque" + bloque;
    let archivoFoto = "img/img" + numFoto + ".webp";
    console.log(numFoto, foto, archivoFoto);

    document.getElementById(foto).src = archivoFoto;
    eliminaClase("info-ficha" + bloque);
    eliminaClase("espe-ficha" + bloque);
    eliminaClase("deta-ficha" + bloque);
    addClase(seleccion + "-ficha" + bloque);
}

// ────────────────────────────────────────────────────────────────────
function oculta() {
    // ocultación inicial de especificaciones y detalles
    for (let i = 1; i < 5; i++) {
        document.getElementById("especificaciones-ficha" + i).style.display =
            "none";
        document.getElementById("detalles-ficha" + i).style.display = "none";
    }
}

function eliminaClase(elemento) {
    var elem = document.getElementById(elemento);
    elem.className = "btn";
}

function addClase(elemento) {
    var elem = document.getElementById(elemento);
    elem.className = "btn selected";
}
