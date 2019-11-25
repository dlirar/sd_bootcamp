const jaime = {
	nombre : 'Jaime Cervantes Velasco',
	edad: 32,
	hablar: function(){
		return 'Agile codigo limpio, principios';
	},
	hijos: [
		{
			nombre: 'Jaime',
			edad: 3,
			hablar: function(){
				return 'papa';
			}
		},
		{
			nombre: 'Pedro',
			edad: 5,
			hablar: function(){
				return 'mama';
			}
		}
	]
};

document
.body
.querySelector("#resultado")
.append(JSON.stringify(jaime));