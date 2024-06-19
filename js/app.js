MenuItens.style.maxHeight = "0px";

function menucelular() {
    var menuItens = document.getElementById("MenuItens");
    if (menuItens.style.maxHeight === "200px") {
        menuItens.style.maxHeight = "0px";
    } else {
        menuItens.style.maxHeight = "200px";
    }
}