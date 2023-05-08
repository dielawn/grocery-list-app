//all units are single serving
import { jsPDF } from "jspdf";

const proteins = [
  { name: 'Bacon', qty: 4, unit: 'oz', aisle: 'butcher' },
  { name: 'Beef Tenderloin Steak', qty: 5, unit: 'oz', aisle: 'butcher' },

  { name: 'Chicken Breast', qty: 6, unit: 'oz', aisle: 'butcher' },
  { name: 'Chicken Breast Strips', qty: 5, unit: 'oz', aisle: 'butcher' },
  { name: 'Chicken Cutlets', qty: 5, unit: 'oz', aisle: 'butcher' },

  { name: 'Diced Steak', qty: 5, unit: 'oz', aisle: 'butcher' },
  
  { name: 'Ground Beef', qty: 5, unit: 'oz', aisle: 'butcher' },
  { name: 'Ground Pork', qty: 5, unit: 'oz', aisle: 'butcher' },
  
  { name: 'Italian Chicken Sausage', qty: 5, unit: 'oz', aisle: 'butcher' },
  { name: 'Italian Pork Sausage', qty: 5, unit: 'oz', aisle: 'butcher' },

  { name: 'Pork Chops', qty: 6, unit: 'oz', aisle: 'butcher' },
  { name: 'Pork Tenderloin', qty: 5, unit: 'oz', aisle: 'butcher' },
  { name: 'Pulled Pork', qty: 5, unit: 'oz', aisle: 'butcher' },
];

const produce = [
  { name: 'Avacado', qty: .5, unit: 'avacado', aisle: 'produce' },

  { name: 'Banana', qty: .5, unit: 'bunch', aisle: 'produce' },
  { name: 'Basil', qty: .5, unit: 'oz', aisle: 'produce' },
  { name: 'Bell Pepper', qty: .5, unit: '', aisle: 'produce'},
  { name: 'Broccoli', qty: 4, unit: 'oz', aisle: 'produce'},
  { name: 'Brussels Sprouts', qty: 4, unit: 'oz', aisle: 'produce'},
  { name: 'Button Mushrooms', qty: 4, unit: 'oz', aisle: 'produce'},

  { name: 'Carrots', qty: .5, unit: 'oz', aisle: 'produce' },
  { name: 'Chili Pepper', qty: .5, unit: '', aisle: 'produce' },
  { name: 'Cilantro', qty: .125, unit: 'oz', aisle: 'produce' },
  { name: 'Coleslaw Mix', qty: 2, unit: 'oz', aisle: 'produce' },
  { name: 'Cucumber', qty: .5, unit: 'cucumber', aisle: 'produce' },

  { name: 'Dill', qty: .125, unit: 'oz', aisle: 'produce' },

  { name: 'Garlic', qty: 1, unit: 'Clove', aisle: 'produce' },
  { name: 'Ginger', qty: .5, unit: 'Thumb', aisle: 'produce' },
  { name: 'Grape Tomatoes', qty: 2, unit: 'oz', aisle: 'produce' },
  { name: 'Green Beans', qty: 3, unit: 'oz', aisle: 'produce' },
  { name: 'Green Herb Blend', qty: 1, unit: '', aisle: 'produce' },
  { name: 'Guacamole', qty: 2, unit: 'TBSP', aisle: 'produce' },

  { name: 'Jalapeno', qty: 1, unit: 'jalapeno', aisle: 'produce' },

  { name: 'Kiwi', qty: .5, unit: '', aisle: 'produce' },

  { name: 'Lemon', qty: .5, unit: '', aisle: 'produce' },
  { name: 'Lime', qty: .5, unit: '', aisle: 'produce' },
  { name: 'Long Green Pepper', qty: .5, unit: '', aisle: 'produce' },

  { name: 'Mandarin Orange', qty: .5, unit: 'orange', aisle: 'produce' },

  { name: 'Parsley', qty: .25, unit: 'oz', aisle: 'produce' },
  { name: 'Poblano Pepper', qty: .5, unit: '', aisle: 'produce' },
 
  { name: 'Red Onion', qty: .5, unit: '', aisle: 'produce' },  
  { name: 'Roma Tomato', qty: .5, unit: '', aisle: 'produce' },
  { name: 'Romaine Lettuce', qty: .25, unit: 'head', aisle: 'produce' },
  { name: 'Rosemary', qty: .5, unit: '', aisle: 'produce' },
 
  { name: 'Scallions', qty: .5, unit: 'oz', aisle: 'produce' },
  { name: 'Shallot', qty: .5, unit: '', aisle: 'produce' },
  { name: 'Shredded Carrots', qty: 2, unit: 'oz', aisle: 'produce' },
  { name: 'Spinach', qty: 1, unit: 'cup', aisle: 'produce' },
  { name: 'Sweet Potato', qty: 1, unit: 'potato', aisle: 'produce' },

  { name: 'Thyme', qty: .125, unit: 'oz', aisle: 'produce' },
  
  { name: 'Yellow Onion', qty: .5, unit: '', aisle: 'produce' },
  { name: 'Yukon Gold Potato', qty: 6, unit: 'oz', aisle: 'produce' },
 
  { name: 'Zucchini', qty: .5, unit: '', aisle: 'produce' },
        
]   

const grain = [
  { name: 'Arborio Rice', qty: .5, unit: 'cup', aisle: 'ethnic' },

  { name: 'Brioche Buns', qty: 1, unit: 'Bun', aisle: 'bakery'},

  { name: 'Cavatappi Pasta', qty: 3, unit: 'oz', aisle: 'noodle'},
  
  { name: 'Everything Bagel', qty: 1, unit: 'pack', aisle: 'bakery' },

  { name: 'Flatbreads', qty: 1, unit: 'crust', aisle: 'bakery' },
  { name: 'Flour Tortillas', qty: 3, unit: 'Tortilla', aisle: 'canned'},
  
  { name: 'Jasmine Rice', qty: .5, unit: 'cup', aisle: 'ethnic' },
  
  { name: 'Potato Buns', qty: 1, unit: 'Bun', aisle: 'bakery'},
  { name: 'Pita Bread', qty: 1, unit: 'Bun', aisle: 'bakery'},

  { name: 'Quick Oats', qty: .33, unit: 'cup', aisle: 'cereal'},

  { name: 'Sourdough Bread', qty: 2, unit: 'slice', aisle: 'bakery'},
  { name: 'Spaghetti', qty: 3, unit: 'oz', aisle: 'canned'},
    
]

const sauce = [
  { name: "Balsamic Vinegar", qty: .25, unit: 'oz', aisle: 'condiment' },
  { name: "BBQ Sauce", qty: 2, unit: 'TBSP', aisle: 'condiment' },
  { name: 'Beef Stock Concentrate', qty: 1, unit: 'TBSP', aisle: 'canned' },
  { name: "Bulgogi Sauce", qty: 2, unit: 'oz', aisle: 'ethnic' },
  
  { name: 'Chicken Stock Concentrate', qty: 1, unit: 'TBSP', aisle: 'canned' },

  { name: 'Dijon Mustard', qty: 1, unit: 'tsp', aisle: 'condiment' },

  { name: "Fig Jam", qty: .25, unit: 'oz', aisle: 'condiment' },
  { name: "Frank's Hot Sauce", qty: .25, unit: 'oz', aisle: 'condiment' },
  
  { name: 'Green Salsa', qty: 4, unit: 'oz', aisle: 'ethnic' },
  { name: 'Gochujang Sauce', qty: .5, unit: 'oz', aisle: 'ethnic' },

  { name: 'Hot Sauce', qty: 1, unit: 'tsp', aisle: 'condiment' },

  { name: "Ketchup", qty: .25, unit: 'oz', aisle: 'condiment' },

  { name: 'Mayonnaise', qty: 1, unit: 'TBSP', aisle: 'condiment' },
  { name: 'Mushroom Stock Concentrate', qty: 1, unit: 'TBSP', aisle: 'canned' },

  { name: 'Peach Jam', qty: 2, unit: 'TBSP', aisle: 'ethnic' },
  { name: 'Ponzu Sauce', qty: 24, unit: 'ml', aisle: 'ethnic' },

  { name: 'Ranch Dressing', qty: .75, unit: 'oz', aisle: 'condiment' },
  { name: 'Red Wine Vinegar', qty: 2.5, unit: 'tsp', aisle: 'condiment' },
  { name: 'Roasted Red Pepper Spread', qty: 2, unit: 'oz', aisle: 'condiment' },

  { name: 'Sesame Dressing', qty: .75, unit: 'oz', aisle: 'condiment' },
  { name: 'Sesame Oil', qty: .5, unit: 'TBSP', aisle: 'ethnic' },
  { name: 'Soy Sauce', qty: 1, unit: 'TBSP', aisle: 'ethnic' },
  { name: 'Sriracha', qty: 1, unit: 'tsp', aisle: 'ethnic' },  
  { name: 'Sweet Soy Glaze', qty: 2, unit: 'TBSP', aisle: 'ethnic' },
  { name: 'Sweet Thai Chili Sauce', qty: .5, unit: 'oz', aisle: 'ethnic' },    
  
  { name: 'Teriyaki Sauce', qty: .5, unit: '', aisle: 'ethnic' },
  { name: 'Tex-Mex Paste', qty: .5, unit: '', aisle: 'ethnic' },

  { name: 'Veggie Stock Concentrate', qty: 1, unit: 'TBSP', aisle: 'canned' },
    
  { name: 'White Wine Vinegar', qty: 2.5, unit: 'tsp', aisle: 'condiment' },
  
  
]

const necessities = [
  { name: 'Black Pepper', qty: 0, unit: '', aisle: 'baking' },
  { name: 'Butter', qty: 0, unit: '', aisle: 'dairy' },
  
  { name: 'Olive oil', qty: 0, unit: '', aisle: 'baking' },
  
  { name: 'Salt', qty: 0, unit: '', aisle: 'baking' },
  { name: 'Sugar', qty: 0, unit: '', aisle: 'baking' },    
    
]

const frozenFood = [
  { name: 'Berries', qty: .25, unit: 'cup', aisle: 'freezer' },  
]

const bakingGoods = [
  { name: "Baking Soda", qty: .5, unit: 'tsp', aisle: 'baking' },
  { name: 'Brown Sugar', qty: .33, unit: 'cup', aisle: 'baking' }, 

  { name: "Chocolate Chips", qty: .33, unit: 'cup', aisle: 'baking' },
  { name: "Cinnamon", qty: 1, unit: 'tsp', aisle: 'baking' },
  { name: 'Cornstarch', qty: .5, unit: 'TBSP', aisle: 'baking' },

  { name: 'Flour', qty: .5, unit: 'cup', aisle: 'baking' },

  { name: 'Honey', qty: 1, unit: 'tsp', aisle: 'baking' },
  
  { name: "Vanilla Extract", qty: 1, unit: 'tsp', aisle: 'baking' },
]

