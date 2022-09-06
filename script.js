function converter(){
let valorAnoLuz = parseFloat (document.getElementById("valor").value);

let valorKm = valorAnoLuz * 9460528404879.4;


let resultado = document.getElementById("resultado");
resultado.style.background= "#524c95"
resultado.innerHTML = `${valorKm} <strong>Km</strong>`

}