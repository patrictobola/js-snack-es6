const bikes = [
    {
        name: "bike1",
        weight: 3,
    },
    {
        name: "bike2",
        weight: 1,
    },
    {
        name: "bike3",
        weight: 5,
    },
    {
        name: "bike4",
        weight: 7,
    },
    {
        name: "bike5",
        weight: 2,
    },
    {
        name: "bike6",
        weight: 15,
    }
]
console.log(bikes)

// Senza destrutturazione restituisco un oggetto con all'interno i valori della bici e del peso
const lessWeightBike = bikes.reduce((accumulator, element) => accumulator.weight < element.weight ? accumulator : element, 0);
console.log(lessWeightBike)

// Con la destrutturazione restituisco in pagina direttamente il valore della bici e del peso in due 'variabili' diverse 
const {name, weight} = bikes.reduce((accumulator, element) => accumulator.weight < element.weight ? accumulator : element, 0);
console.log(`La ${name} è quella più leggera, pesa solo ${weight}kg`)