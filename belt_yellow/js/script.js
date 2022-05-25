/* Entrega un mensaje al presionar el boton "Donwload" */
function Download() {
    alert("Ya está disponible la versión 5.0 de Bootstrap ")
}

/* Cambiando texto del elemento */
function DownloadBtn(element) {
    if(element.innerText == "Download") {
        element.innerText = "Downloading..";
    } else {
        element.innerText = "Download";
    }
}

/* Cambian un atriobudo del elemento */
function GetStartedGo(element) {
    element.style.backgroundColor = "grey";
}

/* Removiendo un elemento, el elemento del menu principao "v4.3"*/
function Remove(element){
    element.remove();
}

/* Mostrando mensaje al pasar mouse por el elemento "Segment" */
function Info(element) {
    alert("Descubre nuevas novedades de Segment.");
}