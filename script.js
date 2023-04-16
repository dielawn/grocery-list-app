//all units are single serving

const proteins = [
  { name: 'Bacon', qty: 4, unit: 'oz', aisle: 'butcher' },

  { name: 'Chicken Breast Strips', qty: 5, unit: 'oz', aisle: 'butcher' },
  { name: 'Chicken Cutlets', qty: 5, unit: 'oz', aisle: 'butcher' },
  
  { name: 'Ground Beef', qty: 5, unit: 'oz', aisle: 'butcher' },
  { name: 'Ground Pork', qty: 5, unit: 'oz', aisle: 'butcher' },
  
];

const produce = [
  { name: 'Banana', qty: .5, unit: 'bunch', aisle: 'produce' },
  { name: 'Basil', qty: .5, unit: 'oz', aisle: 'produce' },
  { name: 'Bell Pepper', qty: .5, unit: '', aisle: 'produce'},

  { name: 'Carrots', qty: .5, unit: 'oz', aisle: 'produce' },
  { name: 'Chili Pepper', qty: .5, unit: '', aisle: 'produce' },
  { name: 'Cilantro', qty: .125, unit: 'oz', aisle: 'produce' },

  { name: 'Garlic', qty: 1, unit: 'Clove', aisle: 'produce' },
  { name: 'Ginger', qty: .5, unit: 'Thumb', aisle: 'produce' },

  { name: 'Kiwi', qty: .5, unit: '', aisle: 'produce' },

  { name: 'Lemon', qty: .5, unit: '', aisle: 'produce' },
  { name: 'Lime', qty: .5, unit: '', aisle: 'produce' },
  { name: 'Long Green Pepper', qty: .5, unit: '', aisle: 'produce' },

  { name: 'Poblano Pepper', qty: .5, unit: '', aisle: 'produce' },
 
  { name: 'Red Onion', qty: .5, unit: '', aisle: 'produce' },  
  { name: 'Roma Tomato', qty: .5, unit: '', aisle: 'produce' },
 
  { name: 'Scallions', qty: .5, unit: 'oz', aisle: 'produce' },
  { name: 'Shallot', qty: .5, unit: '', aisle: 'produce' },
  { name: 'Shredded Carrots', qty: 2, unit: 'oz', aisle: 'produce' },
  { name: 'Spinach', qty: 1, unit: 'cup', aisle: 'produce' },
  
  { name: 'Yellow Onion', qty: .5, unit: '', aisle: 'produce' },
  { name: 'Yukon Gold Potato', qty: 6, unit: 'oz', aisle: 'produce' },
 
  { name: 'Zucchini', qty: .5, unit: '', aisle: 'produce' },
        
]   

const grain = [
  { name: 'Brioche Buns', qty: 1, unit: 'Bun', aisle: 'bakery'},
  
  { name: 'Everything Bagel', qty: 1, unit: 'pack', aisle: 'bakery' },

  { name: 'Flatbreads', qty: 1, unit: 'crust', aisle: 'bakery' },
  
  { name: 'Jasmine Rice', qty: .5, unit: 'cup', aisle: 'ethnic' },
  
  { name: 'Potato Buns', qty: 1, unit: 'Bun', aisle: 'bakery'},
    
]