const cannedGoods = [
  { name: "Black Beans", qty: 7, unit: 'oz', aisle: 'canned' },

  { name: "Corn", qty: 7, unit: 'oz', aisle: 'canned' },

  { name: "Diced Tomatoes", qty: 7, unit: 'oz', aisle: 'canned' },
  { name: "Dill Pickle", qty: .5, unit: '', aisle: 'canned' },

  { name: "Marinara Sauce", qty: 7, unit: 'oz', aisle: 'canned' },

  { name: "Peanut Butter", qty: .5, unit: 'cup', aisle: 'bakery' },
  { name: "Pineapple", qty: 2, unit: 'oz', aisle: 'canned' },

  { name: "Tomato Paste", qty: .75, unit: 'oz', aisle: 'canned' },
  
]

const driedGoods = [
    { name: 'Bread Crumbs', qty: .125, unit: 'cup', aisle: 'baking' },

    { name: 'Crispy Fried Onion', qty: .25, unit: 'cup', aisle: 'baking' },

    { name: 'Peanuts', qty: .25, unit: 'oz', aisle: 'snack' },   
    { name: 'Pepitas', qty: .25, unit: 'oz', aisle: 'baking' },
    { name: 'Protein Powder', qty: .25, unit: 'oz', aisle: 'nutrition' },

    { name: 'Sesame Seeds', qty: .5, unit: 'TBSP', aisle: 'baking' },
    { name: 'Sliced Almonds', qty: .25, unit: 'oz', aisle: 'baking' },
    { name: 'Sun-Dried Tomatoes', qty: .25, unit: 'oz', aisle: 'baking' },
]

const seasoning = [
  { name: "Ancho Chili Powder", qty: .5, unit: 'tsp', aisle: 'baking' },

  { name: "Bold and Savory Steak Spice", qty: .5, unit: 'TBSP', aisle: 'baking' },

  { name: 'Cajun Spice Blend', qty: 1, unit: 'TBSP', aisle: 'baking' },
  { name: 'Chili Flakes', qty: .5, unit: 'tsp', aisle: 'baking' },
  { name: 'Chili Powder', qty: .5, unit: 'tsp', aisle: 'baking' },
  { name: 'Chipotle Powder', qty: .5, unit: 'tsp', aisle: 'baking' },  
  { name: 'Cumin', qty: .5, unit: 'tsp', aisle: 'baking' },

  { name: "Dried Oregano", qty: .5, unit: 'tsp', aisle: 'baking' },
  { name: "Dried Thyme", qty: .5, unit: 'tsp', aisle: 'baking' },

  { name: "Fajita Spice Blend", qty: .5, unit: 'TBSP', aisle: 'baking' },
  { name: "Frank's Seasoning", qty: .5, unit: '', aisle: 'baking' },
  { name: "Fry Seasoning", qty: .5, unit: 'TBSP', aisle: 'baking' },

  { name: "Garlic Powder", qty: .5, unit: 'tsp', aisle: 'baking' },

  { name: "Harissa Powder", qty: .5, unit: 'TBSP', aisle: 'baking' },

  { name: "Italian Seasoning", qty: .5, unit: 'tsp', aisle: 'baking' },

  { name: "Mexican Spice Blend", qty: .5, unit: 'TBSP', aisle: 'baking' },

  { name: 'Ranch Spice', qty: .5, unit: 'TBSP', aisle: 'baking' },

  { name: 'Smoked Paprika', qty: .5, unit: 'tsp', aisle: 'baking' },
  { name: 'Southwest Spice Blend', qty: 1, unit: 'TBSP', aisle: 'baking' },
  { name: 'Sweet and Smoky BBQ Seasoning', qty: .5, unit: 'TBSP', aisle: 'baking' },

  { name: 'Tumeric', qty: .5, unit: 'tsp', aisle: 'baking' },
  { name: 'Tuscan Heat Spice', qty: .5, unit: 'TBSP', aisle: 'baking' },
  
  { name: 'Old Bay Seasoning', qty: .5, unit: 'TBSP', aisle: 'baking' },

  
]

const dairy = [
  { name: 'Cheddar Cheese', qty: .25, unit: 'block', aisle: 'cheese' },
  { name: 'Cream Cheese', qty: 2, unit: 'TBSP', aisle: 'cheese' },
  { name: 'Cream Sauce Base', qty: 2, unit: 'oz', aisle: 'dairy' },

  { name: "Eggs", qty: 1, unit: 'egg', aisle: 'dairy' },

  { name: 'Garlic Herb Butter', qty: 1, unit: 'Slice', aisle: 'dairy' },
  { name: 'Gouda Cheese', qty: 1, unit: 'Slice', aisle: 'cheese' },

  { name: 'Mexican Cheese Blend', qty: .25, unit: 'block', aisle: 'cheese' },
  { name: 'Monterey Jack Cheese', qty: .25, unit: 'block', aisle: 'cheese' },
  { name: 'Mozzarella Cheese', qty: .5, unit: 'block', aisle: 'cheese' },

  { name: 'Parmesan Cheese', qty: .25, unit: 'block', aisle: 'cheese' },
  { name: 'Pepper Jack Cheese', qty: .25, unit: 'block', aisle: 'cheese' },

  { name: 'Ricotta Cheese', qty: 4, unit: 'oz', aisle: 'cheese' },

  { name: 'Sour Cream', qty: 1, unit: 'TBSP', aisle: 'dairy' },

  { name: 'Yogurt', qty: .25, unit: 'cup', aisle: 'dairy' },

  { name: 'White Cheddar Cheese', qty: .25, unit: 'block', aisle: 'cheese' },
]

const snack = [
  { name: 'Doritos Cool Ranch', qty: .25, unit: 'bag', aisle: 'cheese' },
  { name: 'Cheddar Ruffles', qty: .25, unit: 'bag', aisle: 'cheese' },
  { name: 'Tortilla Chips', qty: .25, unit: 'bag', aisle: 'snack' },
]


// 
const dillonsBreakfastIngredients = [
  ...dairy.filter(item => item.name === "Cream Cheese"),
  ...grain.filter(item => item.name === "Everything Bagel"),
  ...produce.filter(item => item.name === "Banana")  
]
const alisonsBreakfastIngredients = [
  ...produce.filter(item => item.name === "Spinach" || item.name === "Banana"),
  ...driedGoods.filter(item => item.name === "Protein Powder"), 
  ...dairy.filter(item => item.name === "Yogurt"), 
  ...frozenFood.filter(item => item.name === "Berries"),
]

const cookieIngredients = [
  ...grain.filter(item => item.name === "Quick Oats"),
  ...cannedGoods.filter(item => item.name === "Peanut Butter"),
  ...dairy.filter(item => item.name === "Eggs"),
  ...bakingGoods.filter(item => item.name === "Brown Sugar" || item.name === "Vanilla Extract" 
  || item.name === "Chocolate Chips" || item.name === "Baking Soda" || item.name === "Salt" 
  || item.name === "Cinnamon"),

]

//Recipie ingredient lists
//Bowls
const sweetChiliPorkBowlIngredients = [
    ...proteins.filter(item => item.name === "Ground Pork"),
    ...produce.filter(item => item.name === "Bell Pepper" || item.name === "Yellow Onion" || item.name === "Cilantro" || item.name === "Lime"),
    ...sauce.filter(item => item.name === "Sweet Soy Glaze" || item.name === "Sweet Thai Chili Sauce"),    
    ...driedGoods.filter(item => item.name === "Peanuts"),
    ...grain.filter(item => item.name === "Jasmine Rice")
  ];
  const sesameSoyPorkBowlIngredients = [
    ...proteins.filter(item => item.name === "Ground Pork"),
    ...produce.filter(item => item.name === "Shredded Carrots" || item.name === "Cilantro" || item.name === "Lime"),
    ...sauce.filter(item => item.name === "Sweet Soy Glaze" || item.name === "Sriracha" || item.name === 'Mayonnaise'),    
    ...driedGoods.filter(item => item.name === "Crispy Fried Onion"),
    ...grain.filter(item => item.name === "Jasmine Rice")
  ];
  const chimiChickenAndYellowRiceBowlIngredients = [
    ...proteins.filter(item => item.name === "Chicken Breast Strips"),
    ...produce.filter(item => item.name === "Poblano Pepper" || item.name === "Cilantro" || item.name === "Yellow Onion" 
    || item.name === "Roma Tomato" || item.name === "Lemon" || item.name === "Garlic" || item.name === "Chili Pepper"),
    ...sauce.filter(item => item.name === "Chicken Stock Concentrate"),    
    ...seasoning.filter(item => item.name === "Tumeric"|| item.name === "Cumin"),
    ...grain.filter(item => item.name === "Jasmine Rice")
  ];
  const thaiBasilBeefBowlIngredients = [
    ...proteins.filter(item => item.name === "Ground Beef"),
    ...produce.filter(item => item.name === "Shallot" || item.name === "Bell Pepper"
     || item.name === "Ginger" || item.name === "Lime" || item.name === "Basil"),
    ...sauce.filter(item => item.name === "Mushroom Stock Concentrate"
     || item.name === "Ponzu Sauce" || item.name === "Mayonnaise" || item.name === "Sriracha"), 
    ...driedGoods.filter(item => item.name === "Peanuts"),
    ...grain.filter(item => item.name === "Jasmine Rice")
  ]
