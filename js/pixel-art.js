//Esta variable contiene los colores de la paleta
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



//VARIABLES A UTILIZAR MAS ADELANTE
var $paleta = $('#paleta');
var $grillaPixeles = $('#grilla-pixeles');
var $indicadorDeColor = $('#indicador-de-color');
var $indicadorDeColorMensaje = $('#indicador-de-color-mensaje');
//Variable 'color-personalizado' = color que se elige con la "rueda de color"
var $colorPersonalizado = $('#color-personalizado');
var mouseApretado = false;


//GENERAR LA PALETA DE COLORES EN PANTALLA
/*//La función recorre la lista de colores y por c/u crea un Div al que le asigna
un color y la clase.*/

/*Fue clave usar la sentencia: for (variable of iterable) {statement}*/

function crearPaletaColores() {
  for (var color of nombreColores) {
    var $nuevoDiv = $('<div />',{"class":'color-paleta'});
    $paleta.append($nuevoDiv);
    $nuevoDiv.css('background-color',color);
  }
}


//CREAR GRILLA DE PIXELES
//El tamaño de la grilla debe ser de 1749 pixeles.

function crearGrillaPixeles() {
  for(var i=0; i<1749; i++){
    var $nuevoDiv = $('<div />');
    $grillaPixeles.append($nuevoDiv);
  }
}


//DEFINIR LA SELECCION DE UN COLOR EN EL CUADRO INDICADOR
//Al hacer clic en algún color, el indicador-de-color cambia y refleja la selección.

function cambiarIndicadorDeColor(color){
  $indicadorDeColor.css('background-color', color);
  $indicadorDeColorMensaje.text(`Pincel: ${color}`);
}

function tomarColorDeLaPaleta(event) {
  colorActual = $(event.target).css('background-color');
  cambiarIndicadorDeColor(colorActual);
}


//Funcion change: el evento de cambio se produce cuando el valor de un elemento se ha cambiado
$colorPersonalizado.change(function() {
  //Se guarda el color de la rueda en colorActual
  //val () devuelve el atributo valor del elemento
  colorActual = $colorPersonalizado.val();
  cambiarIndicadorDeColor(colorActual);
});


//PROGRAMAR EL PINTADO DE PIXELES DE LA GRILLA
//El usuario puede pintar un píxel al hacer clic en un cuadrado de la grilla.

function pintarPixel(event){
  colorActual = $indicadorDeColor.css("background-color");
  $(event.target).css('background-color', colorActual);
}


//DETECTAR SI EL BOTÓN DEL MOUSE ESTÁ APRETADO O NO
//Se crea una variable que indica si el botón del mouse está o no apretado.
//Su valor cambia cada vez que se aprieta el mouse y cada vez que se suelta.

function alApretarMouse(){
  mouseApretado = true;
}

function alSoltarMouse(){
  mouseApretado = false;
}


//PINTAR EN MOVIMIENTO
//Con esta función se puede pintar con el mouse muchos pixeles a la vez
//con sólo mantenerlo apretado y moviéndolo por la grilla.

function pintarMuchosPixeles(event) {
  if (mouseApretado) {
    pintarPixel(event);
  }
}


//BOTON Borrar Todo
//Lleva asociado una función que con una animación hace que  los píxeles pintados
//se vayan difuminando de a poco y queden en color blanco.

function borrarPixeles() {
  var $pixeles = $('#grilla-pixeles div');
  $pixeles.each(function(){
    $(this).animate({'background-color':'#FFFFFF'},1000);
  });
}


//CARGAR LOS SUPERHEROES
//Al hacer clic en una de las imágenes de superhéroes, se carga el superheroe
//correspondiente en la grilla.

$('#batman').click(function(){
  cargarSuperheroe(batman);
});
$('#wonder').click(function(){
  cargarSuperheroe(wonder);
});
$('#flash').click(function(){
  cargarSuperheroe(flash);
});
$('#invisible').click(function(){
  cargarSuperheroe(invisible);
});




$grillaPixeles.mousedown(alApretarMouse);
$grillaPixeles.mousemove(pintarMuchosPixeles);
$(window).mouseup(alSoltarMouse);

$paleta.click(tomarColorDeLaPaleta);
$grillaPixeles.click(pintarPixel);

crearPaletaColores();
crearGrillaPixeles();

$('#borrar').click(borrarPixeles);
$('#guardar').click(guardarPixelArt);
