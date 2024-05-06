function colorAleatorio() {
    var colores = ['green', 'blue', 'red'];
    var colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    document.getElementById('color').style.color = colorAleatorio;
}