const porkAndZucchiniBibimbapIngredients = [
  ...proteins.filter(item => item.name === "Ground Pork"),
  ...produce.filter(item => item.name === "Scallions" || item.name === "Carrots"
   || item.name === "Zucchini" || item.name === "Ginger" || item.name === "Garlic"),
  ...sauce.filter(item => item.name === "White Wine Vinegar" || item.name === "Sesame Oil"
   || item.name === "Soy Sauce" || item.name === "Gochujang Sauce"), 
  ...grain.filter(item => item.name === "Jasmine Rice")
]
const teriyakiPorkLuauBowlIngredients = [
  ...proteins.filter(item => item.name === "Ground Pork"),
  ...produce.filter(item => item.name === "Long Green Pepper" || item.name === "Red Onion"
   || item.name === "Roma Tomato" || item.name === "Lime" || item.name === "Garlic"),
  ...sauce.filter(item => item.name === "Teriyaki Sauce"),    
  ...grain.filter(item => item.name === "Jasmine Rice")
]
//Burgers
const goudaPorkBurgerIngredients = [
  ...proteins.filter(item => item.name === "Ground Pork"),
  ...produce.filter(item => item.name === "Yellow Onion" || item.name === "Lime"
   || item.name === "Garlic"),
  ...seasoning.filter(item => item.name === "Smoked Paprika"),
  ...sauce.filter(item => item.name === "Mayonnaise" || item.name === "Sour Cream"), 
  ...dairy.filter(item => item.name === "Gouda Cheese"),
  ...grain.filter(item => item.name === "Potato Buns")
]
const firehouseCheeseburgersIngredients = [
  ...proteins.filter(item => item.name === "Ground Beef"),
  ...sauce.filter(item => item.name === "Ranch Dressing" || item.name === "Sour Cream"
   || item.name === "Frank's Hot Sauce"),
  ...dairy.filter(item => item.name === "Monterey Jack Cheese"),
  ...seasoning.filter(item => item.name === "Frank's Seasoning" || item.name === "Garlic Powder"),
  ...driedGoods.filter(item => item.name === "Crispy Fried Onion"),
  ...grain.filter(item => item.name === "Potato Buns")
]
const meltyMontereyJackBurgersIngredients = [
  ...proteins.filter(item => item.name === "Ground Beef"),
  ...produce.filter(item => item.name === "Yellow Onion" || item.name === "Garlic"),
  ...dairy.filter(item => item.name === "Monterey Jack Cheese"),
  ...sauce.filter(item => item.name === "Balsamic Vinegar" || item.name === "Ketchup"
   || item.name === "Mayonnaise"),
  ...grain.filter(item => item.name === "Potato Buns")
]
const baconBuckarooBurgerIngredients = [
  ...proteins.filter(item => item.name === "Ground Beef" || item.name === 'Bacon'),
  ...produce.filter(item => item.name === "Yellow Onion" || item.name === "Scallions"
   || item.name === 'Dill Pickle'),
  ...dairy.filter(item => item.name === "Pepper Jack Cheese" || item.name === 'Gouda Cheese'
   || item.name === 'Sour Cream'),
  ...sauce.filter(item => item.name === "BBQ Sauce"),
  ...grain.filter(item => item.name === "Brioche Buns")
]
const whiteCheddarWonderBurgerIngredients = [
  ...proteins.filter(item => item.name === "Ground Beef"),
  ...produce.filter(item => item.name === "Yellow Onion"),
  ...sauce.filter(item => item.name === "Mayonnaise" || item.name === "Dijon Mustard"
   || item.name === "Ketchup"), 
  ...seasoning.filter(item => item.name === "Old Bay Seasoning"),
  ...dairy.filter(item => item.name === "White Cheddar Cheese"),
  ...grain.filter(item => item.name === "Potato Buns")
]
//Sandwhich
const anchoBbqSloppyJoesIngredients = [
  ...proteins.filter(item => item.name === "Ground Beef"),
  ...produce.filter(item => item.name === "Yellow Onion" || item.name === "Dill Pickle"),
  ...bakingGoods.filter(item => item.name === "Cornstarch"),
  ...sauce.filter(item => item.name === "BBQ Sauce" || item.name === "Ketchup"
   || item.name === "Beef Stock Concentrate"),
  ...seasoning.filter(item => item.name === "Ancho Chili Powder"),
  ...grain.filter(item => item.name === "Potato Buns")
]

const crispyCajunChickenSandwichesIngredients = [
  ...proteins.filter(item => item.name === "Chicken Cutlets"),
  ...grain.filter(item => item.name === "Brioche Buns"),
  ...sauce.filter(item => item.name === "Mayonnaise" || item.name === "Hot Sauce"),
  ...cannedGoods.filter(item => item.name === "Dill Pickle"),
  ...seasoning.filter(item => item.name === "Cajun Spice Blend"),
  ...dairy.filter(item => item.name === "Sour Cream"),
  ...bakingGoods.filter(item => item.name === "Flour" || item.name === "Cornstarch"),
]

const bbqPineappleFlatbreadIngredients = [
  ...produce.filter(item => item.name === "Shallot" || item.name === "Cilantro"
   || item.name === "Poblano Pepper"),
  ...grain.filter(item => item.name === "Flatbreads"),
  ...sauce.filter(item => item.name === "BBQ Sauce" || item.name === "Red Wine Vinegar"),
  ...cannedGoods.filter(item => item.name === "Pineapple"),
  ...dairy.filter(item => item.name === "Mozzearella Cheese" || item.name === " Monterey Jack Cheese"),
]
const baconJalapenoMacAndCheeseIngredients = [
  ...proteins.filter(item => item.name === "Bacon"),
  ...grain.filter(item => item.name === "Cavatappi Pasta"),
  ...produce.filter(item => item.name === "Jalapeno" || item.name === "Scallions"
   || item.name === "Garlic"),
  ...driedGoods.filter(item => item.name === "Bread Crumbs"),
  ...dairy.filter(item => item.name === "Cream Cheese" || item.name === "Cream Sauce Base" 
  || item.name === "Mexican Cheese Blend" || item.name === "Monterey Jack Cheese"),
  ...bakingGoods.filter(item => item.name === "Flour"),
  
]

const epicNachoMacAndCheeseIngredients = [
  ...grain.filter(item => item.name === "Cavatappi Pasta"),
  ...produce.filter(item => item.name === "Long Green Pepper" || item.name === "Scallions" 
  || item.name === "Garlic"),
  ...snack.filter(item => item.name === "Tortilla Chips"),
  ...dairy.filter(item => item.name === "Cream Cheese" || item.name === "White Cheddar Cheese" 
  || item.name === "Mexican Cheese Blend" || item.name === "Sour Cream"),
  ...seasoning.filter(item => item.name === "Southwest Spice Blend"),
  ...sauce.filter(item => item.name === "Hot Sauce"),
  ...bakingGoods.filter(item => item.name === "Flour"),
]
const veggieBurritoBowlIngredients = [
  ...produce.filter(item => item.name === "Yellow Onion" || item.name === "Roma Tomato" 
  || item.name === "Cilantro" || item.name === "Lime"),
  ...grain.filter(item => item.name === "Jasmine Rice"),
  ...sauce.filter(item => item.name === "Veggie Stock Concentrate" || item.name === "Hot Sauce"),
  ...cannedGoods.filter(item => item.name === "Black Beans" || item.name === "Corn"),
  ...seasoning.filter(item => item.name === "Southwest Spice Blend"),
  ...dairy.filter(item => item.name === "Monterey Jack Cheese" || item.name === "Sour Cream"),
  ...snack.filter(item => item.name === "Tortilla Chips")
]
const onePanCajunPorkSausageSkilletIngredients = [
  ...proteins.filter(item => item.name === "Italian Pork Sausage"),
  ...produce.filter(item => item.name === "Yellow Onion" || item.name === "Bell Pepper" 
  || item.name == "Roma Tomato" || item.name == "Parsley"),
  ...grain.filter(item => item.name === "Jasmine Rice"),
  ...sauce.filter(item => item.name === "Chicken Stock Concentrate"),
  ...cannedGoods.filter(item => item.name === "Tomato Paste"),
  ...driedGoods.filter(item => item.name === ""),
  ...seasoning.filter(item => item.name === "Cajun Spice Blend"),
  ...dairy.filter(item => item.name === "Monterey Jack Cheese" || item.name == "Sour Cream"),
]
const porkSausageAndBellPepperRisottoIngredients = [
  ...proteins.filter(item => item.name === "Italian Pork Sausage"),
  ...produce.filter(item => item.name === "Bell Pepper" || item.name == "Garlic"
  || item.name == "Lemon" || item.name == "Scallions"),
  ...grain.filter(item => item.name === "Arborio Rice"),
  ...sauce.filter(item => item.name === "Chicken Stock Concentrate"),
  ...seasoning.filter(item => item.name === "Italian Seasoning"),
  ...dairy.filter(item => item.name === "Parmesan Cheese"),
]
const chickednEnchiladasVerdesIngredients = [
  ...proteins.filter(item => item.name === "Chicken Breast Strips"),
  ...produce.filter(item => item.name === "Poblano Pepper" || item.name === "Scallions"),
  ...grain.filter(item => item.name === "Flour Tortillas"),
  ...sauce.filter(item => item.name === "Hot Sauce" || item.name === "Green Salsa"),
  ...seasoning.filter(item => item.name === "Southwest Spice Blend"),
  ...dairy.filter(item => item.name === "Sour Cream" || item.name === "Mexican Cheese Blend"),
]
const honeyThymePorkTenderloinIngredients = [
  ...proteins.filter(item => item.name === "Pork Tenderloin"),
  ...produce.filter(item => item.name === "Yukon Gold Potato" || item.name === "Garlic" 
  || item.name === "Broccoli"),
  ...sauce.filter(item => item.name === "Chicken Stock Concentrate"),
  ...seasoning.filter(item => item.name === "Dried Thyme"),
  ...bakingGoods.filter(item => item.name === "Honey"),
]

const peachyKeenBbqRubbedPorkChopsIngredients = [
  ...proteins.filter(item => item.name === "Pork Chops"),
  ...produce.filter(item => item.name === "Green Beans" || item.name === "Lemon" 
  || item.name === "Garlic"),
  ...grain.filter(item => item.name === "Jasmine Rice"),
  ...sauce.filter(item => item.name === "Chicken Stock Concentrate" || item.name === "Peach Jam"),
  ...seasoning.filter(item => item.name === "Sweet and Smoky BBQ Seasoning"),
]
const steakhouseStylePorkChopsIngredients = [
  ...proteins.filter(item => item.name === "Pork Chops"),
  ...produce.filter(item => item.name === "Yukon Gold Potato" || item.name === "Yellow Onion"
  || item.name === "Lemon" || item.name === "Broccoli"),
  ...sauce.filter(item => item.name === "Beef Stock Concentrate"),
  ...seasoning.filter(item => item.name === "Bold and Savory Steak Spice"),
  ...dairy.filter(item => item.name === "Sour Cream"),
]

