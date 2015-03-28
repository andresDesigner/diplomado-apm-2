/* objetos y funciones */

var my_object = new Object();

var other_object = {};


my_object = {
	firstName: 'Andrés',
	lastName: 'Amin',
	phone: 3102167356
};


console.log(my_object.firstName);

console.log(my_object['lastName']);

var key;

for(key in my_object){
	console.log(my_object[key]);
}

//funciones

function test(){

	console.log('ejecutando una función');
}

test();

//usando función anonima

var bye_bye = function(){
	console.log('que tengan feliz semana santa');
}

bye_bye();

