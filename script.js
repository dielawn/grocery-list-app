//all units are single serving

const proteins = [
    { name: 'Ground Pork', qty: 5, unit: 'oz' },
];

const produce = [
    { name: 'Bell Pepper', qty: .5, unit: 'item' },
    { name: 'Yellow Onion', qty: .5, unit: 'item' },
    { name: 'Cilantro', qty: .125, unit: 'oz' },
    { name: 'Lime', qty: .5, unit: 'item' },
    { name: 'Shredded Carrots', qty: 2, unit: 'oz' },
]   

const grain = [
    { name: 'Jasmine Rice', qty: .25, unit: 'cup' },
]
const sauce = [
    { name: 'Sweet Soy Glaze', qty: 2, unit: 'TBSP' },
    { name: 'Sweet Thai Chili Sauce', qty: .5, unit: 'oz' },
    { name: 'Mayonnaise', qty: 1, unit: 'TBSP' },
    { name: 'Sriracha', qty: 1, unit: 'tsp' },
    { name: 'Sesame Dressing', qty: .75, unit: 'oz' },
]
const necessities = [
    { name: 'Butter', qty: 1, unit: 'TBSP' },
    { name: 'Olive oil', qty: 1, unit: 'TBSP' },
    { name: 'Sugar', qty: .5, unit: 'tsp' },
    { name: 'Black Pepper', qty: 1, unit: 'item' },
    { name: 'Salt', qty: 1, unit: 'item' },
    
]
const driedGoods = [
    { name: 'Peanuts', qty: .25, unit: 'oz' },
    { name: 'Crispy Fried Onion', qty: .25, unit: 'cup' },
]

//Recipie ingredient lists
const sweetChiliPorkBowlIngredients = [
    ...proteins.filter(item => item.name === "Ground Pork"),
    ...produce.filter(item => item.name === "Bell Pepper" || item.name === "Yellow Onion" || item.name === "Cilantro" || item.name === "Lime"),
    ...sauce.filter(item => item.name === "Sweet Soy Glaze" || item.name === "Sweet Thai Chili Sauce"),    
    ...driedGoods.filter(item => item.name === "Peanuts")
  ];
  const sesameSoyPorkBowlIngredients = [
    ...proteins.filter(item => item.name === "Ground Pork"),
    ...produce.filter(item => item.name === "Shredded Carrots" || item.name === "Cilantro" || item.name === "Lime"),
    ...sauce.filter(item => item.name === "Sweet Soy Glaze" || item.name === "Sriracha" || item.name === 'Mayonnaise'),    
    ...driedGoods.filter(item => item.name === "Crispy Fried Onion")
  ];


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
]

}

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

// groceryList.push(sesameSoyPorkBowlIngredients)
console.log(groceryList)

const consolidateGroceryList = (groceryList) => {
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
      const qty = consolidatedList[key]
      
      
      consolidatedGroceryList.push(`${qty} ${key}`)
    }
   
    return consolidatedGroceryList
  }
  
  const consolidatedGroceryList = consolidateGroceryList(groceryList)
  console.log(consolidatedGroceryList)
  