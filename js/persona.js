const persona = {
	nombre: 'Jaime',
	apellidos: 'Cervantes Velasco',
	edad: 29,
	getNombre: function(){
		return `${this.nombre} ${this.apellidos}`;
	},
	hablar: function(){
		return `Hola, soy ${this.getNombre()}, tengo ${this.edad} años`;
	}
};

const animal = {
	nombre: 'Pelusa',
	edad: '4',
	mensaje: 'guau',
	getNombre: function(){
		return `${this.nombre} ${this.edad}`;
	},
	ladrar: function (){
		return `${this.mensaje}`;
	}
};

console.log(persona.hablar());
console.log(animal.ladrar());