const bbqCheddarBurgerIngredients = [
  ...proteins.filter(item => item.name === "Ground Beef"),
  ...produce.filter(item => item.name === "Yellow Onion" || item.name === "Yukon Gold Potato"),
  ...grain.filter(item => item.name === "Potato Buns"),
  ...sauce.filter(item => item.name === "Mayonnaise" || item.name === "BBQ Sauce"),
  ...seasoning.filter(item => item.name === "Chipotle Powder" || item.name === "Fry Seasoning"),
  ...dairy.filter(item => item.name === "Cheddar Cheese"),
]
const alPastorPulledPorkTacoIngredients = [
  ...proteins.filter(item => item.name === "Pulled Pork"),
  ...produce.filter(item => item.name === "Red Onion" || item.name === "Lime"
   || item.name === "Cilantro"),
  ...grain.filter(item => item.name === "Flour Tortillas"),
  ...sauce.filter(item => item.name === "Tex-Mex Paste"),
  ...cannedGoods.filter(item => item.name === "Pineapple"),
  ...seasoning.filter(item => item.name === "Southwest Spice Blend"),
]

const cheesyBeefTostadasIngredients = [
  ...proteins.filter(item => item.name === "Ground Beef"),
  ...produce.filter(item => item.name === "Yellow Onion" || item.name === "Roma Tomato"
   || item.name === "Lime" || item.name === "Long Green Pepper" || item.name === "Cilantro"),
  ...grain.filter(item => item.name === "Flour Tortillas"),
  ...sauce.filter(item => item.name === "Hot Sauce" || item.name === "Beef Stock Concentrate"),
  ...seasoning.filter(item => item.name === "Chili Powder" || item.name === "Southwest Spice Blend"),
  ...dairy.filter(item => item.name === "Sour Cream" || item.name === "Mexican Cheese Blend"),
]

const yucatanCitrusChickenBowlIngredients = [
  ...proteins.filter(item => item.name === "Chicken Breast Strips"),
  ...produce.filter(item => item.name === "Mandarin Orange" || item.name === "Lime"
  || item.name === "Red Onion" || item.name === "Poblano Pepper" || item.name === "Cilantro"),
  ...grain.filter(item => item.name === "Jasmine Rice"),
  ...sauce.filter(item => item.name === "Tex-Mex Paste"),
  ...seasoning.filter(item => item.name === "Southwest Spice Blend" || item.name === "Ancho Chili Powder"),
  ...dairy.filter(item => item.name === "Sour Cream"),
]

const rioRanchoPulledPorkTacoIngredients = [
  ...proteins.filter(item => item.name === "Pulled Pork"),
  ...produce.filter(item => item.name === "Coleslaw Mix" || item.name === "Yellow Onion"),
  ...grain.filter(item => item.name === "Flour Tortillas"),
  ...sauce.filter(item => item.name === "Hot Sauce" || item.name === "Chicken Stock Concentrate"
   || item.name === "White Wine Vinegar"),
  ...cannedGoods.filter(item => item.name === "Tomato Paste"),
  ...seasoning.filter(item => item.name === "Southwest Spice Blend"),
  ...dairy.filter(item => item.name === "Sour Cream"),
]
const balsamicAndFigBeefTenderloinIngredients = [
  ...proteins.filter(item => item.name === "Beef Tenderloin Steak"),
  ...produce.filter(item => item.name === "Yukon Gold Potato" || item.name === "Brussels Sprouts"
  || item.name === "Shallot" || item.name === "Rosemary" || item.name === "Garlic"),
  ...sauce.filter(item => item.name === "Beef Stock Concentrate" || item.name === "Fig Jam"
  || item.name === "Balsamic Vinegar"),
  ...driedGoods.filter(item => item.name === "Bread Crumbs"),
  ...dairy.filter(item => item.name === "Sour Cream"),
]
const southwestChickedSausageAndRiceSkilletIngredients = [
  ...proteins.filter(item => item.name === "Italian Chicken Sausage"),
  ...produce.filter(item => item.name === "Yellow Onion" || item.name === "Roma Tomato"
   || item.name === "Long Green Pepper" || item.name === "Lime"),
  ...grain.filter(item => item.name === "Jasmine Rice"),
  ...sauce.filter(item => item.name === "Hot Sauce" || item.name === "Chicken Stock Concentrate"),
  ...seasoning.filter(item => item.name === "Southwest Spice Blend"),
  ...dairy.filter(item => item.name === "Sour Cream" || item.name === "Pepper Jack Cheese"),

]
const meltyDoubleRedPepperPaniniIngredients = [
  ...proteins.filter(item => item.name === ""),
  ...produce.filter(item => item.name === "Yukon Gold Potato" || item.name === "Zucchini" 
  || item.name === "Red Onion" || item.name === "Bell Pepper"),
  ...grain.filter(item => item.name === "Sourdough Bread"),
  ...sauce.filter(item => item.name === "Mayonnaise" || item.name === "Roasted Red Pepper Spread"),
  ...driedGoods.filter(item => item.name === ""),
  ...seasoning.filter(item => item.name === "Italian Seasoning" || item.name === "Garlic Powder"),
  ...dairy.filter(item => item.name === "Mozzarella Cheese"),

]
const blackBeanPepperQuesadillaIngredients = [
  ...produce.filter(item => item.name === "Guacamole" || item.name === "Long Green Pepper"
  || item.name === "Scallions" || item.name === "Roma Tomato" || item.name === "Lime"),
  ...grain.filter(item => item.name === "Flour Tortillas"),
  ...cannedGoods.filter(item => item.name === "Black Beans"),
  ...seasoning.filter(item => item.name === "Southwest Spice Blend"),
  ...dairy.filter(item => item.name === "Sour Cream" || item.name === "Mexican Cheese Blend" 
  || item.name === "Monterey Jack Cheese"),
]
const onePanPorkFajitaLettuceWrapngredients = [
  ...proteins.filter(item => item.name === "Ground Pork"),
  ...produce.filter(item => item.name === "Romaine Lettuce" || item.name === "Yellow Onion" 
  || item.name === "Long Green Pepper" || item.name === "Lime"),
  ...sauce.filter(item => item.name === "Beef Stock Concentrate"),
  ...seasoning.filter(item => item.name === "Fajita Spice Blend"),
  ...dairy.filter(item => item.name === "Sour Cream" || item.name === "Mexican Cheese Blend"),
  ...snack.filter(item => item.name === "Tortilla Chips")
]
const sheetPanMontereyJackChickenIngredients = [
  ...proteins.filter(item => item.name === "Chicken Cutlets"),
  ...produce.filter(item => item.name === "Carrots" || item.name === "Yukon Gold Potato"),
  ...sauce.filter(item => item.name === "Mayonnaise" || item.name === "Sriracha"),
  ...driedGoods.filter(item => item.name === "Bread Crumbs"),
  ...seasoning.filter(item => item.name === "Ranch Spice"),
  ...dairy.filter(item => item.name === "Monterey Jack Cheese"),
]
const bulgogiPorkTenderloinIngredients = [
  ...proteins.filter(item => item.name === "Pork Tenderloin"),
  ...produce.filter(item => item.name === "Carrots" || item.name == "Lemon"
   || item.name === "Scallions"),
  ...grain.filter(item => item.name === "Jasmine Rice"),
  ...sauce.filter(item => item.name === "Bulgogi Sauce"),
  ...cannedGoods.filter(item => item.name === ""),
  ...driedGoods.filter(item => item.name === "Sesame Seeds"),
]
const steakAndGreenPepperQuesadillasIngredients = [
  ...proteins.filter(item => item.name === "Diced Steak"),
  ...produce.filter(item => item.name === "Long Green Pepper"),
  ...grain.filter(item => item.name === "Flour Tortillas"),
  ...sauce.filter(item => item.name === "Hot Sauce"),
  ...seasoning.filter(item => item.name === "Southwest Spice Blend"),
  ...dairy.filter(item => item.name === "Pepper Jack Cheese" || item.name === "Mexican Cheese Blend"
   || item.name === "Sour Cream"),
]
const chickenPineappleQuesadillasIngredients = [
  ...proteins.filter(item => item.name === "Chicken Breast Strips"),
  ...produce.filter(item => item.name === "Yellow Onion" || item.name === "Roma Tomato"
   || item.name === "Lime" || item.name === "Cilantro"),
  ...grain.filter(item => item.name === "Flour Tortillas"),
  ...cannedGoods.filter(item => item.name === "Pineapple"),
  ...seasoning.filter(item => item.name === "Southwest Spice Blend"),
  ...dairy.filter(item => item.name === "Mozzarella Cheese" || item.name === "Sour Cream"),
]
const porkAndPoblanoTacoIngredients = [
  ...proteins.filter(item => item.name === "Ground Pork"),
  ...produce.filter(item => item.name === "Red Onion" || item.name === "Roma Tomato"
   || item.name === "Cilantro" || item.name === "Poblano Pepper" || item.name === "Kiwi"
   || item.name === "Lime"),
  ...grain.filter(item => item.name === "Flour Tortillas"),
  ...sauce.filter(item => item.name === "Chicken Stock Concentrate"),
  ...cannedGoods.filter(item => item.name === "Tomato Paste"),
  ...seasoning.filter(item => item.name === "Mexican Spice Blend"),
  ...dairy.filter(item => item.name === "Sour Cream"),
]
const harissaSweetPotatoPocketIngredients = [
  ...produce.filter(item => item.name === "Sweet Potato" || item.name === "Garlic"
   || item.name === "Dill" || item.name === "Cucumber" || item.name === "Avacado"),
  ...grain.filter(item => item.name === "Pita Bread"),
  ...sauce.filter(item => item.name === "Mayonnaise" || item.name === "White Wine Vinegar"),
  ...driedGoods.filter(item => item.name === "Pepitas"),
  ...seasoning.filter(item => item.name === "Harissa Powder"),
]
const mushroomHerbSheperdsPieIngredients = [
  ...produce.filter(item => item.name === "Yukon Gold Potato" || item.name === "Button Mushrooms"
  || item.name === "Yellow Onion" || item.name === "Carrots" || item.name === "Thyme"),
  ...sauce.filter(item => item.name === "Mushroom Stock Concentrate"),
  ...cannedGoods.filter(item => item.name === "Tomato Paste"),
  ...seasoning.filter(item => item.name === "Garlic Powder"),
  ...dairy.filter(item => item.name === "White Cheddar Cheese" || item.name === "Sour Cream"),
  ...bakingGoods.filter(item => item.name === "Flour"),
]
const onePotBeefBlackBeanChiliIngredients = [
  ...proteins.filter(item => item.name === "Ground Beef"),
  ...produce.filter(item => item.name === "Yellow Onion" || item.name === "Jalapeno"),
  ...sauce.filter(item => item.name === "Beef Stock Concentrate" || item.name === "Hot Sauce"),
  ...cannedGoods.filter(item => item.name === "Black Beans" || item.name === "Diced Tomatoes"
   || item.name === "Tomato Paste"),
  ...seasoning.filter(item => item.name === "Southwest Spice Blend" || item.name === "Mexican Spice Blend"),
  ...dairy.filter(item => item.name === "Sour Cream" || item.name === "Monterey Jack Cheese"),
]
const chickenOverGarlicParmesanSpaghettiIngredients = [
  ...proteins.filter(item => item.name === "Chicken Breast"),
  ...produce.filter(item => item.name === "Roma Tomato" || item.name === "Garlic"),
  ...grain.filter(item => item.name === "Spaghetti"),
  ...seasoning.filter(item => item.name === "Tuscan Heat Spice"),
  ...dairy.filter(item => item.name === "Cream Cheese" || item.name === "Parmesan Cheese"),
]
const parmesanCrustedChickenIngredients = [
  ...proteins.filter(item => item.name === "Chicken Breast"),
  ...produce.filter(item => item.name === "Roma Tomato" || item.name === "Garlic"
   || item.name === "Lemon"),
  ...grain.filter(item => item.name === "Spaghetti"),
  ...sauce.filter(item => item.name === "Dijon Mustard"),
  ...driedGoods.filter(item => item.name === "Bread Crumbs"),
  ...seasoning.filter(item => item.name === "Fry Seasoning"),
  ...dairy.filter(item => item.name === "Cream Cheese" || item.name === "Parmesan Cheese"
   || item.name === "Sour Cream"),
]
const balsamicTomatoHerbChickenIngredients = [
  ...proteins.filter(item => item.name === "Chicken Cutlets"),
  ...produce.filter(item => item.name === "Roma Tomato" || item.name === "Green Herb Blend" 
  || item.name === "Garlic"),
  ...grain.filter(item => item.name === "Spaghetti"),
  ...sauce.filter(item => item.name === "Balsamic Vinegar"),
  ...seasoning.filter(item => item.name === "Italian Seasoning"),
  ...dairy.filter(item => item.name === "Mozzarella Cheese"),
]
const creamyParmesanChickenSpaghettiIngredients = [
  ...proteins.filter(item => item.name === "Chicken Breast Strips"),
  ...produce.filter(item => item.name === "Lemon" || item.name === "Roma Tomato" 
  || item.name === "Green Herb Blend"),
  ...grain.filter(item => item.name === "Spaghetti"),
  ...seasoning.filter(item => item.name === "Tuscan Heat Spice"),
  ...dairy.filter(item => item.name === "Garlic Herb Butter" || item.name === "Cream Cheese" 
  || item.name === "Parmesan Cheese"),
]
const chickenParmOverSpaghettiIngredients = [
  ...proteins.filter(item => item.name === "Chicken Cutlets"),
  ...produce.filter(item => item.name === "Garlic"),
  ...grain.filter(item => item.name === "Spaghetti"),
  ...cannedGoods.filter(item => item.name === "Marinara Sauce"),
  ...driedGoods.filter(item => item.name === "Bread Crumbs"),
  ...seasoning.filter(item => item.name === "Italian Seasoning"),
  ...dairy.filter(item => item.name === "Parmesan Cheese" || item.name === "Sour Cream"
   || item.name === "Mozzarella Cheese"),
]
const sunDriedTomatoSpaghettiIngredients = [
  ...proteins.filter(item => item.name === ""),
  ...produce.filter(item => item.name === "Garlic" || item.name === "Grape Tomatoes"
   || item.name === "Green Herb Blend"),
  ...grain.filter(item => item.name === "Spaghetti"),
  ...sauce.filter(item => item.name === "Veggie Stock Concentrate"),
  ...cannedGoods.filter(item => item.name === ""),
  ...driedGoods.filter(item => item.name === "Sliced Almonds" || item.name === "Sun-Dried Tomatoes"),
  ...seasoning.filter(item => item.name === ""),
  ...dairy.filter(item => item.name === "Cream Cheese" || item.name === "Parmesan Cheese"),
  ...bakingGoods.filter(item => item.name === ""),
  ...frozenFood.filter(item => item.name === ""),
  ...snack.filter(item => item.name === "")
]
const zucchiniTomatoFlatbreadsIngredients = [
  ...produce.filter(item => item.name === "Zucchini" || item.name === "Garlic"
  || item.name === "Basil" || item.name === "Grape Tomatoes"  || item.name === "Lemon"),
  ...grain.filter(item => item.name === "Flatbreads"),
  ...seasoning.filter(item => item.name === "Chili Flakes"),
  ...dairy.filter(item => item.name === "Ricotta Cheese"),
  ...bakingGoods.filter(item => item.name === "Honey"),
]
// || item.name === ""
const templateIngredients = [
  ...proteins.filter(item => item.name === ""),
  ...produce.filter(item => item.name === ""),
  ...grain.filter(item => item.name === ""),
  ...sauce.filter(item => item.name === ""),
  ...cannedGoods.filter(item => item.name === ""),
  ...driedGoods.filter(item => item.name === ""),
  ...seasoning.filter(item => item.name === ""),
  ...dairy.filter(item => item.name === ""),
  ...bakingGoods.filter(item => item.name === ""),
  ...frozenFood.filter(item => item.name === ""),
  ...snack.filter(item => item.name === "")
]
//sides
//Potato sides
const potatoWedgeIngredients = [
  ...produce.filter(item => item.name === "Yukon Gold Potato"),
  ...seasoning.filter(item => item.name === "Smoked Paprika"),
]
const ovenGoldPotatoesIngredients = [
  ...produce.filter(item => item.name === "Yukon Gold Potato"),
  ...seasoning.filter(item => item.name === "Fry Seasoning"),
]
const cheesyLoadedPotatoRoundsIngredients = [
  ...proteins.filter(item => item.name === 'Bacon'),
  ...produce.filter(item => item.name === "Yellow Onion" || item.name === "Scallions"),
  ...dairy.filter(item => item.name === "Pepper Jack Cheese" || item.name === 'Sour Cream'),
  ...seasoning.filter(item => item.name === "Fry Seasoning"),
]
//Zucchini sides
const zucchiniSpearsIngredients = [
  ...produce.filter(item => item.name === "Zucchini" || item.name === "Garlic"),
  ...sauce.filter(item => item.name === "Mayonnaise" ),
  ...seasoning.filter(item => item.name === "Dried Oregano"),
  ...driedGoods.filter(item => item.name === "Bread Crumbs"),
]

