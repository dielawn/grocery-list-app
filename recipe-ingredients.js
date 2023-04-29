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