const parcelle = [
    { id: "P01", humidite: 25 },
    { id: "P02", humidite: 65 },
    { id: "P03", humidite: 35 },
    { id: "P04", humidite: 85 },
    { id: "P05", humidite: 30 }
];
// filter pour selectionner les parcelles avec humidité < 40
const resultat = parcelle.filter((parcelle) => {
    return parcelle.humidite < 40;
});

//map pour recupére certain élément de l'object
function etatIrrigation(humidite) {
    if (humidite < 40) {
        return "ARROSER";
    } else if (humidite <= 70) {
        return "NORMAL";
    } else {
        return "DRAINER";
    }
}
const identifiant = parcelle.map((parcelle) => {
    return {
        id: parcelle.id,
        etat: etatIrrigation(parcelle.humidite)
    }
});


//reduce pour calculer la somme de l'humidité et la moyenne
const total = parcelle.reduce((acc, parcelle) => {
    return acc + parcelle.humidite;
}, 0);
const moyenne = total / parcelle.length;


console.log(resultat)
console.log(identifiant);
console.log("Somme de l'humidité :", total);
console.log("Humidité moyenne :", moyenne);