const totalPlants = []

export const addPlant = (seedObject) => {
    totalPlants.push(seedObject)
}

export const returnedPlants = () => {
    return totalPlants
}