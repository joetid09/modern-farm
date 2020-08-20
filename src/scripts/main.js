import {createPlan} from "./plan.js"
import {createAsparagus} from "./seeds/asparagus.js"
import {createSunflower} from "./seeds/sunflower.js"
import {createCorn} from "./seeds/corn.js"
import {createPotato} from "./seeds/potato.js"
import {createSoybeans} from "./seeds/soybean.js"
import {createWheat} from "./seeds/wheat.js"


console.log("Welcome to the main module")

const yearlyPlan = createPlan()
const plantedAsparagus = createAsparagus()
const plantedSunflower = createSunflower()
const plantedCorn = createCorn()
const plantedPotato = createPotato()
const plantedSoybeans = createSoybeans()
const plantedWheat = createWheat()

createPlan()
createAsparagus()
createSunflower()
createCorn()
createPotato()
createSoybeans()
createWheat()

console.log(plantedAsparagus)
console.log(plantedSunflower)
console.log(plantedCorn)
console.log(plantedPotato)
console.log(plantedSoybeans)
console.log(plantedWheat)