//dipping sauce
const limeCreamaIngredients = [
  ...produce.filter(item => item.name === "Lime"),
  ...seasoning.filter(item => item.name === "Smoked Paprika"),
  ...sauce.filter(item => item.name === "Mayonnaise" || item.name === "Sour Cream"), 
]
const garlicMayoIngredients = [
  ...sauce.filter(item => item.name === "Mayonnaise" ),
  ...produce.filter(item => item.name === "Garlic"),
]

// Recipies
const recipes = [
  { name: "Alison's Famous GF Cookies",
  ingredients: cookieIngredients,
  image: 'images/cookies.jpeg',
  instructions:'instructions/',
  link: ''
  },
  { name: "Dielawn's Breakfast",
  ingredients: dillonsBreakfastIngredients,
  image: 'images/bagel-banana.jpeg',
  instructions:'instructions/',
  link: ''
  },
  { name: "Alison's Breaksfast",
  ingredients: alisonsBreakfastIngredients,
  image: 'images/breakfast-shake.jpeg',
  instructions:'instructions/',
  link: ''
  },

    { name: 'Sweet Chili Pork Bowls', 
    ingredients: sweetChiliPorkBowlIngredients, 
    image: 'images/sweet-chili-pork-bowls.avif',
    instructions:'instructions/sweet-chili-pork-bowls.pdf',
    link: 'https://www.hellofresh.com/recipes/sweet-chili-pork-bowls-5efb358e43975d50ea6927d2'
},
{ name: 'One-Pan Cajun Pork Sausage Skillet',
ingredients: onePanCajunPorkSausageSkilletIngredients,
image: 'images/one-pan-cajun-pork-sausage-skillet.avif',
instructions:'instructions/one-pan-cajun-pork-sausage-skillet.pdf',
link: 'https://www.hellofresh.com/recipes/one-pan-cajun-pork-sausage-skillet-61e6f0ac9853836f347a1f1d'
},
{ name: 'Pork Sausage and Bell Pepper Risotto',
ingredients: porkSausageAndBellPepperRisottoIngredients,
image: 'images/pork-sausage-bell-pepper-risotto.avif',
instructions:'instructions/pork-sausage-bell-pepper-risotto.pdf',
link: 'https://www.hellofresh.com/recipes/pork-sausage-bell-pepper-risotto-617041791f771a6a0b36e4b2'
},
{ name: 'Sesame Soy Pork Bowls',
ingredients: sesameSoyPorkBowlIngredients,
image: 'images/sesame-soy-pork-bowl.avif',
instructions:'instructions/sesame-soy-pork-bowls.pdf',
link: 'https://www.hellofresh.com/recipes/sesame-soy-pork-bowls-5fa06a5f20b9661c0d5e342f'
},
{ name: 'Yucatan Citrus Chicken Bowl',
ingredients: yucatanCitrusChickenBowlIngredients,
image: 'images/yucatan-citrus-chicken-bowls.avif',
instructions:'instructions/yucatan-citrus-chicken-bowls.pdf',
link: 'https://www.hellofresh.com/recipes/yucatan-citrus-chicken-bowls-621e8530b089c66fdb1a5599'
},
{ name: 'Chimi Chicken & Yellow Rice Bowls',
ingredients: chimiChickenAndYellowRiceBowlIngredients,
image: 'images/chimi-chicken-yellow-rice-bowls.avif',
instructions:'instructions/chimi-chicken-yellow-rice-bowls.pdf',
link: 'https://www.hellofresh.com/recipes/chimi-chicken-yellow-rice-bowls-5e5e9a73e0678c51867e16db'
},
{ name: 'Veggie Burrito Bowl',
ingredients: veggieBurritoBowlIngredients,
image: 'images/veggie-burrito-bowl.avif',
instructions:'instructions/veggie-burrito-bowl.pdf',
link: 'https://www.hellofresh.com/recipes/veggie-burrito-bowls-5e5ea67325ed1a2b107a3598'
},
{ name: 'Thai Basil Beef Bowls',
ingredients: thaiBasilBeefBowlIngredients,
image: 'images/thai-basil-beef-bowls.avif',
instructions:'instructions/thai-basil-beef-bowls.pdf',
link: 'https://www.hellofresh.com/recipes/thai-basil-beef-bowls-5e39b0b7055a3835f148531a'
},
{ name: 'Chicken Sausage & Rice Skillet',
ingredients: southwestChickedSausageAndRiceSkilletIngredients,
image: 'images/southwest-chicken-sausage-rice-skillet.avif',
instructions:'instructions/southwest-chicken-sausage-rice-skillet.pdf',
link: 'https://www.hellofresh.com/recipes/southwest-chicken-sausage-rice-skillet-6076d3ba1b35831bb538d476'
},
{ name: 'Pork & Zucchini Bibimbap',
ingredients: porkAndZucchiniBibimbapIngredients,
image: 'images/pork-and-veggie-bibimbap.avif',
instructions:'instructions/pork-and-veggie-bibimbap.pdf',
link: 'https://www.hellofresh.com/recipes/pork-and-veggie-bibimbap-5e67d7511082fd2292725cfc'
},
{ name: 'Teriyaki Pork Luau Bowls',
ingredients: teriyakiPorkLuauBowlIngredients,
image: 'images/teriyaki-pork-luau-bowls.avif',
instructions:'instructions/teriyaki-pork-luau-bowls.pdf',
link: 'https://www.hellofresh.com/recipes/teriyaki-pork-luau-bowls-5fa56ef97511fc2549429dc0'
},
{ name: 'Gouda Pork Burgers',
ingredients: goudaPorkBurgerIngredients,
image: 'images/gouda-pork-burgers.avif',
instructions:'instructions/gouda-pork-burgers.pdf',
link: 'https://www.hellofresh.com/recipes/gouda-pork-burgers-5e838042d6f999558005b0da'
},


{ name: 'Firehouse Cheeseburgers',
ingredients: firehouseCheeseburgersIngredients,
image: 'images/firehouse-cheeseburgers.avif',
instructions:'instructions/firehouse-cheeseburgers.pdf',
link: 'https://www.hellofresh.com/recipes/firehouse-cheeseburgers-609bd8375e0e4108d54ad302'
},
{ name: 'Melty Monterey Jack Burger',
ingredients: meltyMontereyJackBurgersIngredients,
image: 'images/melty-monterey-jack-burgers.avif',
instructions:'instructions/melty-monterey-jack-burgers.pdf',
link: 'https://www.hellofresh.com/recipes/melty-monterey-jack-burgers-5e25f552b9721f76446c7585'
},
{ name: 'Ancho BBQ Sloppy Joes',
ingredients: anchoBbqSloppyJoesIngredients,
image: 'images/ancho-bbq-sloppy-joes.avif',
instructions: 'instructions/ancho-bbq-sloppy-joespdf.pdf',
link: 'https://www.hellofresh.com/recipes/ancho-bbq-sloppy-joes-6231e882e5574621ea0c8d10'
},

{ name: 'Bacon Buckaroo Burger',
ingredients: baconBuckarooBurgerIngredients,
image: 'images/bacon-buckaroo-burger.avif',
instructions:'instructions/bacon-buckaroo-burgers.pdf',
link: 'https://www.hellofresh.com/recipes/bacon-buckaroo-burgers-60f82814e088b95c6b25fb6e'
},
{ name: 'White Cheddar Wonder Burger',
ingredients: whiteCheddarWonderBurgerIngredients,
image: 'images/white-cheddar-wonder-burger.avif',
instructions:'instructions/white-cheddar-wonderburgers.pdf',
link: 'https://www.hellofresh.com/recipes/white-cheddar-wonderburgers-61cb23eb4547a11c25516b1e'
},
{ name: 'BBQ Cheddar Burger',
ingredients: bbqCheddarBurgerIngredients,
image: 'images/bbq-cheddar-burgers.avif',
instructions:'bbq-cheddar-burgers.pdf',
link: 'https://www.hellofresh.com/recipes/bbq-cheddar-burgers-61f18805e6fc5466ef777d06'
},
{ name: 'Crispy Cajun Chicken Sandwiches',
ingredients: crispyCajunChickenSandwichesIngredients,
image: 'images/crispy-cajun-chicken-sandwiches.avif',
instructions:'instructions/crispy-cajun-chicken-sandwiches.pdf',
link: 'https://www.hellofresh.com/recipes/crispy-cajun-chicken-sandwiches-611d61d0ba10940c4d444561'
},
{ name: 'BBQ Pineapple Flatbread',
ingredients: bbqPineappleFlatbreadIngredients,
image: 'images/bbq-pineapple-flatbread.avif',
instructions:'instructions/bbq-pineapple-flatbreads.pdf',
link: 'https://www.hellofresh.com/recipes/bbq-pineapple-flatbreads-620c20eaaf420111a021e19a'
},
{ name: 'Zucchini & Tomato Flatbreads',
ingredients: zucchiniTomatoFlatbreadsIngredients,
image: 'images/zucchini-and-tomato-flatbreads.avif',
instructions:'instructions/zucchini-and-tomato-flatbreads.pdf',
link: 'https://www.hellofresh.com/recipes/zucchini-and-tomato-flatbreads-5e67d93735c3537f181f43c8'
},
{ name: 'Bacon Jalapeno Mac & Cheese',
ingredients: baconJalapenoMacAndCheeseIngredients,
image: 'images/bacon-jalapeno-mac-cheese.avif',
instructions:'instructions/bacon-jalapeno-mac-cheese.pdf',
link: 'https://www.hellofresh.com/recipes/bacon-jalapeno-mac-cheese-615db9700ab39518157b909f'
},
{ name: 'Epic Nacho Mac & Cheese',
ingredients: epicNachoMacAndCheeseIngredients,
image: 'images/epic-nacho-mac-cheese.avif',
instructions:'instructions/epic-nacho-mac-cheese.pdf',
link: 'https://www.hellofresh.com/recipes/epic-nacho-mac-n-cheese-6171950af588a0150a5570f4'
},
{ name: 'Sheet Pan Monterey Jack Chicken',
ingredients: sheetPanMontereyJackChickenIngredients,
image: 'images/monterey-jack-un-fried-chicken.avif',
instructions:'instructions/monterey-jack-un-fried-chicken.pdf',
link: 'https://www.hellofresh.com/recipes/monterey-jack-un-fried-chicken-61f9829bc37180194a54cb5b'
},
{ name: 'Bulgogi Pork Tenderloin',
ingredients: bulgogiPorkTenderloinIngredients,
image: 'images/bulgogi-pork-tenderloin.avif',
instructions:'instructions/bulgogi-pork-tenderloin.pdf',
link: 'https://www.hellofresh.com/recipes/bulgogi-pork-tenderloin-61d4c2208a7a0c7c44733a7d'
},
{ name: 'Honey Thyme Pork Tenderloin',
ingredients: honeyThymePorkTenderloinIngredients,
image: 'images/honey-thyme-pork-tenderloin.avif',
instructions:'instructions/honey-thyme-pork-tenderloin.pdf',
link: 'https://www.hellofresh.com/recipes/honey-thyme-pork-tenderloin-615db8f220008b2e0307f097'
},
{ name: 'Peachy Keen BBQ-Rubbed Pork Chops',
ingredients: peachyKeenBbqRubbedPorkChopsIngredients,
image: 'images/peachy-keen-bbq-rubbed-pork-chops.avif',
instructions:'instructions/peachy-keen-bbq-rubbed-pork-chops.pdf',
link: 'https://www.hellofresh.com/recipes/peachy-keen-bbq-rubbed-pork-chops-61795d17951b0e24e516bead'
},
{ name: 'Steakhouse-Style Pork Chops',
ingredients: steakhouseStylePorkChopsIngredients,
image: 'images/steakhouse-pork-chops.avif',
instructions:'instructions/steakhouse-pork-chops.pdf',
link: 'https://www.hellofresh.com/recipes/steakhouse-pork-chops-5ff4c5c85811d66eb9512c50'
},
{ name: 'Balsamic and Fig Beef Tenderloin',
ingredients: balsamicAndFigBeefTenderloinIngredients,
image: 'images/balsamic-fig-beef-tenderloin.avif',
instructions:'instructions/balsamic-fig-beef-tenderloin.pdf',
link: 'https://www.hellofresh.com/recipes/balsamic-fig-beef-tenderloin-5f3aeb9bad6a05609c7d8cac'
},
{ name: 'Al Pastor Pulled Pork Tacos',
ingredients: alPastorPulledPorkTacoIngredients,
image: 'images/al-pastor-pulled-pork-tacos.avif',
instructions:'instructions/al-pastor-pulled-pork-tacos.pdf',
link: 'https://www.hellofresh.com/recipes/al-pastor-pulled-pork-tacos-6239d8fa96d43a56f83be59f'
},
{ name: 'Cheesy Beef Tostadas',
ingredients: cheesyBeefTostadasIngredients,
image: 'images/cheesy-beef-tostadas.avif',
instructions:'instructions/cheesy-beef-tostadas.pdf',
link: 'https://www.hellofresh.com/recipes/cheesy-beef-tostadas-5e94c0640d7f123476528c9e'
},

{ name: 'Rio Rancho Pulled Pork Tacos',
ingredients: rioRanchoPulledPorkTacoIngredients,
image: 'images/rio-rancho-pulled-pork-tacos.avif',
instructions:'instructions/rio-rancho-pulled-pork-tacos.pdf',
link: 'https://www.hellofresh.com/recipes/rio-rancho-pulled-pork-tacos-5e5ce98d740b5917bc02d716'
},



{ name: 'Black Bean & Pepper Quesadillas',
ingredients: blackBeanPepperQuesadillaIngredients,
image: 'images/black-bean-quesadillas.avif',
instructions:'instructions/black-bean-quesadillas.pdf',
link: 'https://www.hellofresh.com/recipes/black-bean-quesadillas-5e94c48ee884b05a1c0e32c2'
},
{ name: 'One-Pan Pork Fajita Lettuce Wrap',
ingredients: onePanPorkFajitaLettuceWrapngredients,
image: 'images/one-pan-pork-fajita-lettuce-cups.avif',
instructions:'instructions/one-pan-pork-fajita-lettuce-cups.pdf',
link: 'https://www.hellofresh.com/recipes/one-pan-pork-fajita-lettuce-cups-6231f20c57fc3010631bb574'
},
{ name: 'Chicken Enchiladas Verdes',
ingredients: chickednEnchiladasVerdesIngredients,
image: 'images/salsa-verde-chicken-enchiladas.avif',
instructions:'instructions/salsa-verde-chicken-enchiladas.pdf',
link: 'https://www.hellofresh.com/recipes/salsa-verde-chicken-enchiladas-5dfd0bae39b70a23332c4678'
},
{ name: 'Steak and Green Pepper Quesadillas',
ingredients: steakAndGreenPepperQuesadillasIngredients,
image: 'images/steak-green-pepper-quesadillas.avif',
instructions:'instructions/steak-green-pepper-quesadillas.pdf',
link: 'https://www.hellofresh.com/recipes/steak-green-pepper-quesadillas-5ea8310a56a9d32f9d717bc9'
},
{ name: 'Chicken Pineapple Qesadillas',
ingredients: chickenPineappleQuesadillasIngredients,
image: 'images/chicken-pineapple-quesadillas.avif',
instructions:'instructions/chicken-pineapple-quesadillas.pdf',
link: 'https://www.hellofresh.com/recipes/chicken-pineapple-quesadillas-5e5026694cd03e416b3ebf93'
},
{ name: 'Pork & Poblano Tacos',
ingredients: porkAndPoblanoTacoIngredients,
image: 'images/pork-and-poblano-tacos.avif',
instructions:'instructions/pork-and-poblano-tacos.pdf',
link: 'https://www.hellofresh.com/recipes/pork-and-poblano-tacos-5d35c6b276961900177709c0'
},
{ name: 'Melty Double Red Pepper Panini',
ingredients: meltyDoubleRedPepperPaniniIngredients,
image: 'images/double-red-pepper-panini.avif',
instructions:'instructions/double-red-pepper-panini.pdf',
link: 'https://www.hellofresh.com/recipes/double-red-pepper-panini-6239d8a288ef2226660b2f87'
},
{ name: 'Harissa Sweet Potato pockets',
ingredients: harissaSweetPotatoPocketIngredients,
image: 'images/harissa-sweet-potato-pita-pockets.avif',
instructions:'instructions/harissa-sweet-potato-pita-pockets.pdf',
link: 'https://www.hellofresh.com/recipes/harissa-sweet-potato-pita-pockets-5f15dcd008c01b2af5444822'
},
{ name: "Mushroom & Herb Shepherd's Pie",
ingredients: mushroomHerbSheperdsPieIngredients,
image: 'images/mushroom-herb-shepherd-s-pie.avif',
instructions:'instructions/mushroom-herb-shepherd-s-pie.pdf',
link: 'https://www.hellofresh.com/recipes/mushroom-herb-shepherd-s-pie-614b46bfcbfa3317d5247f22'
},
{ name: 'One-Pot Beef & Black Bean Chili',
ingredients: onePotBeefBlackBeanChiliIngredients,
image: 'images/one-pot-beef-black-bean-chili.avif',
instructions:'instructions/one-pot-beef-black-bean-chili.pdf',
link: 'https://www.hellofresh.com/recipes/one-pot-beef-black-bean-chili-5d76b40292f8cd000f15374a'
},
{ name: 'Chicken Garlic Parmesan Spaghetti',
ingredients: chickenOverGarlicParmesanSpaghettiIngredients,
image: 'images/chicken-over-garlic-parmesan-spaghetti.avif',
instructions:'instructions/chicken-over-garlic-parmesan-spaghetti.pdf',
link: 'https://www.hellofresh.com/recipes/chicken-over-garlic-parmesan-spaghetti-60dc72a95854557dcb6bd5aa'
},
{ name: 'Parmesan-Crusted Chicken',
ingredients: parmesanCrustedChickenIngredients,
image: 'images/parmesan-crusted-chicken.avif',
instructions:'instructions/parmesan-crusted-chicken.pdf',
link: 'https://www.hellofresh.com/recipes/parmesan-crusted-chicken-5eb9ae9de88fa8571c5fbc7c'
},
{ name: 'Balsamic Tomato & Herb Chicken',
ingredients: balsamicTomatoHerbChickenIngredients,
image: 'images/balsamic-tomato-herb-chicken.avif',
instructions:'instructions/balsamic-tomato-herb-chicken.pdf',
link: 'https://www.hellofresh.com/recipes/balsamic-tomato-herb-chicken-61b8a9de22509a6288133045'
},
{ name: 'Creamy Parmesan Chicken Spaghetti',
ingredients: creamyParmesanChickenSpaghettiIngredients,
image: 'images/creamy-parmesan-chicken-spaghetti.avif',
instructions:'instructions/creamy-parmesan-chicken-spaghetti.pdf',
link: 'https://www.hellofresh.com/recipes/creamy-parmesan-chicken-spaghetti-5e430636195e8804526bc4e4'
},
{ name: 'Chicken Parm Over Spaghetti',
ingredients: chickenParmOverSpaghettiIngredients,
image: 'images/chicken-parm-over-spaghetti.avif',
instructions:'instructions/chicken-parm-over-spaghetti.pdf',
link: 'https://www.hellofresh.com/recipes/chicken-parm-over-spaghetti-6076d40764e0061aa9040d7c'
},
{ name: 'Sun-Dried Tomato Spaghetti',
ingredients: sunDriedTomatoSpaghettiIngredients,
image: 'images/sun-dried-tomato-spaghetti.avif',
instructions:'instructions/sun-dried-tomato-spaghetti.pdf',
link: 'https://www.hellofresh.com/recipes/sun-dried-tomato-spaghetti-6231ef8d59a1d65a30536f97'
},


{ name: 'template',
ingredients: '',
image: 'images/',
instructions:'instructions/',
link: ''
},
//sides
{ name: 'Potato Wedges',
ingredients: potatoWedgeIngredients,
image: 'images/potato-wedges.jpg',
instructions:'instructions/gouda-pork-burgers.pdf',
link: 'https://www.hellofresh.com/recipes/gouda-pork-burgers-5e838042d6f999558005b0da'
},
{ name: 'Zucchini Spears',
ingredients: zucchiniSpearsIngredients,
image: 'images/zucchini-spears.webp',
instructions:'instructions/melty-monterey-jack-burgers.pdf',
link: 'https://www.hellofresh.com/recipes/melty-monterey-jack-burgers-5dadc36bcd481422887d8d73'
},
{ name: 'Oven Gold Potatoes',
ingredients: ovenGoldPotatoesIngredients,
image: 'images/oven-gold-potatoes.jpg',
instructions: 'instructions/ancho-bbq-sloppy-joespdf.pdf',
link: 'https://www.hellofresh.com/recipes/ancho-bbq-sloppy-joes-6231e882e5574621ea0c8d10'
},
{ name: 'Cheesy Loaded Potato Rounds',
ingredients: cheesyLoadedPotatoRoundsIngredients,
image: 'images/cheesy-loaded-potato-rounds.jpg',
instructions:'instructions/bacon-buckaroo-burgers.pdf',
link: 'https://www.hellofresh.com/recipes/bacon-buckaroo-burgers-60f82814e088b95c6b25fb6e'
},

//sauces
{ name: 'Lime Crema',
ingredients: limeCreamaIngredients,
image: 'images/lime-crema.jpg',
instructions:'instructions/gouda-pork-burgers.pdf',
link: 'https://www.hellofresh.com/recipes/gouda-pork-burgers-5e838042d6f999558005b0da'
},
{ name: 'Garlic Mayo',
ingredients: garlicMayoIngredients,
image: 'images/garlic-mayonnaise.webp',
instructions:'instructions/melty-monterey-jack-burgers.pdf',
link: 'https://www.hellofresh.com/recipes/melty-monterey-jack-burgers-5e25f552b9721f76446c7585'
},
]


