const parcelle = [
    {id:"P01", humidite : 25},
    {id:"P02", humidite : 65},
    {id:"P03", humidite : 35},
    {id:"P04", humidite : 85},
    {id:"P05", humidite : 45}
];
const resultat = parcelle.filter((parcelle) => {
    return parcelle.humidite < 50;
});
console.log(resultat)  