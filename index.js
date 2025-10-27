// Variáveis para armazenar nomes e XP dos heróis
let nomeHerois = ["Homem de Ferro", "Capitão América", "Thor", "Hulk", "Viúva Negra", "Gavião Arqueiro"];
let xpHerois = ["1000", "2500", "6000", "8000", "9500", "11000"];
let rankHerois = ["Ferro", "Bronze", "Prata", "Ouro", "Platina", "Ascendente", "Imortal", "Radiante"];

// Adicionando nomes e XP dos heróis
if (xpHerois < 1000){
    console.log("Ferro");
} else if (xpHerois > 1000 && xpHerois <= 2000){
    console.log("Bronze");
} else if (xpHerois > 2000 && xpHerois <= 5000){
    console.log("Prata");
} else if (xpHerois > 5000 && xpHerois <= 7000){
    console.log("ouro");
} else if (xpHerois > 7000 && xpHerois <= 8000){
    console.log("Platina");
} else if (xpHerois > 8000 && xpHerois <= 9000){
    console.log("Ascendente");
} else if (xpHerois > 9000 && xpHerois <= 10000){
    console.log("Imortal");
} else {
    console.log("Radiante");
}

// Loop para exibir os Nomes, XP e nível dos heróis
for (let i = 0; i < nomeHerois.length; i++) {
    console.log("O Herói de nome " + nomeHerois[i] + " tem XP de " + xpHerois[i] + " e está no rank " + rankHerois[i] + ".");
}

// Saída dos nomes e XP dos heróis
console.log("O Herói de nome ${nomeHerois} tem XP de ${xpHerois} e está no rank ${rankHerois}.");