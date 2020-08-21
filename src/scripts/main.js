import {createPlan} from "./plan.js"
import {createAsparagus} from "./seeds/asparagus.js"
import {createSunflower} from "./seeds/sunflower.js"
import {createCorn} from "./seeds/corn.js"
import {createPotato} from "./seeds/potato.js"
import {createSoybeans} from "./seeds/soybean.js"
import {createWheat} from "./seeds/wheat.js"
import {addPlant} from "./field.js"
import {returnedPlants} from "./field.js"

 
console.log("Welcome to the main module")
//creating constants to store/invoke imported seed scripts//
const yearlyPlan = createPlan()
const plantedAsparagus = createAsparagus()
const plantedSunflower = createSunflower()
const plantedCorn = createCorn()
const plantedPotato = createPotato()
const plantedSoybeans = createSoybeans()
const plantedWheat = createWheat()

//adding all plant objects from seeds scripts, adds to totalPlants array
addPlant(plantedCorn) 
addPlant(plantedAsparagus)
addPlant(plantedSunflower)
addPlant(plantedPotato)
addPlant(plantedSoybeans)
addPlant(plantedWheat)

//defining returned plants after all have been added
const plantedPlants = returnedPlants()

//console logs to ensure that everything is being returned
console.log(plantedAsparagus)
console.log(plantedSunflower)
console.log(plantedCorn)
console.log(plantedPotato)
console.log(plantedSoybeans)
console.log(plantedWheat)

console.log("THIS IS WHERE FIELD.JS STARTS")
console.log(plantedPlants)



