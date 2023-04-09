//all units are single serving

const proteins = [
    { name: 'Ground Pork', qty: 5, unit: 'oz', aisle: 'butcher' },
    { name: 'Chicken Breast Strips', qty: 5, unit: 'oz', aisle: 'butcher' },
    { name: 'Ground Beef', qty: 5, unit: 'oz', aisle: 'butcher' },
  
];

const produce = [
    { name: 'Bell Pepper', qty: .5, unit: '', aisle: 'produce'},
    { name: 'Yellow Onion', qty: .5, unit: '', aisle: 'produce' },
    { name: 'Red Onion', qty: .5, unit: '', aisle: 'produce' },
    { name: 'Cilantro', qty: .125, unit: 'oz', aisle: 'produce' },
    { name: 'Lime', qty: .5, unit: '', aisle: 'produce' },
    { name: 'Carrots', qty: .5, unit: 'oz', aisle: 'produce' },
    { name: 'Shredded Carrots', qty: 2, unit: 'oz', aisle: 'produce' },
    { name: 'Chili Pepper', qty: .5, unit: '', aisle: 'produce' },
    { name: 'Poblano Pepper', qty: .5, unit: '', aisle: 'produce' },
    { name: 'Roma Tomato', qty: .5, unit: '', aisle: 'produce' },
    { name: 'Garlic', qty: 1, unit: 'Clove', aisle: 'produce' },
    { name: 'Lemon', qty: .5, unit: '', aisle: 'produce' },
    { name: 'Shallot', qty: .5, unit: '', aisle: 'produce' },
    { name: 'Ginger', qty: .5, unit: 'Thumb', aisle: 'produce' },
    { name: 'Basil', qty: .5, unit: 'oz', aisle: 'produce' },
    { name: 'Scallions', qty: .5, unit: 'oz', aisle: 'produce' },
    { name: 'Zucchini', qty: .5, unit: '', aisle: 'produce' },
    { name: 'Kiwi', qty: .5, unit: '', aisle: 'produce' },
    { name: 'Long Green Pepper', qty: .5, unit: '', aisle: 'produce' },
    { name: 'Yukon Gold Potatoes', qty: 6, unit: 'oz', aisle: 'produce' },
        
]   

const grain = [
    { name: 'Jasmine Rice', qty: .5, unit: 'cup', aisle: '' },
    { name: 'Potato Buns', qty: 1, unit: 'Bun', aisle: 'bakery'},
]
const sauce = [
    { name: 'Sweet Soy Glaze', qty: 2, unit: 'TBSP', aisle: '' },
    { name: 'Sweet Thai Chili Sauce', qty: .5, unit: 'oz', aisle: '' },
    { name: 'Mayonnaise', qty: 1, unit: 'TBSP', aisle: 'condiment' },
    { name: 'Sriracha', qty: 1, unit: 'tsp', aisle: '' },
    { name: 'Sesame Dressing', qty: .75, unit: 'oz', aisle: '' },
    { name: 'Chicken Stock Concentrate', qty: 1, unit: 'TBSP', aisle: '' },
    { name: 'Mushroom Stock Concentrate', qty: 1, unit: 'TBSP', aisle: '' },
    { name: 'Ponzu Sauce', qty: 24, unit: 'ml', aisle: '' },
    { name: 'White Wine Vinegar', qty: 2.5, unit: 'tsp', aisle: '' },
    { name: 'Sesame Oil', qty: .5, unit: 'TBSP', aisle: '' },
    { name: 'Soy Sauce', qty: 1, unit: 'TBSP', aisle: '' },
    { name: 'Gochujang Sauce', qty: .5, unit: 'oz', aisle: '' },
    { name: 'Teriyaki Sauce', qty: .5, unit: '', aisle: '' },
]
const necessities = [
    { name: 'Butter', qty: 0, unit: '', aisle: 'dairy' },
    { name: 'Olive oil', qty: 0, unit: '', aisle: '' },
    { name: 'Sugar', qty: 0, unit: '', aisle: 'baking' },
    { name: 'Black Pepper', qty: 0, unit: '', aisle: 'seasoning' },
    { name: 'Salt', qty: 0, unit: '', aisle: '' },
    
    
]
const driedGoods = [
    { name: 'Peanuts', qty: .25, unit: 'oz', aisle: '' },
    { name: 'Crispy Fried Onion', qty: .25, unit: 'cup', aisle: '' },
]
const seasoning = [
  { name: 'Cumin', qty: .5, unit: 'tsp', aisle: 'seasoning' },
  { name: 'Tumeric', qty: .5, unit: 'tsp', aisle: 'seasoning' },
  { name: 'Smoked Paprika', qty: .5, unit: 'tsp', aisle: 'seasoning' },
]
const dairy = [
  { name: 'Sour Cream', qty: 1, unit: 'TBSP', aisle: 'dairy' },
  { name: 'Gouda Cheese', qty: 1, unit: 'Slice', aisle: 'dairy' },
]

