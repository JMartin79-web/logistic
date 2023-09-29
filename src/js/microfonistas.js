
const microfonistasArray =  [
    "Augusto Villalon",
    "Alberto Robledo",
    "Alejandro Bosch",
    "Cristian Alasino",
    "Damian Veras",
    "Ezequiel Aguirre",
    "Ezequiel Luna",
    "Gustavo Pellegrini",
    "Horacio Gutierrez",
    "John Rodriguez",
    "Jorge Quinteros",
    "Jorge De Angelis",
    "Mario Rivas",
    "Marcelo Aguilera",
    "Martin Aguirre",
    "Martin Bosch",
    "Martin Villalon",
    "Nicolás Díaz",
    "Gabriel D Oliveira",
    "Pablo Curiale",
    "Raul Aguirre",
    "Ricardo Gimenez",
    "Rolando Rothfuss",
    "Sergio Varela"
]

console.log(microfonistasArray)

let options = ""
microfonistasArray.forEach( (microfonista) =>{
    let microfonistaNoSpace= (microfonista.split(' ').join(''))
    options += `<option value=${microfonistaNoSpace}> ${microfonista} </option>`
})
let m3p1 = document.getElementById("datalist-mic3-p1")
let m3p2 = document.getElementById("datalist-mic3-p2")
let m4p1 = document.getElementById("datalist-mic4-p1")
let m4p2 = document.getElementById("datalist-mic4-p2")


function giveDatalist(data){
    console.log("data: ", data)

    m3p1.innerHTML = data;
    m3p2.innerHTML = data;
    m4p1.innerHTML = data;
    m4p2.innerHTML = data;
    
}

giveDatalist(options)