//all units are single serving

const proteins = [
    { name: 'Ground Pork', qty: 5, unit: 'oz', aisle: 'butcher' },
    { name: 'Chicken Breast Strips', qty: 5, unit: 'oz', aisle: 'butcher' },
    { name: 'Ground Beef', qty: 5, unit: 'oz', aisle: 'butcher' },
  
];

const produce = [
    { name: 'Bell Pepper', qty: .5, unit: '', aisle: 'produce'},
    { name: 'Yellow Onion', qty: .5, unit: '', aisle: 'produce' },
    { name: 'Cilantro', qty: .125, unit: 'oz', aisle: 'produce' },
    { name: 'Lime', qty: .5, unit: '', aisle: 'produce' },
    { name: 'Shredded Carrots', qty: 2, unit: 'oz', aisle: 'produce' },
    { name: 'Chili Pepper', qty: .5, unit: '', aisle: 'produce' },
    { name: 'Poblano Pepper', qty: .5, unit: '', aisle: 'produce' },
    { name: 'Roma Tomato', qty: .5, unit: '', aisle: 'produce' },
    { name: 'Garlic', qty: 1, unit: 'Clove', aisle: 'produce' },
    { name: 'Lemon', qty: .5, unit: '', aisle: 'produce' },
    { name: 'Shallot', qty: .5, unit: '', aisle: 'produce' },
    { name: 'Ginger', qty: .5, unit: 'Thumb', aisle: 'produce' },
    { name: 'Basil', qty: .5, unit: 'oz', aisle: 'produce' },
]   

const grain = [
    { name: 'Jasmine Rice', qty: .5, unit: 'cup', aisle: '' },
]
const sauce = [
    { name: 'Sweet Soy Glaze', qty: 2, unit: 'TBSP', aisle: '' },
    { name: 'Sweet Thai Chili Sauce', qty: .5, unit: 'oz', aisle: '' },
    { name: 'Mayonnaise', qty: 1, unit: 'TBSP', aisle: '' },
    { name: 'Sriracha', qty: 1, unit: 'tsp', aisle: '' },
    { name: 'Sesame Dressing', qty: .75, unit: 'oz', aisle: '' },
    { name: 'Chicken Stock Concentrate', qty: 1, unit: 'TBSP', aisle: '' },
    { name: 'Mushroom Stock Concentrate', qty: 1, unit: 'TBSP', aisle: '' },
    { name: 'Ponzu Sauce', qty: 24, unit: 'ml', aisle: '' },
]
const necessities = [
    { name: 'Butter', qty: 0, unit: '', aisle: '' },
    { name: 'Olive oil', qty: 0, unit: '', aisle: '' },
    { name: 'Sugar', qty: 0, unit: '', aisle: '' },
    { name: 'Black Pepper', qty: 0, unit: '', aisle: '' },
    { name: 'Salt', qty: 0, unit: '', aisle: '' },
    
    
]
const driedGoods = [
    { name: 'Peanuts', qty: .25, unit: 'oz', aisle: '' },
    { name: 'Crispy Fried Onion', qty: .25, unit: 'cup', aisle: '' },
]
const seasoning = [
  { name: 'Cumin', qty: .5, unit: 'tsp', aisle: '' },
  { name: 'Tumeric', qty: .5, unit: 'tsp', aisle: '' },
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

]

let groceryList = [
   
    
]

const addRecipieToList = (recipieList) => {
    for (let i = 0; i < recipieList.length; i++) {
        let ingredient = recipieList[i]
        groceryList.push(`${ingredient.qty} ${ingredient.unit} ${ingredient.name}`)
      }
}

addRecipieToList(necessities)
addRecipieToList(sesameSoyPorkBowlIngredients)
addRecipieToList(sweetChiliPorkBowlIngredients)
addRecipieToList(chimiChickenAndYellowRiceBowlIngredients)
addRecipieToList(thaiBasilBeefBowlIngredients)

// groceryList.push(sesameSoyPorkBowlIngredients)
console.log(groceryList)

const consolidateGroceryList = (groceryList, portion) => {
    const consolidatedList = {}
    
    for (let i = 0; i < groceryList.length; i++) {
      const item = groceryList[i]
      const parts = item.split(' ')
      const qty = parseFloat(parts[0])
      const unit = parts[1]
      const name = parts.slice(2).join(' ')
      const key = `${unit} ${name}`
     
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
  console.log(consolidatedGroceryList)
  