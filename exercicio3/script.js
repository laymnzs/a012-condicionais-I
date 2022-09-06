/*let nacionalidade = prompt("Escreva aqui sua nacionalidade").toLocaleLowerCase()
const nacionalidade1 = "brasileira"
const nacionalidade2 = "argentina"
const nacionalidade3 = "uruguaia"
const nacionalidade4 = "chilena"
const nacionalidade5 = "colombiana"

if (nacionalidade === nacionalidade1) {
    console.log("A sua nacionalidade é:" + "nacionalidade1")
} else if (nacionalidade === nacionalidade2) {
    console.log("A sua nacionalidade é:" + "nacionalidade2") 
} else if (nacionalidade === nacionalidade3) {
    console.log("A sua nacionalidade é:" + "nacionalidade3")
} else if (nacionalidade === nacionalidade4) {
    console.log("A sua nacionalidade é:" + "nacionalidade4")
} else if (nacionalidade === nacionalidade5) {
    console.log("A sua nacionalidade é:" + "nacionalidade5")
} else { 
     console.log('Nacionalidade não encontrada')*/


     let nacionalidade = prompt("Qual é a sua nacionalidade?").toLocaleLowerCase()
     const nasci = nacionalidade

     if (nasci === "brasileira") {
        console.log("Sua nacionalidade é brasileira.")
     } else if (nasci === "chilena") {
        console.log("Sua nacionalidade é chilena.")
     } else if (nasci === "colombiana") {
        console.log("Sua nacionalidade é colombiana.")
     } else if (nasci === "argentina.") {
        console.log("Sua nacionalidade éargentina.")
     } else if (nasci === "uruguai") {
        console.log("Sua nacionalidade é uruguaia.")
     } else
     console.log("Nacionalidade não encontrada.")