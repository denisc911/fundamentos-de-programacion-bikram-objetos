Portatil.modelo='P345'







// 13.- Crea un objeto de nombre Noticia que tenga las propiedades: titular, cuerpo
const Noticia = {   
    titular:'', 
    cuerpo:''
    }

// 14.- Crea un objeto de nombre Persona que tenga las propiedades: nombre, apellidos, edad
const Persona = {
    nombre:'',
    apellidos:'',
    edad:''
}

// 15.- Crea un objeto de nombre Avion que tenga las propiedades: numPasajeros, función despegar (imprime por consola 'despegando'), función volar (imprime por consola llegando al destino), función aterrizar (imprime por consola 'aterrizando'
const Avion = {
    numPasajeros: 100,
    despegar: function() {
        console.log('Despegando');
    },
    volar: function() {
        console.log('Llegando al destino');
    },
    aterrizar: function() {
        console.log('Aterrizando');
    }
};

// 16.- Crea un objeto de nombre Paquete que tenga las propiedades: array contenido con todos los objetos que contenga el paquete
const Paquete = {
    contenido:[],
}

// 17.- Crea un objeto de nombre Pais que tenga las propiedades: numHabitantes, continente, gentilicio
const Pais = {
    numHabitantes:1000,
    continente:'americano',
    gentilicio:'oriental',
}
// Lectura de propiedades

// 18.- Dado un objeto de nombre O_Error obtén el valor de la propiedad codigo guardándolo en la variable codError
let codError = O_Error.codigo;
// 19.- Dado un objeto de nombre Grupo obtén el valor de la propiedad array integrantes guardándolo en la variable integrantes
let integrantes = Grupo.integrantes;
// 20.- Dado un objeto de nombre Impresora obtén el valor de la propiedad objeto tinta{rojo, verde, azul} guardándolo en la variable nivelesTinta
let nivelesTinta = Impresora.tinta;
// 21.- Dado un objeto de nombre Pantalla obtén el valor de la propiedad array bidimensional pixeles guardándolo en la variable pixeles
let pixeles = Pantalla.pixeles;
// 22.- Dado un objeto de nombre Movil obtén el valor de la propiedad especificaciones con ["especificaciones"] guardándolo en la variable especificaciones
let especificaciones = Movil.especificaciones;
// Modificación de propiedades

// 23.- Dado un objeto de nombre Grupo modifica el valor de la propiedad numIntegrantes por el valor 5
Grupo.numIntegrantes= 5;
// 24.- Dado un objeto de nombre Pantalla modifica el valor de la propiedad dimensiones por el valor 1920x1080
Pantalla.pixeles='1920x1080';
// 25.- Dado un objeto de nombre Led modifica el valor de la propiedad encendido por el valor false si vale true y true si vale false
Led = {
    if(this.encendido=== false) {
        this.encendido = true,
    }this.encendido = false
}
// 26.- Dado un objeto de nombre Movil modifica el valor de la propiedad temperatura por el valor 20º
