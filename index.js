let nomeHerois = [];
let xpHerois = [];

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
} else if(xpHerois > 8000 && xpHerois <= 9000){
    console.log("Ascendente");
} else if(xpHerois > 9000 && xpHerois <= 10000){
    console.log("Imortal");
} else (xpHerois >= 10000){
    console.log("Radiante");
}