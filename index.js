//push para añadir en un array algo adicional
const arrayNumero = [10, 20, 30];
arrayNumero.push(40);

console.log(arrayNumero);
//añadir, modificar o actualizar un objeto
const persona = {
  nombre: "juanito",
  apellido: "lechuga",
  edad: "10",
};
persona.edad = 24;
persona.ciudad = "san juan de los morros";

console.log(persona);

//funcion
function sumar() {
  console.log(10);
}

sumar();

//funciones flecha
const sumar2 = (num1, num2) => num1 + num2;
const resultado = sumar2(20, 30);
console.log(resultado);

const mensaje = (nombre) => "hola soy " + nombre;

const resultado2 = mensaje("triusdeil");
console.log(resultado2);

//
const suma3 = (num = 0) => {
  console.log(num + 3);
};
suma3(10);
//template string
const numero = (num1, num2) => {
  return `el numero es :  ${num1 + num2}`;
};
const resultado = numero(10, 20);

console.log(resultado);
//template string
const numero = (num1, num2) =>(
    `el numero es :  ${num1 + num2}`
    )
    const resultado = numero(10, 20);
    
    console.log(resultado);
//objetos
const mascotas = {
    nombre: "Tom",
    edad: 10,
    vivo: true,
    razas: ["peludos", "negro con blanco"]
  };
  
  mascotas.id = 1;
  mascotas.comida = ["perrarina", "agua", "carne"];
  console.log(mascotas);
  
  //Destructuring
  const mascotas = {
    nombre: "Tom",
    edad: 10,
    vivo: true,
    razas: ["peludos", "negro con blanco"]
  };
  
  const {vivo,nombre} = mascotas
  console.log(vivo, nombre)
  //objetos practica 
  //objetos
const web = {
  nombre: "bluuweb",
  links: {
    enlace: "www.bluuweb.cl"
  },
  redesSociales: {
    youtube: {
      enlace: "www.youtube.com",
      nombre: "bluuweb/youtube"
    }
  }
};
console.log(web);
console.log(web.nombre);
console.log(web.redesSociales.youtube);

const enlaceyoutube = web.redesSociales.youtube;
console.log(enlaceyoutube);
const { enlace, nombre } = web.redesSociales.youtube;
console.log(enlace, nombre);

//fetch
fetch("https://pokeapi.co/api/v2/pokemon/")
  .then((res) => res.json())
  .then((data) => {
    console.log(data.results);
    data.results.forEach((element) => {
      console.log(element.name);
    });
  })
  .catch((error) => console.log(error));
////async
const obtenerPokemones = async () => {
  try {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon/");
    const data = await res.json();
    console.log(data.results);
    data.results.forEach((element) => {
      console.log(element.name);
    });
  } catch (error) {
    console.log(error);
  }
};
obtenerPokemones();

//Map
const obtenerPokemones = async () => {
  try {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon/");
    const data = await res.json();
    console.log(data.results);
    const arrayNombre = data.results.map((poke) => poke.name);
    console.log(arrayNombre)
  } catch (error) {
    console.log(error);
  }
};
obtenerPokemones();
//filter
const obtenerPokemones = async () => {
  try {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon/");
    const data = await res.json();
    console.log(data.results);
    const arrayNombre = data.results.filter(poke => poke.name !== "bulbasur");
    console.log(arrayNombre);
  } catch (error) {
    console.log(error);
  }
};
obtenerPokemones();
