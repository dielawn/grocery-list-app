// Recipies
const recipes = [
    { name: 'Sweet Chili Pork Bowls', 
    ingredients: sweetChiliPorkBowlIngredients, 
    image: 'images/sweet-chili-pork-bowls.avif',
    instructions:'instructions/sweet-chili-pork-bowls.pdf',
    link: 'https://www.hellofresh.com/recipes/sweet-chili-pork-bowls-5efb358e43975d50ea6927d2'
},

{ name: 'Sesame Soy Pork Bowls',
ingredients: sesameSoyPorkBowlIngredients,
image: 'images/sesame-soy-pork-bowl.avif',
instructions:'instructions/sesame-soy-pork-bowls.pdf',
link: 'https://www.hellofresh.com/recipes/sesame-soy-pork-bowls-5fa06a5f20b9661c0d5e342f'
},

{ name: 'Chimi Chicken & Yellow Rice Bowls',
ingredients: chimiChickenAndYellowRiceBowlIngredients,
image: 'images/chimi-chicken-yellow-rice-bowls.avif',
instructions:'instructions/chimi-chicken-yellow-rice-bowls.pdf',
link: 'https://www.hellofresh.com/recipes/chimi-chicken-yellow-rice-bowls-5e5e9a73e0678c51867e16db'
},

{ name: 'Thai Basil Beef Bowls',
ingredients: thaiBasilBeefBowlIngredients,
image: 'images/thai-basil-beef-bowls.avif',
instructions:'instructions/thai-basil-beef-bowls.pdf',
link: 'https://www.hellofresh.com/recipes/thai-basil-beef-bowls-5e39b0b7055a3835f148531a'
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
{ name: 'Bacon Jalapeno Mac & Cheese',
ingredients: baconJalapenoMacAndCheeseIngredients,
image: 'images/bacon-jalapeno-mac-cheese.avif',
instructions:'instructions/bacon-jalapeno-mac-cheese.pdf',
link: 'https://www.hellofresh.com/recipes/bacon-jalapeno-mac-cheese-615db9700ab39518157b909f'
},
{ name: 'Epic Nacho Mac & Cheese',
ingredients: epicNachoMacAndCheeseIngredients,
image: 'images/epic-nacho-mac-cheese.avif',
instructions:'epic-nacho-mac-cheese.pdf',
link: 'https://www.hellofresh.com/recipes/epic-nacho-mac-n-cheese-6171950af588a0150a5570f4'
},
{ name: 'Veggie Burrito Bowl',
ingredients: veggieBurritoBowlIngredients,
image: 'images/veggie-burrito-bowl.avif',
instructions:'veggie-burrito-bowl.pdf',
link: 'https://www.hellofresh.com/recipes/veggie-burrito-bowls-5e5ea67325ed1a2b107a3598'
},
{ name: 'One-Pan Cajun Pork Sausage Skillet',
ingredients: onePanCajunPorkSausageSkilletIngredients,
image: 'images/one-pan-cajun-pork-sausage-skillet.avif',
instructions:'one-pan-cajun-pork-sausage-skillet.pdf',
link: 'https://www.hellofresh.com/recipes/one-pan-cajun-pork-sausage-skillet-61e6f0ac9853836f347a1f1d'
},
{ name: 'Pork Sausage and Bell Pepper Risotto',
ingredients: porkSausageAndBellPepperRisottoIngredients,
image: 'images/pork-sausage-bell-pepper-risotto.avif',
instructions:'pork-sausage-bell-pepper-risotto.pdf',
link: 'https://www.hellofresh.com/recipes/pork-sausage-bell-pepper-risotto-617041791f771a6a0b36e4b2'
},
{ name: 'Chicken Enchiladas Verdes',
ingredients: chickednEnchiladasVerdesIngredients,
image: 'images/salsa-verde-chicken-enchiladas.avif',
instructions:'salsa-verde-chicken-enchiladas.pdf',
link: 'https://www.hellofresh.com/recipes/salsa-verde-chicken-enchiladas-5dfd0bae39b70a23332c4678'
},
{ name: 'Honey Thyme Pork Tenderloin',
ingredients: honeyThymePorkTenderloinIngredients,
image: 'images/honey-thyme-pork-tenderloin.avif',
instructions:'honey-thyme-pork-tenderloin.pdf',
link: 'https://www.hellofresh.com/recipes/honey-thyme-pork-tenderloin-615db8f220008b2e0307f097'
},
{ name: 'Peachy Keen BBQ-Rubbed Pork Chops',
ingredients: peachyKeenBbqRubbedPorkChopsIngredients,
image: 'images/peachy-keen-bbq-rubbed-pork-chops.avif',
instructions:'peachy-keen-bbq-rubbed-pork-chops.pdf',
link: 'https://www.hellofresh.com/recipes/peachy-keen-bbq-rubbed-pork-chops-61795d17951b0e24e516bead'
},
{ name: 'Steakhouse-Style Pork Chops',
ingredients: steakhouseStylePorkChopsIngredients,
image: 'images/steakhouse-pork-chops.avif',
instructions:'steakhouse-pork-chops.pdf',
link: 'https://www.hellofresh.com/recipes/steakhouse-pork-chops-5ff4c5c85811d66eb9512c50'
},
{ name: 'Al Pastor Pulled Pork Tacos',
ingredients: alPastorPulledPorkTacoIngredients,
image: 'images/al-pastor-pulled-pork-tacos.avif',
instructions:'al-pastor-pulled-pork-tacos.pdf',
link: 'https://www.hellofresh.com/recipes/al-pastor-pulled-pork-tacos-6239d8fa96d43a56f83be59f'
},
{ name: 'Cheesy Beef Tostadas',
ingredients: cheesyBeefTostadasIngredients,
image: 'images/cheesy-beef-tostadas.avif',
instructions:'cheesy-beef-tostadas.pdf',
link: 'https://www.hellofresh.com/recipes/cheesy-beef-tostadas-5e94c0640d7f123476528c9e'
},
{ name: 'Yucatan Citrus Chicken Bowl',
ingredients: yucatanCitrusChickenBowlIngredients,
image: 'images/yucatan-citrus-chicken-bowls.avif',
instructions:'yucatan-citrus-chicken-bowls.pdf',
link: 'https://www.hellofresh.com/recipes/yucatan-citrus-chicken-bowls-621e8530b089c66fdb1a5599'
},
{ name: 'Rio Rancho Pulled Pork Tacos',
ingredients: rioRanchoPulledPorkTacoIngredients,
image: 'images/rio-rancho-pulled-pork-tacos.avif',
instructions:'rio-rancho-pulled-pork-tacos.pdf',
link: 'https://www.hellofresh.com/recipes/rio-rancho-pulled-pork-tacos-5e5ce98d740b5917bc02d716'
},
{ name: 'Balsamic and Fig Beef Tenderloin',
ingredients: balsamicAndFigBeefTenderloinIngredients,
image: 'images/balsamic-fig-beef-tenderloin.avif',
instructions:'balsamic-fig-beef-tenderloin.pdf',
link: 'https://www.hellofresh.com/recipes/balsamic-fig-beef-tenderloin-5f3aeb9bad6a05609c7d8cac'
},
{ name: 'Chicken Sausage & Rice Skillet',
ingredients: southwestChickedSausageAndRiceSkilletIngredients,
image: 'images/southwest-chicken-sausage-rice-skillet.avif',
instructions:'southwest-chicken-sausage-rice-skillet.pdf',
link: 'https://www.hellofresh.com/recipes/southwest-chicken-sausage-rice-skillet-6076d3ba1b35831bb538d476'
},
{ name: 'Melty Double Red Pepper Panini',
ingredients: meltyDoubleRedPepperPaniniIngredients,
image: 'images/double-red-pepper-panini.avif',
instructions:'double-red-pepper-panini.pdf',
link: 'https://www.hellofresh.com/recipes/double-red-pepper-panini-6239d8a288ef2226660b2f87'
},
{ name: 'Black Bean & Pepper Quesadillas',
ingredients: blackBeanPepperQuesadillaIngredients,
image: 'images/black-bean-quesadillas.avif',
instructions:'black-bean-quesadillas.pdf',
link: 'https://www.hellofresh.com/recipes/black-bean-quesadillas-5e94c48ee884b05a1c0e32c2'
},
{ name: 'One-Pan Pork Fajita Lettuce Wrap',
ingredients: onePanPorkFajitaLettuceWrapngredients,
image: 'images/one-pan-pork-fajita-lettuce-cups.avif',
instructions:'one-pan-pork-fajita-lettuce-cups.pdf',
link: 'https://www.hellofresh.com/recipes/one-pan-pork-fajita-lettuce-cups-6231f20c57fc3010631bb574'
},
{ name: 'Sheet Pan Monterey Jack Chicken',
ingredients: sheetPanMontereyJackChickenIngredients,
image: 'images/monterey-jack-un-fried-chicken.avif',
instructions:'monterey-jack-un-fried-chicken.pdf',
link: 'https://www.hellofresh.com/recipes/monterey-jack-un-fried-chicken-61f9829bc37180194a54cb5b'
},
{ name: 'Bulgogi Pork Tenderloin',
ingredients: bulgogiPorkTenderloinIngredients,
image: 'images/bulgogi-pork-tenderloin.avif',
instructions:'bulgogi-pork-tenderloin.pdf',
link: 'https://www.hellofresh.com/recipes/bulgogi-pork-tenderloin-61d4c2208a7a0c7c44733a7d'
},
{ name: 'Steak and Green Pepper Quesadillas',
ingredients: steakAndGreenPepperQuesadillasIngredients,
image: 'images/steak-green-pepper-quesadillas.avif',
instructions:'steak-green-pepper-quesadillas.pdf',
link: 'https://www.hellofresh.com/recipes/steak-green-pepper-quesadillas-5ea8310a56a9d32f9d717bc9'
},
{ name: 'Chicken Pineapple Qesadillas',
ingredients: chickenPineappleQuesadillasIngredients,
image: 'images/chicken-pineapple-quesadillas.avif',
instructions:'chicken-pineapple-quesadillas.pdf',
link: 'https://www.hellofresh.com/recipes/chicken-pineapple-quesadillas-5e5026694cd03e416b3ebf93'
},
{ name: 'Pork & Poblano Tacos',
ingredients: porkAndPoblanoTacoIngredients,
image: 'images/pork-and-poblano-tacos.avif',
instructions:'pork-and-poblano-tacos.pdf',
link: 'https://www.hellofresh.com/recipes/pork-and-poblano-tacos-5d35c6b276961900177709c0'
},
{ name: 'Harissa Sweet Potato pockets',
ingredients: harissaSweetPotatoPocketIngredients,
image: 'images/harissa-sweet-potato-pita-pockets.avif',
instructions:'harissa-sweet-potato-pita-pockets.pdf',
link: 'https://www.hellofresh.com/recipes/harissa-sweet-potato-pita-pockets-5f15dcd008c01b2af5444822'
},
{ name: "Mushroom & Herb Shepherd's Pie",
ingredients: mushroomHerbSheperdsPieIngredients,
image: 'images/mushroom-herb-shepherd-s-pie.avif',
instructions:'mushroom-herb-shepherd-s-pie.pdf',
link: 'https://www.hellofresh.com/recipes/mushroom-herb-shepherd-s-pie-614b46bfcbfa3317d5247f22'
},
{ name: 'One-Pot Beef & Black Bean Chili',
ingredients: onePotBeefBlackBeanChiliIngredients,
image: 'images/one-pot-beef-black-bean-chili.avif',
instructions:'one-pot-beef-black-bean-chili.pdf',
link: 'https://www.hellofresh.com/recipes/one-pot-beef-black-bean-chili-5d76b40292f8cd000f15374a'
},
{ name: 'template',
ingredients: '',
image: 'images/',
instructions:'',
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