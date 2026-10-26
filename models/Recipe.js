const mongoose = require('mongoose');


const RecipeSchema = new mongoose.Schema({
  name:{
    type: String,
    require: true,
    minLength: 2, 
    maxLength: 100
  },
  instructions:{
    type: [String],
  },
  prepTime:{
    type: Number,
    required: true,
    min: 5, 
    max: 500,
  },
  difficulty:{
    type: String,
    enum: ['Easy', 'Medium', 'Hard']
  },
})


const Recipe = mongoose.model('Recipe',RecipeSchema)

module.exports = Recipe