const sauce = [
  { name: "Balsamic Vinegar", qty: .25, unit: 'oz', aisle: 'condiment' },
  { name: "BBQ Sauce", qty: 2, unit: 'TBSP', aisle: 'condiment' },
  { name: 'Beef Stock Concentrate', qty: 1, unit: 'TBSP', aisle: 'canned' },
  
  { name: 'Chicken Stock Concentrate', qty: 1, unit: 'TBSP', aisle: 'canned' },

  { name: 'Dijon Mustard', qty: 1, unit: 'tsp', aisle: 'condiment' },

  { name: "Frank's Hot Sauce", qty: .25, unit: 'oz', aisle: 'condiment' },
  
  { name: 'Gochujang Sauce', qty: .5, unit: 'oz', aisle: 'ethnic' },

  { name: 'Hot Sauce', qty: 1, unit: 'tsp', aisle: 'condiment' },

  { name: "Ketchup", qty: .25, unit: 'oz', aisle: 'condiment' },

  { name: 'Mayonnaise', qty: 1, unit: 'TBSP', aisle: 'condiment' },
  { name: 'Mushroom Stock Concentrate', qty: 1, unit: 'TBSP', aisle: 'canned' },

  { name: 'Ponzu Sauce', qty: 24, unit: 'ml', aisle: 'ethnic' },

  { name: 'Ranch Dressing', qty: .75, unit: 'oz', aisle: 'condiment' },
  { name: 'Red Wine Vinegar', qty: 2.5, unit: 'tsp', aisle: 'condiment' },

  { name: 'Sesame Dressing', qty: .75, unit: 'oz', aisle: 'condiment' },
  { name: 'Sesame Oil', qty: .5, unit: 'TBSP', aisle: 'ethnic' },
  { name: 'Soy Sauce', qty: 1, unit: 'TBSP', aisle: 'ethnic' },
  { name: 'Sriracha', qty: 1, unit: 'tsp', aisle: 'ethnic' },
  { name: 'Sweet Soy Glaze', qty: 2, unit: 'TBSP', aisle: 'ethnic' },
  { name: 'Sweet Thai Chili Sauce', qty: .5, unit: 'oz', aisle: 'ethnic' },    
  
  { name: 'Teriyaki Sauce', qty: .5, unit: '', aisle: 'ethnic' },
    
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
  { name: 'Cornstarch', qty: .5, unit: 'TBSP', aisle: 'baking' },

  { name: 'Flour', qty: .5, unit: 'cup', aisle: 'baking' },
  
]

const cannedGoods = [
  { name: "Dill Pickle", qty: .5, unit: '', aisle: 'canned' },
  { name: "Pineapple", qty: 2, unit: 'oz', aisle: 'canned' },
]

const driedGoods = [
    { name: 'Bread Crumbs', qty: .125, unit: 'cup', aisle: 'baking' },

    { name: 'Crispy Fried Onion', qty: .25, unit: 'cup', aisle: 'baking' },

    { name: 'Peanuts', qty: .25, unit: 'oz', aisle: 'snack' },   
    { name: 'Protein Powder', qty: .25, unit: 'oz', aisle: 'nutrition' },
]

const seasoning = [
  { name: "Ancho Chili Powder", qty: .5, unit: 'tsp', aisle: 'baking' },

  { name: 'Cumin', qty: .5, unit: 'tsp', aisle: 'baking' },

  { name: "Dried Oregano", qty: .5, unit: 'tsp', aisle: 'baking' },

  { name: "Frank's Seasoning", qty: .5, unit: '', aisle: 'baking' },
  { name: "Fry Seasoning", qty: .5, unit: 'TBSP', aisle: 'baking' },

  { name: "Garlic Powder", qty: .5, unit: 'tsp', aisle: 'baking' },

  { name: 'Smoked Paprika', qty: .5, unit: 'tsp', aisle: 'baking' },

  { name: 'Tumeric', qty: .5, unit: 'tsp', aisle: 'baking' },
  
  { name: 'Old Bay Seasoning', qty: .5, unit: 'TBSP', aisle: 'baking' },

  { name: 'Cajun Spice Blend', qty: 1, unit: 'TBSP', aisle: 'baking' },
]

const dairy = [
  { name: 'Cream Cheese', qty: 2, unit: 'TBSP', aisle: 'cheese' },

  { name: 'Gouda Cheese', qty: 1, unit: 'Slice', aisle: 'cheese' },

  { name: 'Monterey Jack Cheese', qty: 1, unit: 'Slice', aisle: 'cheese' },
  { name: 'Mozzearella Fresh', qty: .5, unit: 'Block', aisle: 'cheese' },

  { name: 'Pepper Jack Cheese', qty: 1, unit: 'Slice', aisle: 'cheese' },

  { name: 'Sour Cream', qty: 1, unit: 'TBSP', aisle: 'dairy' },

  { name: 'Yogurt', qty: .25, unit: 'cup', aisle: 'dairy' },

  { name: 'White Cheddar Cheese', qty: 1, unit: 'Slice', aisle: 'cheese' },
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
    ...produce.filter(item => item.name === "Shallot" || item.name === "Bell Pepper" || item.name === "Ginger" || item.name === "Lime" || item.name === "Basil"),
    ...sauce.filter(item => item.name === "Mushroom Stock Concentrate" || item.name === "Ponzu Sauce" || item.name === "Mayonnaise" || item.name === "Sriracha"), 
    ...driedGoods.filter(item => item.name === "Peanuts"),
    ...grain.filter(item => item.name === "Jasmine Rice")
  ]
