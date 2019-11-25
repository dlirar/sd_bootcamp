const persona {
	nombre: "Jaime",
	edad: 32
}

function Person(nombre){
	this.nombre = nombre;
}

const persona2 = new Person("Daniel");

const laura = {
	nombre: "Laura",
	apellido: "Almaraz"
}

laura.prototype = persona;

function heredar(e){
	const F = function(){};
	F.prototype = e;
	return new F();
}

class Teacher extends Person {
    constructor(name, age, gender, interest, classType, parkingLot) {
        //Propiedades de Person
        super(name, age, gender, interest);
        //Propiedades propias de Teacher
        this.classType = classType;
        this.parkingLot = parkingLot;
    }
}

function Teacher(name, age, gender, interest, classType, parkingLot){
	//Propiedades de Person
	super(name, age, gender, interest);
	//Propiedades propias de Teacher
	this.classType = classType;
	this.parkingLot = parkingLot;	
}