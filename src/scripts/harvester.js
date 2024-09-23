export const harvestPlants= (plantsArray) => {
    let harvestedPlants = [];

    for ( const plant of fieldArray) {
        let seedOutput = 0;
        if (plant.type === "Corn") {
            seedOutput = plant.output / 2
        } else {
            seedOutput = plant.output
        }

        for (let i = 0; i < seedOutput; i++) {
            harvestedPlants.push ({
                type: plant.type,
                height: plant.height,
                output: plant.output
            });
        }
    }

    return harvestedPlants;

}
