
con = 0;
con2 = 0;
con3 = 0;
con4 = 0;

function likes(element) {
    con = con + 1;
    element.innerText = con + " likes";
    alert("Ninja was liked");
}

function likes2(element) {
    con2 = con2 + 1;
    element.innerText = con2 + " likes";
    alert("Ninja was liked");
}

function likes3(element) {
    con3 = con3 + 1;
    var contadorlikes = document.querySelector("#cuenta");
    contadorlikes.innerText = con3 + " like(s)";
}

function likes4(element) {
    con2 = con2 + 1;
    var contadorlikes = document.querySelector("#cuenta2");
    contadorlikes.innerText = con2 + " like(s)";
}

function likes5(element) {
    con3 = con3 + 1;
    var contadorlikes = document.querySelector("#cuenta3");
    contadorlikes.innerText = con3 + " like(s)";
}

function likes6(element) {
    con4 = con4 + 1;
    var contadorlikes = document.querySelector("#cuenta4");
    contadorlikes.innerText = con4 + " like(s)";
}

function LoginLogout(element) {
    if(element.innerText == "Login") {
        element.innerText = "Logout";
    } else {
        element.innerText = "Login";
    }
}

function RemoveDefinition(element){
    element.remove();
}