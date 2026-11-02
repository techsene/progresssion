const parcelle = [
    {id:"P01", humidite : 25},
    {id:"P02", humidite : 65},
    {id:"P03", humidite : 35},
    {id:"P04", humidite : 85},
    {id:"P05", humidite : 45}
];

function etatIrrigation(humidite){
    if (humidite < 40){
        return "ARROSER";
    } else if (humidite <= 70) {
        return "NORMAL";
    } else {
        return "DRAINER";
    }
}
const resultat = parcelle.map((parcelle) =>{
    return{
        id: parcelle.id,
        etat: etatIrrigation(parcelle.humidite)

    };
});
console.log(resultat)