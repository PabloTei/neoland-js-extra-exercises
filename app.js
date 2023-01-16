// Bloque: Padawan
// 1.1 Usa un bucle y dos condiciones para imprimir por consola el nombre de los usuarios que sean menor de edad precedidos del texto "Usuarios menores de edad:" y otro que imprima a los usuarios mayores de edad, precedido del texto "Usuarios mayores de edad:".

const users = [
    { name: "Tony", years: 43 },
    { name: "Peter", years: 18 },
    { name: "Natasha", years: 14 },
    { name: "Bruce", years: 32 },
    { name: "Khamala", years: 16 },
  ];

  let usersMayoresEdad = [];
  let usersMenoresEdad = [];

  for (const user of users) {
    if (user.years < 18) {
        usersMenoresEdad.push(user.name)
        //console.log(`Usuarios menores de edad: ${user.name}`)
    } else {
        usersMayoresEdad.push(user.name)
        //console.log(`Usuarios mayores de edad: ${user.name}`)
    }
  }
  console.log(`Usuarios menores de edad: ${usersMayoresEdad}. Usuarios mayores de edad: ${usersMenoresEdad}`);


  // 1.2 Usa un for para remplazar todas las comidas que no sean veganas con las frutas del array de frutas. Recuerda no usar frutas duplicadas. Finalmente, imprime el array resultante.

const fruits = ["Strawberry", "Banana", "Orange", "Apple"];

const foodSchedule = [
  { name: "Heura", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];

let foodIsVegan = [];

for (const food of foodSchedule) {
    if (food.isVegan === true) {
        foodIsVegan.push(food);
    } else {

    }
}

let foodIsVeganMoreFruits = [...foodIsVegan, ...fruits]
console.log(foodIsVeganMoreFruits)


// 1.3 Usa un bucle para crear 3 arrays de peliculas filtrados por categorias. Pelicula pequeña, menos de 100 minutos, pelicula mediana, mas de 100 minutos y menos de 200 y pelicula grande, mas de 200 minutos. Imprime cada array en por consola.

const movies = [
    { name: "Titan A.E.", durationInMinutes: 130 },
    { name: "Nightmare before Christmas", durationInMinutes: 225 },
    { name: "Inception", durationInMinutes: 165 },
    { name: "The Lord of the Rings", durationInMinutes: 967 },
    { name: "Star Wars: A New Hope", durationInMinutes: 214 },
    { name: "Terminator", durationInMinutes: 140 },
  ];

  let peliculasPequeñas = [];
  let peliculasMedianas = [];
  let peliculasGrandes = [];

  for (const movie of movies) {
        if(movie.durationInMinutes < 100) {
            peliculasPequeñas.push(movie);
        } else if (movie.durationInMinutes > 100 && movie.durationInMinutes < 200) {
            peliculasMedianas.push(movie);
        } else {
            peliculasGrandes.push(movie);
        }
    } 
    console.log(peliculasPequeñas);
    console.log(peliculasMedianas);
    console.log(peliculasGrandes);


    // 1.4 Usa un bucle para sumar el total de las ventas (sellCount) de todos los productos.

const products = [
    { name: "Funko Dr. Strange", sellCount: 10 },
    { name: "Mochila de protones: Ghostbusters", sellCount: 302 },
    { name: "Sable laser FX", sellCount: 23 },
    { name: "Varita de Voldemort", sellCount: 6 },
    ];

let totalSellCount = 0;

for (const product of products) {
    totalSellCount += product.sellCount
}
console.log(`El total de ventas es de: ${totalSellCount} euros.` );


// 1.5 Usa un bucle para sumar el total de las ventas (sellCount) de todos los productos y mostrar por consola la media de ventas.

const products1 = [
    { name: "Funko Dr. Strange", sellCount: 10 },
    { name: "Mochila de protones: Ghostbusters", sellCount: 302 },
    { name: "Sable laser FX", sellCount: 23 },
    { name: "Varita de Voldemort", sellCount: 6 },
];

let totalSellCount1 = 0;

for (const product of products) {
    totalSellCount1 += product.sellCount
}
console.log(`La media de las ventas es de: ${totalSellCount1 / products1.length} euros.` );

// 1.6 Usa un bucle para recorrer el array de peliculas (products) y añade al array goodProducts los que tengan más de 20 ventas (sellCount) y al array badProducts los que tengan menos.

const goodProducts = [];
const badProducts = [];
const products2 = [
  { name: "Funko Dr. Strange", sellCount: 10 },
  { name: "Mochila de protones: Ghostbusters", sellCount: 302 },
  { name: "Sable laser FX", sellCount: 23 },
  { name: "Varita de Voldemort", sellCount: 6 },
];

for (const product of products2) {
    if (product.sellCount > 20) {
        goodProducts.push(product);
    } else {
        badProducts.push(product);
    }
}
console.log(goodProducts);
console.log(badProducts)