//Recipie ingredient lists
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
const goudaPorkBurgerIngredients = [
  ...proteins.filter(item => item.name === "Ground Pork"),
  ...produce.filter(item => item.name === "Yellow Onion" || item.name === "Lime" || item.name === "Garlic"),
  ...seasoning.filter(item => item.name === "Smoked Paprika"),
  ...sauce.filter(item => item.name === "Mayonnaise" || item.name === "Sour Cream"), 
  ...dairy.filter(item => item.name === "Gouda Cheese"),
  ...grain.filter(item => item.name === "Potato Buns")
]

//sides
const potatoWedgeIngredients = [
  ...produce.filter(item => item.name === "Yukon Gold Potato"),
  ...seasoning.filter(item => item.name === "Smoked Paprika"),
]

//dipping sauce
const limeCreamaIngredients = [
  ...produce.filter(item => item.name === "Lime"),
  ...seasoning.filter(item => item.name === "Smoked Paprika"),
  ...sauce.filter(item => item.name === "Mayonnaise" || item.name === "Sour Cream"), 
]

// Recipies
const recipies = [
    { name: 'Sweet Chili Pork Bowls', 
    ingredients: sweetChiliPorkBowlIngredients, 
    instructions:[
        '1 Prep and Dry all produce. Halve, core, and thinly slice bell pepper into strips. Halve, peel, and thinly slice onion. Mince cilantro. Zest and quarter lime.',
        '2 Cook Rice. In a small pot, combine rice, 1¼ cups water (2¼ cups for 4 servings), and a pinch of salt. Bring to a boil, then cover and reduce to a low simmer. Cook until rice is tender, 15-18 minutes. Keep covered off heat until ready to serve.',
        '3 Coat Peanuts. While rice cooks, heat a large, preferably nonstick, pan over medium-high heat. Add peanuts, 1 tsp sugar (2 tsp for 4 servings), and 2 TBSP water. Cook, stirring often, until water has evaporated and peanuts are coated and lightly toasted, 3-5 minutes. Turn off heat; transfer to a small bowl. Wipe out pan.',
        '4 Cook Veggies. Heat a large drizzle of oil in same pan over medium-high heat. Add bell pepper and onion; season with salt and pepper. Cook, stirring, until tender and lightly browned, 6-9 minutes. Transfer veggies to a plate.',
        '5 Cook Pork. Add another drizzle of oil to same pan over medium-high heat. Add pork; season with salt and pepper. Using a spatula, press into an even layer. Cook, without stirring, until browned on bottom, 3-4 minutes. Break up meat into pieces and continue cooking until pork is cooked through, 2-4 minutes. Stir in cooked veggies, then add sweet soy glaze, chili sauce, and 1 TBSP butter (2 TBSP for 4 servings). Cook, stirring, until mixture is thoroughly coated, 1-2 minutes more.',
        '6 Finish and Serve. Fluff rice with a fork; stir in 1 TBSP butter (2 TBSP for 4 servings) and lime zest to taste. Season with salt. Divide between bowls and top with pork mixture, peanuts, and cilantro. Serve with lime wedges on the side.',
    ],
    info: [
        {prep: '5 min', time: '30 min', calories: '930'}
    ]
},

{ name: 'Sesame Soy Pork Bowls',
ingredients: sesameSoyPorkBowlIngredients,
instructions:[
    '1 Cook Rice. In a small pot, combine rice, 1¼ cups water (2¼ cups for 4 servings), and a pinch of salt. Bring to a boil, then cover and reduce to a low simmer. Cook until rice is tender, 15-18 minutes. Keep covered off heat until ready to serve. ',
    '2 Prep and Mix Mayo. While rice cooks, wash and dry all produce. Zest and quarter lime. Roughly chop cilantro. • In a small bowl, combine mayonnaise with chili sauce to taste.',
    '3 Cook Pork. Heat a drizzle of oil in a large pan over medium-high heat. Add pork* and a big pinch of salt. Cook, breaking up meat into pieces, until browned, 3-4 minutes. • Stir in carrots, sweet soy glaze, and sesame dressing. Cook until carrots are softened, pork is cooked through, and sauce has thickened, 2-4 minutes more. Taste and season with salt and pepper. Turn off heat.',
    '4 Finish and Serve. Fluff rice with a fork; stir in lime zest and 1 TBSP butter (2 TBSP for 4 servings). Season with salt and pepper. Divide rice between bowls and top with pork mixture and any remaining sauce from pan. Drizzle with chili mayo. Sprinkle with crispy fried onions and cilantro. Serve with lime wedges on the side.'
],
info: [
  {prep: '5 min', time: '20 min', calories: '1060'}
]
},

{ name: 'Chimi Chicken and Yellow Rice Bowls',
ingredients: chimiChickenAndYellowRiceBowlIngredients,
instructions: [
  '1 Cook Rice. In a small pot, combine rice, 1¼ cups water (2¼ cups for 4 servings), and a pinch of salt. Bring to a boil, then cover and reduce to a low simmer. Cook until rice is tender, 15-18 minutes. Keep covered off heat until ready to serve. ',
  '2 Roast Veggies. Meanwhile, halve, core, and slice poblano into ½-inch-thick strips. Halve, peel, and cut onion into ½-inch-thick wedges; mince a few wedges until you have 2 TBSP (3 TBSP for 4 servings). Toss poblano and onion wedges on a baking sheet with a large drizzle of olive oil, salt, and pepper. Roast on top rack until softened and lightly charred, 18-20 minutes.',
  '3 Prep. While veggies roast, finely dice tomato. Zest 1 lemon; quarter lemons. Mince garlic. Finely chop cilantro. Thinly slice chili.',
  '4 Make ChimiChurri. In a small bowl, combine cilantro, half the garlic, half the cumin (you will use the rest later), and juice from 1 lemon (2 lemons for 4 servings). Add as much lemon zest and chili as you like. Stir in 2 TBSP olive oil (4 TBSP for 4); season generously with salt and pepper. In a separate small bowl, combine tomato, minced onion, and lemon juice to taste. Season with salt and pepper.',
  '5 Cook Chicken. Pat chicken dry with paper towels; season with salt, pepper, and remaining cumin. Heat a drizzle of olive oil in a large pan over medium-high heat. Add chicken and cook, stirring occasionally, until browned and cooked though, 4-6 minutes. Stir in 2 TBSP water (4 TBSP for 4 servings) and remaining garlic and stock concentrates until combined. Simmer until saucy, 1-2 minutes. Turn off heat.',
  '6 Finish and Serve. Fluff rice with a fork; stir in 1 TBSP butter (2 TBSP for 4 servings) and season with salt and pepper. Divide between bowls and top with veggies, chicken, and salsa. Spoon chimichurri over chicken. Serve with remaining lemon wedges on the side.'
],
info: [
  {prep: '15 min', time: '35 min', calories: '770'}
]
},

{ name: 'Thai Basil Beef Bowls',
ingredients: thaiBasilBeefBowlIngredients,
instructions: [
  '1. Cook Rice. In a small pot, combine rice, 1¼ cups water (2¼ cups for 4 servings), and a big pinch of salt. Bring to a boil, then cover and reduce to a low simmer. Cook until rice is tender, 15-18 minutes. Keep covered off heat until ready to serve.',
  '2 Prep. Meanwhile, wash and dry all produce. Halve, peel, and thinly slice shallot. Halve, core, and thinly slice bell pepper into strips. Peel and mince or grate ginger. Zest and quarter lime. Pick basil leaves from stems; mince stems and half the leaves. Reserve remaining leaves for garnish.',
  '3 Cook Veggies. Heat a drizzle of oil in a large pan over medium-high heat. Add bell pepper and cook, stirring occasionally, until browned and softened, 5-7 minutes. Add shallot and cook until softened, 1-2 minutes. Stir in half the ponzu (you will use the rest later) and season with salt and pepper. Turn off heat; transfer veggies to a medium bowl. Cover to keep warm. Wipe out pan, if necessary.',
  '4 Cook Beef. Heat a drizzle of oil in same pan over medium-high heat. Add beef and cook, breaking up meat into pieces, until browned, 3-4 minutes. (TIP: If there is excess grease in your pan, carefully pour it out.) Add ginger and minced basil; cook until fragrant, 1-2 minutes. Stir in stock concentrate, remaining ponzu, 1 tsp sugar (2 tsp for 4 servings), and ¼ cup water (⅓ cup for 4). Cook until sauce is thickened and beef is cooked through, 1-2 minutes. Season with salt and pepper; remove from heat.',
  '5 Make Srirach Mayo. While beef cooks, in a small bowl, combine mayonnaise, a squeeze of lime juice, and sriracha to taste. Add water 1 tsp at a time until mixture reaches a drizzling consistency. Season with salt and pepper.',
  '6 Finish and Serve. Fluff rice with a fork and stir in lime zest and 1 TBSP butter (2 TBSP for 4 servings). Season with salt and pepper. Divide between bowls; arrange beef mixture and veggies on top in separate sections. Drizzle with sriracha mayo. Garnish with peanuts and reserved basil leaves (tear any larger leaves first). Serve with remaining lime wedges on the side.'
],
info: [
  {prep: '10 min', time: '35 min', calories: '870'}
]
},

{ name: 'Pok and Zucchini Bibimbap',
ingredients: porkAndZucchiniBibimbapIngredients,
instructions: [
  '1 Cook Rice. In a small pot, combine rice, 1¼ cups water (2¼ cups for 4 servings), and a big pinch of salt. Bring to a boil, then cover and reduce to a low simmer. Cook until rice is tender, 15-18 minutes. Keep covered off heat until ready to serve.',
  '2 Prep. Meanwhile, wash and dry all produce. Trim and thinly slice scallions, separating whites from greens. Trim and peel carrots. Using a peeler, shave carrots lengthwise into ribbons, rotating as you go. Trim and halve zucchini lengthwise; thinly slice crosswise into half-moons. Peel and mince ginger. Mince garlic.',
  '3 Make Pickles and Sauce. In a small bowl, combine scallion whites, vinegar, and a pinch of salt. Set aside to marinate, stirring occasionally, until ready to serve. In a separate small bowl, combine sesame oil, half the soy sauce (you will use the rest later), 1 TBSP sugar (2 TBSP for 4 servings), and up to half the sriracha to taste. Stir until sugar has dissolved.',
  '4 Cook Veggies. Heat a drizzle of oil in a large, preferably nonstick, pan over mediumhigh heat. Add carrots; season with salt and pepper. Cook, stirring, until slightly softened, 3-4 minutes. Remove from pan and set aside. Add another drizzle of oil to pan. Add zucchini; season with salt and pepper. Cook until browned and tender, 3-5 minutes per side. Remove from pan and set aside with carrots.',
  '5 Cook Pork. Heat another drizzle of oil in same pan over medium-high heat. Add pork, ginger, and garlic. Cook, breaking up meat into pieces, until pork is browned and cooked through, 4-6 minutes. Add remaining soy sauce and cook, stirring, until liquid has mostly evaporated, 1-2 minutes. Season with salt and pepper.',
  '6 Finish and Serve. Fluff rice with a fork and season with salt and pepper; divide between bowls. Arrange pork and veggies on top. Top with pickled scallion whites (and pickling liquid). Drizzle with sauce and remaining sriracha to taste. Sprinkle with scallion greens and serve.'
],
info: [
  {prep: '10 min', time: '30 min', calories: '820'}
]
},
{ name: 'Teriyaki Pork Luau Bowls',
ingredients: teriyakiPorkLuauBowlIngredients,
instructions: [
  '1 Prep. Wash and dry all produce. • Peel and dice kiwi. Dice tomato. Halve, peel, and thinly slice onion; finely dice a few slices until you have 2 TBSP. Zest and quarter lime. Peel and mince garlic. Halve, core, and thinly slice green pepper crosswise into strips.',
  '2 Cook Rice. Melt 1 TBSP butter (2 TBSP for 4 servings) in a small pot over medium high heat. Add rice and stir to coat. Stir in ¾ cup water (1½ cups for 4) and a big pinch of salt. Bring to a boil, then cover and reduce to a low simmer. Cook until rice is tender, 15-18 minutes. Keep covered off heat until ready to serve.',
  '3 Make Salsa and Crema. Meanwhile, in a medium bowl, combine kiwi, tomato, diced onion, and a squeeze of lime juice. Season with salt and pepper. • In a small bowl, combine sour cream, half the lime zest, and a pinch of garlic to taste. Stir in water 1 tsp at a time until mixture reaches a drizzling consistency. Season with salt and pepper.',
  '4 Cook Veggies. Heat a drizzle of oil in a large pan over medium-high heat. Add green pepper and sliced onion; season with salt and pepper. Cook, stirring, until tender and lightly browned, 6-7 minutes. • Add remaining garlic and cook, stirring, until fragrant, 30 seconds. Transfer veggies to a plate.',
  '5 Cook Pork. Heat another drizzle of oil in pan used for veggies over medium-high heat. Add pork*; season with salt and pepper. Using a spatula, press into an even layer. Cook, without stirring, until browned on bottom, 3-4 minutes. Break up meat into pieces and continue cooking until pork is cooked through, 1-2 minutes more. • Return cooked veggies to pan. Stir in teriyaki sauce, 1 tsp sugar (1½ tsp for 4 servings), and 1 TBSP butter (2 TBSP for 4). Cook until thickened, 1-2 minutes.',
  '6 Finish and Serve. Fluff rice with a fork; stir in remaining lime zest and season with salt. • Divide rice between bowls and top with pork mixture, kiwi salsa, and garlic lime crema. Serve with remaining lime wedges on the side.'
],
info: [
  {prep: '15 min', time: '35 min', calories: '830'}
]
},
{ name: 'Gouda Pork Burgers',
ingredients: goudaPorkBurgerIngredients,
instructions: [
  '1 Prep. Thinly slice onion; mince a few slices until you have 2 TBSP (4 TBSP for 4 servings). Zest and quarter lime. Grate 1 clove garlic (2 cloves for 4). Halve buns.',
  '2 Cook Onion. Meanwhile, melt 2 TBSP butter (3 TBSP for 4 servings) in a medium pan over medium heat. Add sliced onion, ¼ tsp sugar (½ tsp for 4), and salt. Cook, stirring, until browned and softened, 10-15 minutes. (TIP: Lower heat and add a splash of water if onion starts to burn.) Stir in a squeeze of lime juice and sriracha to taste.',
  '3 Cook Patties. While onion cooks, in a large bowl, combine pork, minced onion, half the grated garlic, remaining paprika, ½ tsp sugar (1 tsp for 4 servings), and salt. Form into two patties (four for 4), each slightly wider than a burger bun. Heat a large drizzle of olive oil in a large pan over medium heat. Add patties and cook until browned and cooked through, 4-7 minutes per side. In the last 1-2 minutes of cooking, top each patty with gouda; cover pan until cheese melts. Remove from pan and set aside.',
  '4 Toast Buns and Make Sauce. Toast buns until golden. (TIP: For a deeper flavor, toast in pan used for patties over medium heat.) While buns toast, in a small bowl, combine mayonnaise, sour cream, and a squeeze of lime juice. Stir in as much lime zest and remaining grated garlic as you like. Season with salt and pepper.',
  '5 Serve. Spread as much sauce as you like onto bottom buns; fill buns with patties and sriracha onion. Divide burgers and potatoes between plates. Serve with sauce for dipping and lime wedges on the side.',
],
info: [
  {prep: '5 min', time: '20 min', calories: '1090'}
]
},


{ name: '',
ingredients: '',
instructions: [
  '',
  '',
  '',
  '',
  '',
  ''
],
info: [
  {prep: '5 min', time: '20 min', calories: '1060'}
]
},
{ name: '',
ingredients: '',
instructions: [
  '',
  '',
  '',
  '',
  '',
  ''
],
info: [
  {prep: '5 min', time: '20 min', calories: '1060'}
]
},
{ name: '',
ingredients: '',
instructions: [
  '',
  '',
  '',
  '',
  '',
  ''
],
info: [
  {prep: '5 min', time: '20 min', calories: '1060'}
]
},
{ name: '',
ingredients: '',
instructions: [
  '',
  '',
  '',
  '',
  '',
  ''
],
info: [
  {prep: '5 min', time: '20 min', calories: '1060'}
]
},
{ name: '',
ingredients: '',
instructions: [
  '',
  '',
  '',
  '',
  '',
  ''
],
info: [
  {prep: '5 min', time: '20 min', calories: '1060'}
]
},

//sides
{ name: 'Potato Wedges',
ingredients: potatoWedgeIngredients,
instructions: [
  '1 Prep. Adjust rack to middle position and preheat oven to 450 degrees. Wash and dry all produce. Cut potatoes into ½-inch-thick wedges. ',
  '2 Roast Potatoes. Toss potatoes on a baking sheet with a large drizzle of olive oil, half the paprika (you will use the rest later), and a big pinch of salt and pepper. Roast on middle rack until browned and tender, 20-25 minutes.',
 
],
info: [
  {prep: '5 min', time: '30 min', calories: '0'}
]
},

//sauces
{ name: 'Lime Crema',
ingredients: limeCreamaIngredients,
instructions: [
  'in a small bowl, combine mayonnaise, sour cream, and a squeeze of lime juice. Stir in as much lime zest and remaining grated garlic as you like. Season with salt and pepper.',

],
info: [
  {prep: '2 min', time: '3 min', calories: '0'}
]
},
]

