

const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
const { type } = require('node:os');
const { title } = require('node:process');
const Recipe = require('./models/Recipe.js')
const connectToTheDataBase = require('./dp.js')
connectToTheDataBase()

 async function makeNewRecipe(){
    try {
        const newRecipe = await Recipe.create({
            name: "Um Ali",
            instructions: "bake at 180C",
            prepTime: 120,
            difficulty: "Medium"
        })
        console.log(newRecipe);
    

    } catch (error) {
        console.log('ERROE: ', error);
    }
}
makeNewRecipe()

 async function findRecipe(){
    try {
        const findRecipe = await Recipe.find({
            name: "Um Ali",
            difficulty: "Medium",
            prepTime: 120,
        })
        console.log(findRecipe);
    

    } catch (error) {
        console.log('ERROE: ', error);
    }
}
findRecipe()
async function getRecipeById() {
try {
      const recipeID = await Recipe.findById('6adf35730e7189c45ed546d1')
  console.log(recipeID); 
} catch (error) {
    console.log('ERROE: No recipe with this ID exists.', error);
}
}
getRecipeById()

async function getRecipeByIdAndUpdate() {
try {
      const recipeIdUpadte = await Recipe.findByIdAndUpdate('6adf35730e7189c45ed546d1',{prepTime: 105}, {new:true})
  console.log(recipeIdUpadte); 
} catch (error) {
    console.log('ERROE: ', error);
}
}
getRecipeByIdAndUpdate()

async function getRecipeByIdAndDelet(action) {
try {
    const recipeIdDelet = await Recipe.findByIdAndDelete(action)
  console.log(recipeIdDelet);
  console.log("Recipe successfully deleted.")
} catch (error) {
    console.log('ERROE: ', error);
}
}
getRecipeByIdAndDelet('6adf3a2c596de0b9b581dabd')