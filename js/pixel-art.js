var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];



//CREO LAS VARIABLES A UTILIZAR MAS ADELANTE
var $paleta = $('#paleta');
var $grillaPixeles = $('#grilla-pixeles');
var $indicadorDeColor = $('#indicador-de-color');
var $indicadorDeColorMensaje = $('#indicador-de-color-mensaje');
//Elemento 'color-personalizado' = color que se elige con la "rueda de color"
var $colorPersonalizado = $('#color-personalizado');
var mouseApretado = false;


//GENERAR LA PALETA DE COLORES EN PANTALLA
//creá una función para generar la paleta de colores: tiene que recorrer
//la lista de colores, nombresDeColores, y por cada color crear un elemento div
//y asignarle un background-color: color y la clase color-paleta.
//El elemento que cree tu función deberá ser hijo del elemento paleta

//fue clave usar la sentencia: for (variable of iterable) {
//                              statement}


function crearPaletaColores() {
  for (var color of nombreColores) {
    var $nuevoDiv = $('<div />',{"class":'color-paleta'});
    $paleta.append($nuevoDiv);
    $nuevoDiv.css('background-color',color);
    }
  }

/*var $nombreColores = $('nombreColores');
function (){
  $nombreColores.each(function(){
    var $nuevoDiv = $(this).$('<div />',{"class":'color-paleta'});
    $paleta.append($nuevoDiv);
    $nuevoDiv.css('background-color',"$nombreColores[$this]");
  });
}*/


//CREAR GRILLA DE PIXELES
//pensar  cada pixel como un <div> y agregarlo a la grilla-de-pixeles .
//Para que funcione con los recursos descargables, el tamaño de la grilla deberá
//ser de 1749 pixeles.


function crearGrillaPixeles() {
  for(var i=0; i<1749; i++){
    var $nuevoDiv = $('<div />');
    $grillaPixeles.append($nuevoDiv);
  }
}





//DEFINIR LA SELECCION DE UN COLOR EN EL CUADRO INDICADOR
//Crear una función para que, al hacer clic en algún color, el indicador-decolor
//cambie y refleje la selección.
//Por ejemplo, si cliqueamos en el color violeta, el indicador-de-color deberá cambiar a
//violeta.



function cambiarIndicadorDeColor(color){
  $indicadorDeColor.css('background-color', color);
  $indicadorDeColorMensaje.text(`Pincel: ${color}`);
}

function tomarColorDeLaPaleta(event) {
  colorActual = $(event.target).css('background-color');
  cambiarIndicadorDeColor(colorActual);
}

//tomarColorDeLaPaleta();
//cambiarIndicadorDeColor(colorActual);






//Funcion change: el evento de cambio se produce cuando el valor de un elemento se ha cambiado

$colorPersonalizado.change(function() {
  // Se guarda el color de la rueda en colorActual
  //val () devuelve el atributo valor del elemento
 colorActual = $colorPersonalizado.val();
  cambiarIndicadorDeColor(colorActual);
});





//PROGRAMAR EL PINTADO DE PIXELES DE LA GRILLA
//programar la funcionalidad para que el usuario pueda pintar un píxel al hacer
//clic en un cuadrado de la grilla.



//function pintarPixel(event){
// colorActualDelIndicador = $('#indicador-de-color').css('background-color');
//  $(event.target).css('background-color', colorActualDelIndicador);
//}
function pintarPixel(event){
  colorActual = $indicadorDeColor.css("background-color");
  $(event.target).css('background-color', colorActual);
}
//pintarPixel();



//DETECTÁ SI EL BOTÓN DEL MOUSE ESTÁ APRETADO O NO
//crear una variable que nos diga si el botón del mouse está o no apretado.
//El valor de esta variable deberá cambiar cada vez que se apriete
//el mouse y cada vez que se suelte.

function alApretarMouse(){
  mouseApretado = true;
}

function alSoltarMouse(){
  mouseApretado = false;
}


/*$grillaPixeles.mousedown(function() {
  var botonMouse = true;
  console.log(botonMouse);
}
);

$grillaPixeles.mouseup(function() {
  var botonMouse = false;
  console.log(botonMouse);
}
);*/

/*function saber(){
  uno = $grillaPixeles.mousedown(function() {
    console.log(true);
  });
  dos = $grillaPixeles.mouseup(function() {
    console.log(false);
  });
  if (uno == true) {
    return true;
  }
  else {
    return false;
  }
}
saber();
var botonMouse = saber();*/


//IMPLEMENTAR LA ACCION DE PINTAR EN MOVIMIENTO
//Programar la funcionalidad para poder pintar con el mouse muchos
//pixeles a la vez con sólo mantenerlo apretado y moviéndolo por la grilla.

function pintarMuchosPixeles(event) {
  if (mouseApretado) {
    pintarPixel(event);
  }
}

/*$grillaPixeles.mousemove(pintarPixel);
function pintarPixeles(event){
  while(botonMouse==true){
  colorActual = $('#indicador-de-color').css("background-color");
  $(event.target).css('background-color', colorActual);
}
}*/

$grillaPixeles.mousedown(alApretarMouse);
$grillaPixeles.mousemove(pintarMuchosPixeles);
$(window).mouseup(alSoltarMouse);

$paleta.click(tomarColorDeLaPaleta);
$grillaPixeles.click(pintarPixel);


crearPaletaColores();
crearGrillaPixeles();
