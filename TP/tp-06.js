// Le Scenario:

// Créer un tableau initial avec 2 véhicules 
// Afficher le tableau 
// Ajouter 2 nouveaux véhicules 
// Afficher le tableau 
// Supprimer le véhicule a l’index 1
// Afficher le tableau 
// Trier le tableau par marques
// Afficher le tableau 
// Supprimer le dernier véhicule 
// Afficher le tableau 


// Les données:

// Tesla: Model y
// Renault: zoe
// Mustang: mach-e
// Polestar: Polestar 2

// -------

// Créer un tableau initial avec 2 véhicules 
let cars = [
    {
        brand: "Tesla",
        model: "Model Y"
    },
    {
        brand: "Renault",
        model: "ZOE"
    },
];

function showCars(items) 
{
    for (const car of items)
    {
        console.log( `${car.brand}: ${car.model}` );
    }
    console.log("---------");
}

// Afficher le tableau 
showCars(cars);

// Ajouter 2 nouveaux véhicules 
cars.push({
    brand: "Mustang",
    model: "Mach-e"
});
cars.push({
    brand: "Polestar",
    model: "Polestar 2"
});

// Afficher le tableau 
showCars(cars);

// Supprimer le véhicule a l’index 1
cars.splice(1,1);

// Afficher le tableau 
showCars(cars);

// Trier le tableau par marques
cars.sort((a, b) => {
    let fa = a.brand.toLowerCase(),
        fb = b.brand.toLowerCase();

    if (fa < fb) {
        return -1;
    }
    if (fa > fb) {
        return 1;
    }

    return 0;
});

showCars(cars);

// Supprimer le dernier véhicule 
cars.pop();

// Afficher le tableau 
showCars(cars);
