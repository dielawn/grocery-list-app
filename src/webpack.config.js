const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    script: './script.js',
    recipes: './recipes.js',
    ingredients: './ingredients.js',
    recipeIngredients: './recipeIngredients.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};