let groceryList = []
let savedRecipes = []

const searchDiv = document.getElementById('searchDiv')
const listDiv = document.getElementById('listDiv');

const servingInput = document.getElementById('servingInput');
const itemInput = document.getElementById('itemInput')
const qtyInput = document.getElementById('qtyInput')
const unitInput = document.getElementById('unitInput')
const aisleInput = document.getElementById('aisleSelect')

const loadLocalStorageList = () => {
  if (groceryList.length === 0) {
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const value = localStorage.getItem(key);
      console.log('key:', key, 'value:', value)
      if(key.startsWith('ingredient')){
        const item = JSON.parse(value);
        groceryList.push(item);
      }else {
        const item = JSON.parse(value)
        savedRecipes.push(item)
      }
      
    } 
    sortGroceryListByAisle(groceryList)
    renderList(groceryList);
    for(let i =0; i < savedRecipes.length; i++){
      let recipeName = savedRecipes[i]
      renderSelectedRecipes(recipeName)
    }
    
  }
}


const saveToLocalStorage = (key, value, list) => {  
  console.log(list)
  for(let i = 0; i < list.length; i++){
    let itemKey = 'ingredient' + i
    let itemValue = { name: list[i].name, qty: list[i].qty, unit: list[i].unit, aisle: list[i].aisle }
    console.log(itemKey, itemValue, )
    localStorage.setItem(key, JSON.stringify(value));    
  }
  let mealList = document.getElementsByClassName('meal-list')
  console.log(mealList.length)
  for(let i = 0; i < mealList.length; i++){
    let itemKey = 'selected' + i
    let itemValue = (mealList[i].textContent)    
    console.log(itemKey, itemValue)
    localStorage.setItem(itemKey, JSON.stringify(itemValue))
  }
}



