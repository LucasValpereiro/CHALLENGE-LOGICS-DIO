// Variáveis para armazenar nomes e XP dos heróis
let nomeHerois = [
  "Homem de Ferro",
  "Capitão América",
  "Thor",
  "Hulk",
  "Viúva Negra",
  "Gavião Arqueiro",
  "Pantera Negra",
  "Doutor Estranho",
];
let xpHerois = [1000, 1500, 2500, 6000, 7500, 9000, 10000, 12000];

// Loop para exibir os Nomes, XP e Níveis dos heróis
for (let i = 0; i < nomeHerois.length; i++) {
  let rankHerois;

  // Adicionando nomes e XP dos heróis
  if (xpHerois[i] <= 1000) {
    rankHerois = "Ferro";
  } else if (xpHerois[i] >= 1001 && xpHerois[i] <= 2000) {
    rankHerois = "Bronze";
  } else if (xpHerois[i] >= 2001 && xpHerois[i] <= 5000) {
    rankHerois = "Prata";
  } else if (xpHerois[i] >= 5001 && xpHerois[i] <= 7000) {
    rankHerois = "Ouro";
  } else if (xpHerois[i] >= 7001 && xpHerois[i] <= 8000) {
    rankHerois = "Platina";
  } else if (xpHerois[i] >= 8001 && xpHerois[i] <= 9000) {
    rankHerois = "Ascendente";
  } else if (xpHerois[i] >= 9001 && xpHerois[i] <= 10000) {
    rankHerois = "Imortal";
  } else {
    rankHerois = "Radiante";
  }

  console.log(
    `O herói ${nomeHerois[i]} possui ${xpHerois[i]} de XP e é do rank ${rankHerois}.`
  );
}