let groceryList = [
   
    
]

const organizeList = () => {
  
}

const addRecipieToList = (recipieList) => {
    for (let i = 0; i < recipieList.length; i++) {
        let ingredient = recipieList[i]
        groceryList.push(`${ingredient.qty} ${ingredient.unit} ${ingredient.name} ${ingredient.aisle}`)
      }
}

addRecipieToList(necessities)
addRecipieToList(sesameSoyPorkBowlIngredients)
addRecipieToList(sweetChiliPorkBowlIngredients)
addRecipieToList(chimiChickenAndYellowRiceBowlIngredients)
addRecipieToList(thaiBasilBeefBowlIngredients)
addRecipieToList(porkAndZucchiniBibimbapIngredients)
addRecipieToList(teriyakiPorkLuauBowlIngredients)
addRecipieToList(goudaPorkBurgerIngredients)
addRecipieToList(potatoWedgeIngredients)
addRecipieToList(limeCreamaIngredients)
// groceryList.push(sesameSoyPorkBowlIngredients)


const consolidateGroceryList = (groceryList, portion) => {
    const consolidatedList = {}
 
    for (let i = 0; i < groceryList.length; i++) {
      const item = groceryList[i]
    
      const parts = item.split(' ')
    
      const qty = parseFloat(parts[0])
 
      const unit = parts[1]
    
      
      const name = parts.slice(2).join(' ')
    
      const key = `${unit} ${name} `
     
      if (key in consolidatedList) {
        consolidatedList[key] += qty
      } else {
        consolidatedList[key] = qty
      }
      
    }
   
    const consolidatedGroceryList = []
    for (const key in consolidatedList) {
      const qty = consolidatedList[key] * portion
    
      consolidatedGroceryList.push(`${qty} ${key}`)
    }
   
    return consolidatedGroceryList
  }
  
  const consolidatedGroceryList = consolidateGroceryList(groceryList, 2)

  const sortGroceryListByAisle = (list) => {
    // Define the order of aisles
    const aisleOrder = ['dairy', 'butcher', 'produce', 'bakery', 'seasoning', 'baking', 'condiment', '']
    
    // Add the aisle property to each item in the list
    const listWithAisle = list.map(item => {
      const parts = item.split(' ')
      const aisle = parts[parts.length - 2]
      const name = parts.slice(0, -2).join(' ')
      return { name: name, qty: parseFloat(parts[0]), unit: parts[1], aisle: aisle }
    })
    
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
    
    return listWithAisle;
  }
  
  
  // Example usage:
 

  const sortedGroceryList = sortGroceryListByAisle(consolidatedGroceryList)
  console.log(sortedGroceryList)
  // Output: ['1 lb Ground beef (butcher)', '1 Onion (produce)', '2 cups Flour (bakery)', '1 can Tomato sauce (condiment)']
  