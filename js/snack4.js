

const teams = [
    {
        name: "squadra1",
        score: 0,
        fouledAgainst: 0,
    },
    {
        name: "squadra2",
        score: 0,
        fouledAgainst: 0,
    },
    {
        name: "squadra3",
        score: 0,
        fouledAgainst: 0,
    },
    {
        name: "squadra4",
        score: 0,
        fouledAgainst: 0,
    },
    {
        name: "squadra5",
        score: 0,
        fouledAgainst: 0,
    },
    {
        name: "squadra6",
        score: 0,
        fouledAgainst: 0,
    }
]


// Creo una variabile dove generare numeri casuali da 1 a max 
const randomNumber = (max) => Math.floor(Math.random() * max) + 1;

console.log("Originale")
console.log("---------------")
console.log(teams)
// Genero e aggiungo nell'array un numero casuale di goal e falli subiti per ogni squadra 
for (let team of teams){
    team.score = randomNumber(50);
    team.fouledAgainst = randomNumber(10)
}

const updatedTeams = teams.map(({name, fouledAgainst}) => (
    {
        name,
        fouledAgainst
    }
));
// const updatedTeams = teams
console.log("---------------")
console.log("Aggiornato")
console.log(updatedTeams)