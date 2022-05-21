
con = 0;
con2 = 0;

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