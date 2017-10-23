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

// Variable jQuery para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var $colorPersonalizado = $('#color-personalizado');

$colorPersonalizado.change(function() {
  // Se guarda el color de la rueda en colorActual
  var colorActual = $colorPersonalizado.val();
  // Completar para que cambie el indicador-de-color al colorActual

});


//Tomá elementos del DOM con jQuery
//guardar a los elementos paleta y grilla-pixeles en dos variables

var $paleta = $('#paleta');
var $grillaPixeles = $('#grilla-pixeles');

//GENERAR LA PALETA DE COLORES EN PANTALLAener

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
  };

/*var $nombreColores = $('nombreColores');
function (){
  $nombreColores.each(function(){
    var $nuevoDiv = $(this).$('<div />',{"class":'color-paleta'});
    $paleta.append($nuevoDiv);
    $nuevoDiv.css('background-color',"$nombreColores[$this]");
  });
}*/
crearPaletaColores();



//CREAR GRILLA DE PIXELES
//pensar  cada pixel como un <div> y agregarlo a la grilla-de-pixeles .
//Para que funcione con los recursos descargables, el tamaño de la grilla deberá
//ser de 1749 pixeles.


function crearGrillaPixeles() {
  for(var i=0; i<1749; i++){
    var $nuevoDiv = $('<div />');
    $grillaPixeles.append($nuevoDiv);
  }
};

crearGrillaPixeles();
