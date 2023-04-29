//all units are single serving

const proteins = [
    { name: 'Bacon', qty: 4, unit: 'oz', aisle: 'butcher' },
    { name: 'Beef Tenderloin Steak', qty: 5, unit: 'oz', aisle: 'butcher' },
  
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
    { name: 'Green Beans', qty: 3, unit: 'oz', aisle: 'produce' },
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
    { name: "Baking Soda", qty: .5, unit: 'tsp', aisle: 'bakery' },
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
  ]
  
  const seasoning = [
    { name: "Ancho Chili Powder", qty: .5, unit: 'tsp', aisle: 'baking' },
  
    { name: "Bold and Savory Steak Spice", qty: .5, unit: 'TBSP', aisle: 'baking' },
  
    { name: 'Cajun Spice Blend', qty: 1, unit: 'TBSP', aisle: 'baking' },
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
    
    { name: 'Old Bay Seasoning', qty: .5, unit: 'TBSP', aisle: 'baking' },
  
    
  ]
  
  const dairy = [
    { name: 'Cheddar Cheese', qty: .25, unit: 'block', aisle: 'cheese' },
    { name: 'Cream Cheese', qty: 2, unit: 'TBSP', aisle: 'cheese' },
    { name: 'Cream Sauce Base', qty: 2, unit: 'oz', aisle: 'dairy' },
  
    { name: "Eggs", qty: 1, unit: 'egg', aisle: 'dairy' },
  
    { name: 'Gouda Cheese', qty: 1, unit: 'Slice', aisle: 'cheese' },
  
    { name: 'Mexican Cheese Blend', qty: .25, unit: 'block', aisle: 'cheese' },
    { name: 'Monterey Jack Cheese', qty: .25, unit: 'block', aisle: 'cheese' },
    { name: 'Mozzarella Cheese', qty: .5, unit: 'block', aisle: 'cheese' },
  
    { name: 'Parmesan Cheese', qty: .25, unit: 'block', aisle: 'cheese' },
    { name: 'Pepper Jack Cheese', qty: .25, unit: 'block', aisle: 'cheese' },
  
    { name: 'Sour Cream', qty: 1, unit: 'TBSP', aisle: 'dairy' },
  
    { name: 'Yogurt', qty: .25, unit: 'cup', aisle: 'dairy' },
  
    { name: 'White Cheddar Cheese', qty: .25, unit: 'block', aisle: 'cheese' },
  ]
  
  const snack = [
    { name: 'Doritos Cool Ranch', qty: .25, unit: 'bag', aisle: 'cheese' },
    { name: 'Cheddar Ruffles', qty: .25, unit: 'bag', aisle: 'cheese' },
    { name: 'Tortilla Chips', qty: .25, unit: 'bag', aisle: 'cheese' },
  ]