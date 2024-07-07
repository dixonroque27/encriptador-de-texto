function encriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let lupa = document.getElementById("lupa");

    let textoCifrado = texto
        .replace(/e/gi, "kunda")
        .replace(/i/gi, "sagat")
        .replace(/a/gi, "astratta")
        .replace(/o/gi, "canda")
        .replace(/u/gi, "numeiagut");

    if (texto.length != 0) {
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "Texto encriptado con éxito";
        parrafo.textContent = "";
        lupa.src = "./img/encriptado.png";
    } else {
        lupa.src = "./img/caj.png";
        tituloMensaje.textContent = "Ningún mensaje encontrado";
        parrafo.textContent = "Introduce el texto a encriptar o desencriptar";
        alert("Primero debes ingresar algún texto");
    }
}

function desencriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let lupa = document.getElementById("lupa");

    let textoCifrado = texto
        .replace(/kunda/gi, "e")
        .replace(/sagat/gi, "i")
        .replace(/astratta/gi, "a")
        .replace(/canda/gi, "o")
        .replace(/numeiagut/gi, "u");

    if (texto.length != 0) {
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "Texto desencriptado con éxito";
        parrafo.textContent = "";
        lupa.src = "./img/desen.png";
    } else {
        lupa.src = "./img/caj.png";
        tituloMensaje.textContent = "Ningún mensaje encontrado";
        parrafo.textContent = "Introduce el texto a encriptar o desencriptar";
        alert("Primero debes ingresar algún texto");
    }
}
