function colorAleatorio(){
    let titulo = document.getElementById("h5");
    titulo.style.backgroundColor = "red";
}
document.getElementById("color").addEventListener("click", colorAleatorio);