const porkAndZucchiniBibimbapIngredients = [
  ...proteins.filter(item => item.name === "Ground Pork"),
  ...produce.filter(item => item.name === "Scallions" || item.name === "Carrots" || item.name === "Zucchini" || item.name === "Ginger" || item.name === "Garlic"),
  ...sauce.filter(item => item.name === "White Wine Vinegar" || item.name === "Sesame Oil" || item.name === "Soy Sauce" || item.name === "Gonchujang Sauce"), 
  ...grain.filter(item => item.name === "Jasmine Rice")
]
const teriyakiPorkLuauBowlIngredients = [
  ...proteins.filter(item => item.name === "Ground Pork"),
  ...produce.filter(item => item.name === "Long Green Pepper" || item.name === "Red Onion" || item.name === "Roma Tomato" || item.name === "Lime" || item.name === "Garlic"),
  ...sauce.filter(item => item.name === "Teriyaki Sauce"),    
  ...grain.filter(item => item.name === "Jasmine Rice")
]
//Burgers
const goudaPorkBurgerIngredients = [
  ...proteins.filter(item => item.name === "Ground Pork"),
  ...produce.filter(item => item.name === "Yellow Onion" || item.name === "Lime" || item.name === "Garlic"),
  ...seasoning.filter(item => item.name === "Smoked Paprika"),
  ...sauce.filter(item => item.name === "Mayonnaise" || item.name === "Sour Cream"), 
  ...dairy.filter(item => item.name === "Gouda Cheese"),
  ...grain.filter(item => item.name === "Potato Buns")
]
const firehouseCheeseburgersIngredients = [
  ...proteins.filter(item => item.name === "Ground Beef"),
  ...sauce.filter(item => item.name === "Ranch Dressing" || item.name === "Sour Cream" || item.name === "Frank's Hot Sauce"),
  ...dairy.filter(item => item.name === "Monterey Jack Cheese"),
  ...seasoning.filter(item => item.name === "Frank's Seasoning" || item.name === "Garlic Powder"),
  ...driedGoods.filter(item => item.name === "Crispy Fried Onion"),
  ...grain.filter(item => item.name === "Potato Buns")
]
const meltyMontereyJackBurgersIngredients = [
  ...proteins.filter(item => item.name === "Ground Beef"),
  ...produce.filter(item => item.name === "Yellow Onion" || item.name === "Garlic"),
  ...dairy.filter(item => item.name === "Monterey Jack Cheese"),
  ...sauce.filter(item => item.name === "Balsamic Vinegar" || item.name === "Ketchup" || item.name === "Mayonnaise"),
  ...grain.filter(item => item.name === "Potato Buns")
]
const baconBuckarooBurgerIngredients = [
  ...proteins.filter(item => item.name === "Ground Beef" || item.name === 'Bacon'),
  ...produce.filter(item => item.name === "Yellow Onion" || item.name === "Scallions" || item.name === 'Dill Pickle'),
  ...dairy.filter(item => item.name === "Pepper Jack Cheese" || item.name === 'Gouda Cheese' || item.name === 'Sour Cream'),
  ...sauce.filter(item => item.name === "BBQ Sauce"),
  ...grain.filter(item => item.name === "Brioche Buns")
]
const whiteCheddarWonderBurgerIngredients = [
  ...proteins.filter(item => item.name === "Ground Beef"),
  ...produce.filter(item => item.name === "Yellow Onion"),
  ...sauce.filter(item => item.name === "Mayonnaise" || item.name === "Dijon Mustard" || item.name === "Ketchup"), 
  ...seasoning.filter(item => item.name === "Old Bay Seasoning"),
  ...dairy.filter(item => item.name === "White Cheddar Cheese"),
  ...grain.filter(item => item.name === "Potato Buns")
]
//Sandwhich
const anchoBbqSloppyJoesIngredients = [
  ...proteins.filter(item => item.name === "Ground Beef"),
  ...produce.filter(item => item.name === "Yellow Onion" || item.name === "Dill Pickle"),
  ...bakingGoods.filter(item => item.name === "Cornstarch"),
  ...sauce.filter(item => item.name === "BBQ Sauce" || item.name === "Ketchup" || item.name === "Beef Stock Concentrate"),
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
  ...produce.filter(item => item.name === "Shallot" || item.name === "Cilantro" || item.name === "Poblano Pepper"),
  ...grain.filter(item => item.name === "Flatbreads"),
  ...sauce.filter(item => item.name === "BBQ Sauce" || item.name === "Red Wine Vinegar"),
  ...cannedGoods.filter(item => item.name === "Pineapple"),
  ...dairy.filter(item => item.name === "Mozzearella Fresh" || item.name === " Monterey Jack Cheese"),
]


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
    { name: 'Sweet Chili Pork Bowls', 
    ingredients: 'sweetChiliPorkBowlIngredients', 
    instructions:'instructions/sweet-chili-pork-bowls.pdf',
    link: 'https://www.hellofresh.com/recipes/sweet-chili-pork-bowls-5efb358e43975d50ea6927d2'
},

