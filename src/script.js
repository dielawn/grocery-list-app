//all units are single serving
import { jsPDF } from "jspdf";
import{recipes} from '../dist/recipes.bundle.js';


let groceryList = []
let savedRecipes = []

const searchDiv = document.getElementById('searchDiv')
const listDiv = document.getElementById('listDiv');

const servingSizeSelect = document.getElementById('servingSizeSelect');
const servingSizeDiv = document.getElementById('servingSizeDiv')
const itemInput = document.getElementById('itemInput')
const qtyInput = document.getElementById('qtyInput')
const unitInput = document.getElementById('unitInput')
const aisleInput = document.getElementById('aisleSelect')

const handleLocalStorage = () => {
  clearLocalStorage()
  for(let i = 0; i < groceryList.length; i++){
  let itemKey = 'ingredient' + i
  // console.log(groceryList[i].name)
  let itemValue = { name: groceryList[i].name, qty: groceryList[i].qty, unit: groceryList[i].unit, aisle: groceryList[i].aisle }
  saveToLocalStorage(itemKey, itemValue, groceryList)
} 
}

//rename ingredient
const loadLocalStorageList = () => {
  if (groceryList.length === 0) {
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const value = localStorage.getItem(key);
      // console.log('key:', key, 'value:', value)
      if(key.startsWith('ingredient')){
        let localStorageKey = `ingredient${i}`
        // console.log(`${localStorageKey}, ingredient${i} 1193`)
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
    handleLocalStorage()
  }
}

const saveToLocalStorage = (key, value, list) => {  
  
  for(let i = 0; i < list.length; i++){
    console.log(`saveToLocalStorage List: ${list[i].name}`)
    let itemKey = 'ingredient' + i
    let itemValue = { name: list[i].name, qty: list[i].qty, unit: list[i].unit, aisle: list[i].aisle }
    console.log(`saveToLocalStorage ItemKey: ${itemKey}, ItemValue: ${itemValue.name}, `)
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

const aisleOrder = ['dairy', 'freezer', 'cheese', 'snack', 'butcher', 'ethnic', 'noodle',  'canned', 'baking', 'cereal', 'condiment', 'bakery', 'produce', 'nutrition', ''];
const aisleSelectorDiv = document.getElementById('aisleOrderDiv');

const renderAisleOrder = () => {
  for (let i = 0; i < aisleOrder.length; i++) {
    // console.log(aisleOrder[i])
  let listElement = document.createElement('div');  
  listElement.classList = 'aisle-order';
  let aisleName = aisleOrder[i]
  let firstLetter = aisleName.charAt(0)
  let remainingLetters = aisleName.substring(1)
  let firstLetterCap = firstLetter.toUpperCase()
  let capitalizedName = firstLetterCap + remainingLetters

  listElement.textContent = capitalizedName
  aisleSelectorDiv.appendChild(listElement)
  }

}



const createAisleSelector = () => {

  aisleSelectorDiv.innerHTML = ''

  const selectAisleElement = document.createElement('select');
  selectAisleElement.name = 'aisleOrderName';
  selectAisleElement.id = 'aisleOrderSelector';

  const selectIndexElement = document.createElement('select');
  selectIndexElement.name = 'aisleOrderIndex';
  selectIndexElement.id = 'aisleOrderIndex';

  for (let i = 0; i < aisleOrder.length; i++) {
    const optionElement = document.createElement('option');
    optionElement.value = i.toString();
    optionElement.textContent = aisleOrder[i];
    selectAisleElement.appendChild(optionElement);

    const optionIndexElement = document.createElement('option')
    optionIndexElement.value = i.toString();
    optionIndexElement.textContent = i + 1;
    selectIndexElement.appendChild(optionIndexElement)
  }

  aisleSelectorDiv.appendChild(selectAisleElement);
  aisleSelectorDiv.appendChild(selectIndexElement);
  
  // const aisleSelector = document.getElementById('aisleOrderSelector');
  // const aisleIndexSelector = document.getElementById('aisleOrderIndex');

  createBtn('aisleOrderDiv', 'Change Index', 'changeIndexBtn')
const aisleIndexBtn  = document.getElementById('changeIndexBtn')
aisleIndexBtn.addEventListener('click', () => {
  setAisleOrder(aisleOrder, selectAisleElement.value, selectIndexElement.value)
  sortGroceryListByAisle(groceryList)
  renderList(groceryList)
  renderAisleOrder()
  createAisleSelector()
})
renderAisleOrder()
};

const setAisleOrder = (array, oldIndex, newIndex) => {
  // console.log(`Before reorder: ${array}`);
  if (newIndex >= array.length) {
    var k = newIndex - array.length;
    while ((k--) + 1) {
      array.push(undefined);
    }
  }
  array.splice(newIndex, 0, array.splice(oldIndex, 1)[0]);
  // console.log(`After reorder: ${array}`);
  return array;
};

createAisleSelector();




  const sortGroceryListByAisle = (list) => {
    
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
  if (selectedMealListDiv.querySelector('.list-header') === null) {
    const textHeader = document.createElement('h1');
    const textEmphasis = document.createElement('em');
    textHeader.textContent = 'Selected Recipes';
    textHeader.classList.add('list-header');
    selectedMealListDiv.appendChild(textEmphasis);
    textEmphasis.appendChild(textHeader);
  }

  if (recipeName === 'clearList') {
    selectedMealListDiv.innerHTML = '';
  } else {
    let listElement = document.createElement('div');
    listElement.classList = 'meal-list';
    listElement.textContent += `${recipeName}`;
    selectedMealListDiv.appendChild(listElement);
  }
};


const renderList = (list) => {    
  listDiv.innerHTML = ''; // clear the container before adding new elements  

  const textHeader = document.createElement('h1');
  const textEmphasis = document.createElement('em')
  textHeader.textContent = 'Grocery List';
  textHeader.classList.add('list-header');
  listDiv.appendChild(textEmphasis);
  textEmphasis.appendChild(textHeader)


  let servingSize = servingSizeSelect.value;
  
  for (let i = 0; i < list.length; i++) {
    let listElement = document.createElement('div');
    let removeBtn = document.createElement('button');

    let quantity = list[i].qty;
    let adjustedQuantity = quantity * servingSize;
      
    listDiv.appendChild(listElement);
    listElement.classList = 'shopping-list';
    listElement.id = `shoppingList${i}`
    listElement.textContent = `${list[i].name} ${adjustedQuantity}, ${list[i].unit}`;
    listElement.appendChild(removeBtn);

    removeBtn.textContent = 'X';
    removeBtn.classList = 'removeBtn'
    removeBtn.addEventListener('click', createRemoveListener(listElement, i));
   
  }
};



const createRemoveListener = (listElement, index) => {
  return () => {
    let text = listElement.textContent.split(' ').slice(0, -2).join(' ');
    let result = -1;

    for (let i = 0; i < groceryList.length; i++) {
      // console.log('Checking:', groceryList[i].name);
      if (groceryList[i].name === text) {
        result = i;
        break;
      }
    }

    // console.log('text:', text, 'result:', result);
    listElement.remove();

    if (result !== -1) {
      // console.log(result, groceryList);
      groceryList.splice(result, 1); // remove the item from the list
      clearLocalStorage()
      for(let i = 0; i < groceryList.length; i++){
      let itemKey = 'ingredient' + i
      // console.log(groceryList[i].name)
      let itemValue = { name: groceryList[i].name, qty: groceryList[i].qty, unit: groceryList[i].unit, aisle: groceryList[i].aisle }
      saveToLocalStorage(itemKey, itemValue, groceryList)
      } 
      // console.log(result, groceryList);
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

  createBtn('buttonDiv', 'Sort by Aisle', 'showHideAisleBtn')
  showHideAisleBtn.addEventListener('click', () => {
    if (aisleSelectorDiv.style.display != 'block'){
      aisleSelectorDiv.style.display = 'block'
      return
    }[
      aisleSelectorDiv.style.display = 'none'
    ]
  })

  createBtn('buttonDiv', 'Consolidate', 'consolidateBtn')
const combineSaveBtn = document.getElementById('consolidateBtn')
combineSaveBtn.addEventListener('click',() => {
  consolidateGroceryList(groceryList)
  
  renderList(groceryList)
}) 

  createBtn('buttonDiv', 'Save List', 'saveListBtn')
const saveBtn = document.getElementById('saveListBtn')
saveBtn.addEventListener('click', () => {
  clearLocalStorage()
  for(let i = 0; i < groceryList.length; i++){
  let itemKey = 'ingredient' + i
  let itemValue = { name: groceryList[i].name, qty: groceryList[i].qty, unit: groceryList[i].unit, aisle: groceryList[i].aisle }
  saveToLocalStorage(itemKey, itemValue, groceryList)
} 
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
  pdfList()
})



createBtn('addItemDiv', 'Add Item to List', 'addItemBtn')
const addItemBtn = document.getElementById('addItemBtn')
addItemBtn.addEventListener('click', () => {
  addItem(itemInput.value, qtyInput.value, unitInput.value, aisleInput.value)
  listDiv.classList.remove('blur')
  buttonDiv.classList.remove('blur')
  enableButtons()

})


createBtn('buttonDiv', 'Add Item', 'addItemFormBtn')
const formBtn = document.getElementById('addItemFormBtn')
formBtn.addEventListener('click', () => {
listDiv.classList.add('blur')
disableButtonSet('removeBtn')
buttonDiv.style.display = 'none'
displayHideForm()
})



createBtn('menuDiv', 'Grocery List', 'viewListBtn')
const viewListBtn = document.getElementById('viewListBtn')
viewListBtn.addEventListener('click', () => {
  consolidateGroceryList(groceryList)
  renderList(groceryList)
  displayHideList()
  displayHideButtons()
  

})


createBtn('addItemDiv', 'X', 'closeAddItemBtn')
const closeAddItemBtn = document.getElementById('closeAddItemBtn')
closeAddItemBtn.addEventListener('click', () => {
  listDiv.classList.remove('blur')
  buttonDiv.classList.remove('blur')
  displayHideForm()
  enableButtons()
  console.log('close form clicked')
})

const displayHideForm = () => {
  const itemForm = document.getElementById('addItemDiv')
    if(itemForm.style.display === 'flex'){
      itemForm.style.display = 'none'
    } else {
      itemForm.style.display = 'flex'
    }
}
const showHideButtonDiv = () => {
    let buttonDiv = document.getElementById('buttonDiv')
   
    if(buttonDiv.style.display != 'none'){
      buttonDiv.style.display = 'none'
      selectedMealListDiv.style.display = 'block'
      buttonDiv.style.position = 'absolute';
      buttonDiv.style.top = '20';
      buttonDiv.style.left = '0';
    }
      else if(buttonDiv.style.display === 'none'){
      buttonDiv.style.display = 'flex'
    }
   
  }


const displayHideButtons = () => {
  if(viewListBtn.textContent === 'Grocery List'){
    viewListBtn.textContent = 'View Recipes'
    
    dwnldPDFBtn.style.display = 'block'
    servingSizeDiv.style.display = 'block'
    formBtn.style.display = 'block'
    
  } else {
    viewListBtn.textContent = 'Grocery List'
    
    dwnldPDFBtn.style.display = 'none'
    servingSizeDiv.style.display = 'none' 
    // servingSizeSelect.style.display = 'none'
    formBtn.style.display = 'none'
    
  }
 }

 servingSizeSelect.addEventListener('change', () => {
  console.log('Serving size changed')
  renderList(groceryList)
 })

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

createBtn('buttonDiv', 'View Instructions', 'instructionsBtn')
const instructionsElement = document.getElementById('instructionDiv')

const displayHideInstructions = () => {
 
 if(instructionsElement.style.display != 'none'){
  instructionsElement.style.display = 'none'

  if(recipeDiv.classList.contains('blur')){
    recipeDiv.classList.remove('blur')
  }
  if(listDiv.classList.contains('blur')){
    listDiv.classList.remove('blur')
  }
  if(buttonDiv.classList.contains('blur')){
    buttonDiv.classList.remove('blur')
  }
  
  return
 }{
  disableButtonsExcept('closeInstrtuctionsBtn')
  instructionsElement.style.display = 'block'
  buttonDiv.classList.add('blur')
  recipeDiv.classList.add('blur')
  listDiv.classList.add('blur')
  
 }
 
}
createBtn('instructionDiv', 'X', 'closeInstrtuctionsBtn')
closeInstrtuctionsBtn.addEventListener('click', () => {
  instructionsElement.style.display = 'none'
  recipeDiv.classList.remove('blur')
  listDiv.classList.remove('blur')
  buttonDiv.classList.remove('blur')
  enableButtons()
})
instructionsBtn.addEventListener('click', () => {
  displayHideInstructions()
  showHideButtonDiv()
})

const clearLocalStorage = () => {
  localStorage.clear();
}

const searchRecipesByKeyword = (keyword) => {
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

const disableButtonsExcept = (exception) => {
  let buttons = document.querySelectorAll('button')
  buttons.forEach(function(button){
    if(button.classList.value != exception){
      button.disabled = true;
    }
  })
  
}
const disableButtonSet = (buttonClassName) => {
  let buttons = document.querySelectorAll('button')
  buttons.forEach(function(button){
if(button.classList.value === buttonClassName){
  button.disabled = true;
  }
})
}
const enableButtons = () => {
  let buttons = document.querySelectorAll('button')
  buttons.forEach(function(button){    
      button.disabled = false;    
  })
}



createBtn('searchDiv', 'Search', 'searchBtn')
searchBtn.addEventListener('click', () => { 
  let searchInput = document.getElementById('searchInput')
  let searchBtn = document.getElementById('searchBtn')
  searchRecipesByKeyword(searchInput.value)
  createBtn('searchDiv', 'Full List', 'fullListBtn')
  searchInput.value = ''
  searchBtn.style.display = 'none'
  document.getElementById('fullListBtn').addEventListener('click', () => {
    searchRecipesByKeyword('')
    createBtn('searchDiv', 'Search', 'searchBtn')
    document.getElementById('fullListBtn').remove()
  })
})




document.addEventListener('DOMContentLoaded', () => {
  let hamburgerIcon = document.getElementById('hamburgerIcon');
  hamburgerIcon.addEventListener('click', () => {
    showHideButtonDiv()
  });
});

const hideSelect = () => {
  if(viewListBtn.textContent === 'Grocery List'){
    servingSizeDiv.style.display = 'none' 
  }
}
const getRecipeIngredientNames = () => {
  console.log(recipes.length)
  for(let i = 0; i < recipes.length; i++){
    console.log(recipes[i].ingredients)
  }
}
createBtn('buttonDiv', 'List this SHIT', 'tempBtn')
const tempBtn = document.getElementById('tempBtn')
tempBtn.addEventListener('click', () => {
  getRecipeIngredientNames()
})

loadLocalStorageList()
window.addEventListener('DOMContentLoaded', () => {
  showHideButtonDiv(); // Call the function to set initial state
  displayHideInstructions()
  renderRecipes(recipes);
  hideSelect()
  getRecipeIngredientNames()
console.log('loaded')
  
});