const createBtn = (parent, text, btnName) => {
  const parentDiv = document.getElementById(parent)
  let btn = document.createElement('button');
    parentDiv.appendChild(btn);
    btn.textContent = text;
    btn.classList.add(btnName);
    btn.id = btnName
}


const pdfList = () => {
  const doc = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4",
  });
  
  const shoppingListElement = document.querySelectorAll(".shopping-list");
  let myListText = "";
  shoppingListElement.forEach((element) => {
    const itemName = element.textContent.slice(0, -1);
    myListText += itemName + "\n";
  });

  const mealElements = document.querySelectorAll(".meal-list");
  let selectedMeals = "";
  mealElements.forEach((element) => {
    selectedMeals += element.textContent + "\n";
  });
    
// set up the columns
  const col1Width = doc.internal.pageSize.width / 2 - 10;
  const col2Width = doc.internal.pageSize.width / 2 - 10;
  const col1Start = 8;
  const col2Start = doc.internal.pageSize.width / 2 + 10;
  doc.setFillColor(256, 256, 256);
  doc.rect(col1Start, 10, col1Width, 250, "F");
  doc.rect(col2Start, 10, col2Width, 250, "F");

  doc.setFontSize(10);
  doc.setTextColor(0, 0, 0);
  
  doc.text(myListText, col1Start + 10, 20);
  
  doc.setFontSize(10); // Add this line to set font size before calling doc.text()
  doc.text(selectedMeals, col2Start + 10, 20);
  
  doc.save("grocery-list.pdf");
  // doc.save('meal-list.pdf')
  
}



