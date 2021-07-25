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
      