const parcelle = [
    { id: "P01", humidite: 25 },
    { id: "P02", humidite: 65 },
    { id: "P03", humidite: 35 },
    { id: "P04", humidite: 85 },
    { id: "P05", humidite: 45 }
];
const total = parcelle.reduce((accumulateur, parcelle) => {
    return accumulateur + parcelle.humidite;
}, 0);
const moyenne = total / parcelle.length;
console.log("Humidité moyenne :", moyenne);