{ name: 'Sesame Soy Pork Bowls',
ingredients: 'sesameSoyPorkBowlIngredients',
instructions:'instructions/sesame-soy-pork-bowls.pdf',
link: 'https://www.hellofresh.com/recipes/sesame-soy-pork-bowls-5fa06a5f20b9661c0d5e342f'
},

{ name: 'Chimi Chicken and Yellow Rice Bowls',
ingredients: 'chimiChickenAndYellowRiceBowlIngredients',
instructions:'instructions/chimi-chicken-yellow-rice-bowls.pdf',
link: 'https://www.hellofresh.com/recipes/chimi-chicken-yellow-rice-bowls-5e5e9a73e0678c51867e16db'
},

{ name: 'Thai Basil Beef Bowls',
ingredients: 'thaiBasilBeefBowlIngredients',
instructions:'instructions/thai-basil-beef-bowls.pdf',
link: 'https://www.hellofresh.com/recipes/thai-basil-beef-bowls-5e39b0b7055a3835f148531a'
},

{ name: 'Pork and Zucchini Bibimbap',
ingredients: 'porkAndZucchiniBibimbapIngredients',
instructions:'instructions/pork-and-veggie-bibimbap.pdf',
link: 'https://www.hellofresh.com/recipes/pork-and-veggie-bibimbap-5e67d7511082fd2292725cfc'
},
{ name: 'Teriyaki Pork Luau Bowls',
ingredients: 'teriyakiPorkLuauBowlIngredients',
instructions:'instructions/teriyaki-pork-luau-bowls.pdf',
link: 'https://www.hellofresh.com/recipes/teriyaki-pork-luau-bowls-5fa56ef97511fc2549429dc0'
},
{ name: 'Gouda Pork Burgers',
ingredients: 'goudaPorkBurgerIngredients',
instructions:'instructions/gouda-pork-burgers.pdf',
link: 'https://www.hellofresh.com/recipes/gouda-pork-burgers-5e838042d6f999558005b0da'
},


{ name: 'Firehouse Cheeseburgers',
ingredients: 'firehouseCheeseburgersIngredients',
instructions:'instructions/firehouse-cheeseburgers.pdf',
link: 'https://www.hellofresh.com/recipes/firehouse-cheeseburgers-609bd8375e0e4108d54ad302'
},
{ name: 'Melty Monterey Jack Burger',
ingredients: 'meltyMontereyJackBurgersIngredients',
instructions:'instructions/melty-monterey-jack-burgers.pdf',
link: 'https://www.hellofresh.com/recipes/melty-monterey-jack-burgers-5e25f552b9721f76446c7585'
},
{ name: 'Ancho BBQ Sloppy Joes',
ingredients: 'anchoBbqSloppyJoesIngredients',
instructions: 'instructions/ancho-bbq-sloppy-joespdf.pdf',
link: 'https://www.hellofresh.com/recipes/ancho-bbq-sloppy-joes-6231e882e5574621ea0c8d10'
},

