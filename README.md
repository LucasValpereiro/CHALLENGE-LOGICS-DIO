# 🎮 Classificador de Nível de Herói

[![GitHub](https://img.shields.io/badge/GitHub-LucasValpereiro-181717?style=flat-square&logo=github)](https://github.com/LucasValpereiro)
[![DIO](https://img.shields.io/badge/DIO-Challenge-orange?style=flat-square)](https://www.dio.me/)

> Projeto desenvolvido como parte do desafio de lógica de programação da **Digital Innovation One (DIO)**.

## 📋 Sobre o Projeto

Este projeto implementa um sistema de classificação de heróis baseado em sua quantidade de experiência (XP). O algoritmo recebe o nome do herói e sua experiência acumulada, retornando seu nível correspondente de acordo com critérios pré-estabelecidos.

## 🎯 Objetivo

Aplicar conceitos fundamentais de lógica de programação para criar um classificador que determina o nível de um herói com base em sua experiência:

- **Ferro**: XP < 1.000
- **Bronze**: XP entre 1.001 - 2.000
- **Prata**: XP entre 2.001 - 5.000
- **Ouro**: XP entre 5.001 - 7.000
- **Platina**: XP entre 7.001 - 8.000
- **Ascendente**: XP entre 8.001 - 9.000
- **Imortal**: XP entre 9.001 - 10.000
- **Radiante**: XP ≥ 10.001

## 🛠️ Tecnologias Utilizadas

- JavaScript

## 💡 Conceitos Aplicados

- ✅ Variáveis
- ✅ Operadores
- ✅ Estruturas de decisão (if/else)
- ✅ Laços de repetição
- ✅ Funções

## 🚀 Como Executar

1. Clone este repositório:
```bash
git clone https://github.com/LucasValpereiro/CHALLENGE-LOGICS-DIO.git
```

2. Navegue até o diretório do projeto:
```bash
cd CHALLENGE-LOGICS-DIO
```

3. Execute o arquivo JavaScript:
```bash
node index.js
```

## 📤 Saída Esperada

O programa exibe uma mensagem no seguinte formato:

```
O Herói de nome {nome} está no nível de {nivel}
```

**Exemplo:**
```
O Herói de nome Thor está no nível de Radiante
```

## 📝 Estrutura do Código

```javascript
// Exemplo simplificado da estrutura
let nomeHeroi = "Thor";
let xpHeroi = 15000;
let nivel;

// Estrutura de decisão para classificar o nível
if (xpHeroi < 1000) {
    nivel = "Ferro";
} else if (xpHeroi <= 2000) {
    nivel = "Bronze";
} // ... demais condições

// Saída
console.log(`O Herói de nome ${nomeHeroi} está no nível de ${nivel}`);
```

## 🎓 Aprendizados

Este desafio permitiu consolidar conhecimentos essenciais de programação:
- Tomada de decisões com estruturas condicionais
- Manipulação de variáveis e tipos de dados
- Lógica de comparação e operadores relacionais
- Boas práticas de código limpo

## 👨‍💻 Autor

Desenvolvido por **Lucas Valpereiro** como parte do bootcamp da DIO.

<img width="1900" height="863" alt="image" src="https://github.com/user-attachments/assets/2eda1896-6577-4351-a16b-6cfd4ebb4224" />


[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?style=flat-square&logo=linkedin)](https://linkedin.com/in/seu-perfil)
[![GitHub](https://img.shields.io/badge/GitHub-Follow-181717?style=flat-square&logo=github)](https://github.com/LucasValpereiro)

## 📄 Licença

Este projeto está sob a licença MIT. Sinta-se livre para usar, modificar e distribuir como desejar.

---

⭐ Desenvolvido com dedicação durante o bootcamp da [Digital Innovation One](https://www.dio.me/)