const addItem = (item, qty, unit, aisle) => {
  groceryList.push({ name: item, qty: qty, unit: unit, aisle: aisle })
  sortGroceryListByAisle(groceryList)    
  renderList(groceryList)
  displayHideForm()
}




const addRecipeToList = (list) => {
  for(let i = 0; i < list.length; i++){
    let ingredient = list[i]
    groceryList.push({ name: ingredient.name, qty: ingredient.qty, unit: ingredient.unit, aisle: ingredient.aisle })

  }
  console.log(groceryList)
  return groceryList
}


const consolidateGroceryList = (list) => {
  const consolidatedList = {};
  let i;
  for (i = 0; i < list.length; i++) {
    const ingredient = list[i];
    const key = `${ingredient.unit} ${ingredient.name} `;
    if (key in consolidatedList) {
      consolidatedList[key].qty += ingredient.qty;
    } else {
      consolidatedList[key] = {...ingredient}; // make a copy of the ingredient object
    }
  }
  const consolidatedGroceryList = Object.values(consolidatedList);
  console.log('before',groceryList)
  groceryList = consolidatedGroceryList;
  console.log('after',groceryList)
  
};



  
  const sortGroceryListByAisle = (list) => {
    // Define the order of aisles
    const aisleOrder = ['dairy', 'freezer', 'cheese', 'snack', 'butcher', 'ethnic', 'noodle',  'canned', 'baking', 'cereal', 'condiment', 'bakery', 'produce', 'nutrition', '']
    console.log(list, groceryList)
    // Add the aisle property to each item in the list
    const listWithAisle = list.map(item => {
      return {
        name: item.name,
        qty: item.qty,
        unit: item.unit,
        aisle: item.aisle
      };
    });
    
    // Sort the list based on the order of aisles
    listWithAisle.sort((a, b) => {
      const aIndex = aisleOrder.indexOf(a.aisle)
      const bIndex = aisleOrder.indexOf(b.aisle)
      if (aIndex < bIndex) {
        return -1
      } else if (aIndex > bIndex) {
        return 1
      } else {
        return 0
      }
    })
    
    groceryList = listWithAisle;
    return groceryList
}

let selectedMealListDiv = document.getElementById('mealListDiv')

const renderSelectedRecipes = (recipeName) => {
  let listElement = document.createElement('div');  
  listElement.classList = 'meal-list';
  if(recipeName === 'clearList'){
    console.log('list cleared')
    selectedMealListDiv.innerHTML = ''
  }else {
    listElement.textContent += `${recipeName}`
    selectedMealListDiv.appendChild(listElement)
  }  
}



const renderList = (list) => {    
  listDiv.innerHTML = ''; // clear the container before adding new elements  
  let servingSize = servingInput.value;
  if(servingSize === ''){
    servingSize = 1
  }

  for (let i = 0; i < list.length; i++) {
    let listElement = document.createElement('div');
    let removeBtn = document.createElement('button');

    let quantity = list[i].qty;
    let adjustedQuantity = quantity * servingSize;
      
    listDiv.appendChild(listElement);
    listElement.classList = 'shopping-list';
    listElement.id = 'shoppingList'
    listElement.textContent = `${list[i].name} ${adjustedQuantity}, ${list[i].unit}`;
    listElement.appendChild(removeBtn);

    removeBtn.textContent = 'X';
    removeBtn.classList = 'removeBtn'
    removeBtn.addEventListener('click', createRemoveListener(listElement, i));
  
  }
};

const createRemoveListener = (listElement, itemIndex) => {
  return () => {
    listElement.remove(); // remove the list element from the DOM
    let itemName = listElement.textContent;
    let index = groceryList.findIndex(item => item.name === itemName);
    let localStorageKey = 'ingredient' + itemIndex
    console.log(`groceryList Index: ${index} localstorage key:${localStorageKey}`)
    if(localStorage.length !== 0){
      localStorage.removeItem(localStorageKey)
    }
    console.log(localStorage)
    if (index !== -1) {
      console.log(index, groceryList)
      groceryList.splice(index, 1); // remove the item from the list
      console.log(index, groceryList)
    }
  };
};

let recipeDiv = document.getElementById('recipeDiv');
  
  const renderRecipes = (recipeList) => {   
    for (let i = 0; i < recipeList.length; i++) {
      let recipeName = recipeList[i].name
      let recipeElement = document.createElement('div');      
      recipeDiv.appendChild(recipeElement);
      recipeElement.classList.add('recipe');
      recipeElement.innerHTML = recipeName;

    let recipeLink = document.createElement('a');
    recipeLink.href = recipeList[i].instructions;
    recipeElement.appendChild(recipeLink);
  
    let recipeImageElement = document.createElement('img');
    recipeLink.appendChild(recipeImageElement);
    recipeImageElement.src = recipeList[i].image;
    recipeImageElement.classList.add('recipeImg');

    let addBtn = document.createElement('button');
    recipeElement.appendChild(addBtn);
    addBtn.textContent = 'Add';
    addBtn.classList.add('addBtn');
    
    // Add event listener to each button
    addBtn.addEventListener('click', () => {
      addRecipeToList(recipeList[i].ingredients)
      renderSelectedRecipes(recipeName)
      sortGroceryListByAisle(groceryList)    
      renderList(groceryList)
      });
      
    }
  };

createBtn('buttonDiv', 'Combine/Save', 'consolidateBtn')
const combineSaveBtn = document.getElementById('consolidateBtn')
combineSaveBtn.addEventListener('click',() => {
  consolidateGroceryList(groceryList)
  for(let i = 0; i < groceryList.length; i++){
    let itemKey = 'ingredient' + i
    console.log(groceryList[i].name)
    let itemValue = { name: groceryList[i].name, qty: groceryList[i].qty, unit: groceryList[i].unit, aisle: groceryList[i].aisle }
    saveToLocalStorage(itemKey, itemValue, groceryList)
  } 
  renderList(groceryList)
}) 

createBtn('buttonDiv', 'Clear List', 'clearListBtn')
const clearListBtn = document.getElementById('clearListBtn')
clearListBtn.addEventListener('click', () => {
  clearLocalStorage()
  groceryList = []
  renderList(groceryList)
  renderSelectedRecipes('clearList')
})

createBtn('buttonDiv', 'Generate PDF', 'pdfBtn')
const dwnldPDFBtn = document.getElementById('pdfBtn')
dwnldPDFBtn.addEventListener('click',() => {
  console.log('pdf1')
  pdfList()
})

createBtn('buttonDiv', 'Add Item', 'addItemFormBtn')
const formBtn = document.getElementById('addItemFormBtn')
formBtn.addEventListener('click', () => {
displayHideForm()
})

createBtn('addItemDiv', 'Add Item to List', 'addItemBtn')
const addItemBtn = document.getElementById('addItemBtn')
addItemBtn.addEventListener('click', () => {
  addItem(itemInput.value, qtyInput.value, unitInput.value, aisleInput.value)
  
})

createBtn('buttonDiv', 'View List', 'viewListBtn')
const viewListBtn = document.getElementById('viewListBtn')
viewListBtn.addEventListener('click', () => {
  console.log(viewListBtn.textContent)
  displayHideList()
  displayHideButtons()
})

//   createBtn('buttonDiv', 'Save List', 'saveBtn')
//   document.getElementById('saveBtn').addEventListener('click', () => {  
//     for(let i = 0; i < groceryList.length; i++){
//       let itemKey = 'ingredient' + i
//       console.log(groceryList[i].name)
//       let itemValue = { name: groceryList[i].name, qty: groceryList[i].qty, unit: groceryList[i].unit, aisle: groceryList[i].aisle }
//       saveToLocalStorage(itemKey, itemValue, groceryList)
//     } 
// })

const displayHideForm = () => {
  const itemForm = document.getElementById('addItemDiv')
    if(itemForm.style.display === 'flex'){
      itemForm.style.display = 'none'
    } else {
      itemForm.style.display = 'flex'
    }
}

const displayHideButtons = () => {
  if(viewListBtn.textContent === 'View List'){
    viewListBtn.textContent = 'View Recipes'
    combineSaveBtn.style.display = 'block'
    dwnldPDFBtn.style.display = 'block'
    servingInput.style.display = 'block'
    formBtn.style.display = 'block'
    
  } else {
    viewListBtn.textContent = 'View List'
    combineSaveBtn.style.display = 'none'
    dwnldPDFBtn.style.display = 'none'
    servingInput.style.display = 'none' 
    formBtn.style.display = 'none'
    
  }
 }

const displayHideList = () => { 
    if(recipeDiv.style.display !== 'none'){
      recipeDiv.style.display = 'none'
      listDiv.style.display = 'flex'      
      selectedMealListDiv.style.display = 'none'
      searchDiv.style.display = 'none'
    } else {
      recipeDiv.style.display = 'flex'
      listDiv.style.display = 'none'     
      selectedMealListDiv.style.display = 'flex'
      searchDiv.style.display = 'block'
    }
  }

const clearLocalStorage = (key) => {
  localStorage.clear();
}

const searchRecipesByKeyword = (keyword) => {
  console.log(keyword)
  const matchingRecipes = []
  for(let i = 0; i < recipes.length; i++){
    // Check if the ingredients property is an array before calling the some() method
    if(Array.isArray(recipes[i].ingredients) && recipes[i].ingredients.some(item => item.name.toLowerCase().includes(keyword.toLowerCase()))) {
      // If the recipe has the keyword in its ingredients, add it to the matchingRecipes list
      matchingRecipes.push({name: recipes[i].name, ingredients: recipes[i].ingredients, image: recipes[i].image, instructions: recipes[i].instructions, link: recipes[i].link });
    }
  }
  recipeDiv.innerHTML = ''
  renderRecipes(matchingRecipes)
}

renderRecipes(recipes);



createBtn('searchDiv', 'Search', 'searchBtn')
searchBtn.addEventListener('click', () => { 
  let searchInput = document.getElementById('searchInput')
  searchRecipesByKeyword(searchInput.value)
  createBtn('searchDiv', 'Full List', 'fullListBtn')
  searchInput.value = ''
  document.getElementById('fullListBtn').addEventListener('click', () => {
    searchRecipesByKeyword('')
    document.getElementById('fullListBtn').remove()
  })
})






loadLocalStorageList()