{ name: 'Bacon Buckaroo Burger',
ingredients: 'baconBuckarooBurgerIngredients',
instructions:'instructions/bacon-buckaroo-burgers.pdf',
link: 'https://www.hellofresh.com/recipes/bacon-buckaroo-burgers-60f82814e088b95c6b25fb6e'
},
{ name: 'White Cheddar Wonder Burger',
ingredients: 'whiteCheddarWonderBurgerIngredients',
instructions:'instructions/white-cheddar-wonderburgers.pdf',
link: 'https://www.hellofresh.com/recipes/white-cheddar-wonderburgers-61cb23eb4547a11c25516b1e'
},
{ name: 'Crispy Cajun Chicken Sandwiches',
ingredients: 'crispyCajunChickenSandwichesIngredients',
instructions:'instructions/crispy-cajun-chicken-sandwiches.pdf',
link: 'https://www.hellofresh.com/recipes/crispy-cajun-chicken-sandwiches-611d61d0ba10940c4d444561'
},
{ name: 'BBQ Pineapple Flatbread',
ingredients: 'bbqPineappleFlatbreadIngredients',
instructions:'instructions/bbq-pineapple-flatbreads.pdf',
link: 'https://www.hellofresh.com/recipes/bbq-pineapple-flatbreads-620c20eaaf420111a021e19a'
},

//sides
{ name: 'Potato Wedges',
ingredients: 'potatoWedgeIngredients',
instructions:'instructions/gouda-pork-burgers.pdf',
link: 'https://www.hellofresh.com/recipes/gouda-pork-burgers-5e838042d6f999558005b0da'
},
{ name: 'Zucchini Spears',
ingredients: 'zucchiniSpearsIngredients',
instructions:'instructions/melty-monterey-jack-burgers.pdf',
link: 'https://www.hellofresh.com/recipes/melty-monterey-jack-burgers-5dadc36bcd481422887d8d73'
},
{ name: 'Oven Gold Potatoes',
ingredients: 'ovenGoldPotatoesIngredients',
instructions: 'instructions/ancho-bbq-sloppy-joespdf.pdf',
link: 'https://www.hellofresh.com/recipes/ancho-bbq-sloppy-joes-6231e882e5574621ea0c8d10'
},
{ name: 'Cheesy Loaded Potato Rounds',
ingredients: 'cheesyLoadedPotatoRoundsIngredients',
instructions:'instructions/bacon-buckaroo-burgers.pdf',
link: 'https://www.hellofresh.com/recipes/bacon-buckaroo-burgers-60f82814e088b95c6b25fb6e'
},

//sauces
{ name: 'Lime Crema',
ingredients: 'limeCreamaIngredients',
instructions:'instructions/gouda-pork-burgers.pdf',
link: 'https://www.hellofresh.com/recipes/gouda-pork-burgers-5e838042d6f999558005b0da'
},
{ name: 'Garlic Mayo',
ingredients: 'garlicMayoIngredients',
instructions:'instructions/melty-monterey-jack-burgers.pdf',
link: 'https://www.hellofresh.com/recipes/melty-monterey-jack-burgers-5e25f552b9721f76446c7585'
},
]

let groceryList = []

const addRecipeToList = (list) => {
  for(let i = 0; i < list.length; i++){
    let ingredient = list[i]
    groceryList.push({ name: ingredient.name, qty: ingredient.qty, unit: ingredient.unit, aisle: ingredient.aisle })
  }
  console.log(groceryList)
  return groceryList
}

// const addRecipeToList = (recipeList) => {
//     for (let i = 0; i < recipeList.length; i++) {
//         let ingredient = recipeList[i]
//         groceryList.push(`${ingredient.qty} ${ingredient.unit} ${ingredient.name} ${ingredient.aisle}`)
//       }
//       console.log(groceryList)
//       return groceryList
// }

// addRecipeToList(necessities)
// addRecipeToList(dillonsBreakfastIngredients)

// addRecipeToList(sesameSoyPorkBowlIngredients)
// addRecipeToList(sweetChiliPorkBowlIngredients)
// addRecipeToList(chimiChickenAndYellowRiceBowlIngredients)
// addRecipeToList(thaiBasilBeefBowlIngredients)
// addRecipeToList(porkAndZucchiniBibimbapIngredients)
// addRecipeToList(teriyakiPorkLuauBowlIngredients)

// addRecipeToList(goudaPorkBurgerIngredients)
// addRecipeToList(firehouseCheeseburgersIngredients)
// addRecipeToList(meltyMontereyJackBurgersIngredients)
// addRecipeToList(baconBuckarooBurgerIngredients)

