var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");
var Intentos = 0;

CargarPartida();
ImprimirMuñeco();

function CargarPartida(){
    ImprimirTablrero();

}

fetch('https://raw.githubusercontent.com/JorgeDuenasLerin/diccionario-espanol-txt/master/0_palabras_todas.txt')
  .then(res => res.text())
  .then(content => {
    let lines = content.split(/\n/);
    lines.forEach(line => console.log(line));
  });

function ImprimirMuñeco (){

    if(Intentos == 3);

    pincel.beginPath();
    pincel.arc(165,100,40,0,Math.PI*2,true);
    pincel.stroke(); 
    
    pincel.beginPath();
    pincel.arc(150,90,5,0,Math.PI*2,true)
    pincel.stroke();

    pincel.beginPath();
    pincel.arc(180,90,5,0,Math.PI*2,true)
    pincel.stroke();

    pincel.beginPath();
    pincel.arc(165, 100, 25,0,Math.PI,false);
    pincel.stroke();

    pincel.fillRect(160,140,5,150);
    pincel.fillRect(100,160,60,5);
    pincel.fillRect(160,160,60,5);

    
    pincel.beginPath();
    pincel.arc(150,290,16,0,Math.PI,true)
    pincel.fill();
    pincel.beginPath();
    pincel.arc(175,290,16,0,Math.PI,true)
    pincel.fill();


}

function ImprimirTablrero(){

    pincel.fillRect(0,0,10,400);
    pincel.fillRect(0,0,350,10);
    pincel.fillRect(160,0,10,60);


}