// addRecipeToList(potatoWedgeIngredients)
// addRecipeToList(ovenGoldPotatoesIngredients)
// addRecipeToList(cheesyLoadedPotatoRoundsIngredients)
// addRecipeToList(zucchiniSpearsIngredients)

// addRecipeToList(limeCreamaIngredients)
// addRecipeToList(garlicMayoIngredients)



const consolidateGroceryList = (list, portion) => {
  const consolidatedList = {};
  
  for (let i = 0; i < list.length; i++) {
    const ingredient = list[i];
    const key = `${ingredient.unit} ${ingredient.name} `;
    
    if (key in consolidatedList) {
      consolidatedList[key] += ingredient.qty;
    } else {
      consolidatedList[key] = ingredient.qty;
    }
  }
  
  const consolidatedGroceryList = [];
  for (const key in consolidatedList) {
    const qty = consolidatedList[key] * portion;
    consolidatedGroceryList.push({
      name: key.split(' ').slice(1).join(' '),
      qty,
      unit: key.split(' ')[0],
      aisle: list[0].aisle // use the aisle from the first ingredient in the list
    });
  }
    // console.log(groceryList)
    groceryList = consolidatedGroceryList
    console.log(groceryList)
    return groceryList
  }
  


  const sortGroceryListByAisle = (list) => {
    // Define the order of aisles
    const aisleOrder = ['dairy', 'freezer', 'cheese', 'snack', 'butcher', 'ethnic', 'canned', 'baking','condiment', 'bakery', 'produce', 'nutrition', '']
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

  
  
  // Example usage:
 



  const renderList = (list) => {
    const listDiv = document.getElementById('listDiv');
    listDiv.innerHTML = ''; // clear the container before adding new elements
  
    for (let i = 0; i < list.length; i++) {
      let listElement = document.createElement('div');
      let removeBtn = document.createElement('button');
      listDiv.appendChild(listElement);
      listElement.classList = 'shopping-list';
      listElement.textContent = `${list[i].name} ${list[i].qty}, ${list[i].unit}`
      listElement.appendChild(removeBtn);
      removeBtn.textContent = 'X';
      removeBtn.addEventListener('click', createRemoveListener(listElement));
    }
  };
  
  const createRemoveListener = (listElement) => {
    return () => {
      listElement.remove(); // remove the list element from the DOM
      let itemName = listElement.textContent;
      let index = groceryList.findIndex(item => item.name === itemName);
      if (index !== -1) {
        groceryList.splice(index, 1); // remove the item from the list
      }
    };
  };
  
  
  
  const renderRecipes = (recipeList) => {
    let recipeDiv = document.getElementById('recipeDiv');
    for (let i = 0; i < recipeList.length; i++) {
      let recipeElement = document.createElement('div');
      let addBtn = document.createElement('button');
      recipeDiv.appendChild(recipeElement);
      recipeElement.classList = 'recipe';
      recipeElement.innerHTML = recipeList[i].name;
      recipeElement.appendChild(addBtn);
      addBtn.textContent = 'Add';
      addBtn.classList = 'addBtn'
      let index = i;
      // Add event listener to each button
      addBtn.addEventListener('click', function() {
        handleClick(index, recipeList)
      
      });
    }
  };
  
  const handleClick = (index, recipeList) => {
    let ingredientList = recipeList[index].ingredients;
    switch(ingredientList) {
      case 'sweetChiliPorkBowlIngredients':        
        addRecipeToList(sweetChiliPorkBowlIngredients)
        console.log(groceryList)
        break;        
      case 'sesameSoyPorkBowlIngredients':
        addRecipeToList(sesameSoyPorkBowlIngredients)        
        console.log(groceryList)    
        break;
      case 'chimiChickenAndYellowRiceBowlIngredients':
        console.log(chimiChickenAndYellowRiceBowlIngredients, groceryList)
        addRecipeToList(chimiChickenAndYellowRiceBowlIngredients)
        break;        
      case 'thaiBasilBeefBowlIngredients':
        console.log(thaiBasilBeefBowlIngredients, groceryList)
        addRecipeToList(thaiBasilBeefBowlIngredients)            
        break;
      case 'porkAndZucchiniBibimbapIngredients':
        console.log(porkAndZucchiniBibimbapIngredients, groceryList)
        addRecipeToList(porkAndZucchiniBibimbapIngredients)
        break;        
      case 'teriyakiPorkLuauBowlIngredients':
        console.log(teriyakiPorkLuauBowlIngredients, groceryList)
        addRecipeToList(teriyakiPorkLuauBowlIngredients)            
        break;
      case 'goudaPorkBurgerIngredients':
        console.log(goudaPorkBurgerIngredients), groceryList
        addRecipeToList(goudaPorkBurgerIngredients)            
        break;
      case 'firehouseCheeseburgersIngredients':
        console.log(firehouseCheeseburgersIngredients, groceryList)
        addRecipeToList(firehouseCheeseburgersIngredients)
        break;          
      case 'meltyMontereyJackBurgersIngredients':
        console.log(meltyMontereyJackBurgersIngredients, groceryList)
        addRecipeToList(meltyMontereyJackBurgersIngredients)            
        break;
      case 'anchoBbqSloppyJoesIngredients':
        console.log(anchoBbqSloppyJoesIngredients, groceryList)
        addRecipeToList(anchoBbqSloppyJoesIngredients)
        break;          
      case 'baconBuckarooBurgerIngredients':
        console.log(baconBuckarooBurgerIngredients, groceryList)
        addRecipeToList(baconBuckarooBurgerIngredients)   
        console.log(baconBuckarooBurgerIngredients, groceryList)         
        break;
      case 'potatoWedgeIngredients':
        console.log(potatoWedgeIngredients), groceryList
        addRecipeToList(potatoWedgeIngredients)            
        break;
      case 'zucchiniSpearsIngredients':
        console.log(zucchiniSpearsIngredients, groceryList)
        addRecipeToList(zucchiniSpearsIngredients)
        break;
      case 'ovenGoldPotatoesIngredients':
        console.log(ovenGoldPotatoesIngredients, groceryList)
        addRecipeToList(ovenGoldPotatoesIngredients)            
        break;
      case 'cheesyLoadedPotatoRoundsIngredients':
        console.log(cheesyLoadedPotatoRoundsIngredients, groceryList)
        addRecipeToList(cheesyLoadedPotatoRoundsIngredients)            
        break;
      case 'limeCreamaIngredients':
        console.log(limeCreamaIngredients, groceryList)
        addRecipeToList(limeCreamaIngredients)
        break;
      case 'garlicMayoIngredients':
        console.log(garlicMayoIngredients, groceryList)
        addRecipeToList(garlicMayoIngredients)        
        break;
      case 'whiteCheddarWonderBurgerIngredients':
        console.log(whiteCheddarWonderBurgerIngredients, groceryList)
        addRecipeToList(whiteCheddarWonderBurgerIngredients)
        break;
      case 'crispyCajunChickenSandwichesIngredients':
        console.log(crispyCajunChickenSandwichesIngredients, groceryList)
        addRecipeToList(crispyCajunChickenSandwichesIngredients)        
        break;
      case 'bbqPineappleFlatbreadIngredients':
        console.log(bbqPineappleFlatbreadIngredients, groceryList)
        addRecipeToList(bbqPineappleFlatbreadIngredients)        
        break;
      default:
        
    }
    // console.log(groceryList)

  
    // console.log(groceryList)

    sortGroceryListByAisle(groceryList)
    // console.log(groceryList)

    renderList(groceryList)
    // console.log(groceryList)


  }

const cookiesBtn = document.getElementById('cookiesBtn')
cookiesBtn.addEventListener('click', function() {
  addRecipeToList(cookieIngredients)
  renderList(groceryList)
})
  
const dillonBreakfastBtn = document.getElementById('dillonBreakfastBtn')
dillonBreakfastBtn.addEventListener('click', function() {
  addRecipeToList(dillonsBreakfastIngredients)
  renderList(groceryList)
})

const alisonBreakfastBtn = document.getElementById('alisonBreakfastBtn')
alisonBreakfastBtn.addEventListener('click', function() {
  addRecipeToList(alisonsBreakfastIngredients)
  renderList(groceryList)
})

const consolidateBtn = document.getElementById('consolidateBtn')
consolidateBtn.addEventListener('click', function() {
  consolidateGroceryList(groceryList, 2)
  renderList(groceryList)
}) 

  renderRecipes(recipes);
  


  
  