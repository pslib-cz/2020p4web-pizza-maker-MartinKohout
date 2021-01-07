import {
  ADDINGREDIENT, 
  DELETEINGREDIENT, 
  SELECTINGREDIENT,
  REMOVESELECTEDINGREDIENT, 
  SETFOODTYPE
} from './actionTypes';


 const stateReducer = (state, action) => {
    // /ingrediants
    if(action.type === ADDINGREDIENT) {
      const newIngredients = [...state.ingredients, action.payload];
      newIngredients.sort((a, b) => (a.category > b.category) ? 1 : -1); // sort alphabetically so i can create category headers
      return {...state, ingredients: newIngredients};
    }
    if(action.type === DELETEINGREDIENT) {
      const newIngredients = state.ingredients.filter(element => element !== action.payload);
      newIngredients.sort((a, b) => (a.category > b.category) ? 1 : -1); // sort alphabetically so i can create category headers
      return  {...state, ingredients: newIngredients};
    }
    // /order
    if(action.type === SELECTINGREDIENT) {
      const newIngredients = [...state.ingredients];
      const newSelectedIngredients = [...state.order.selectedIngredients, action.payload]
      newIngredients.sort((a, b) => (a.category > b.category) ? 1 : -1); // sort alphabetically so i can create category headers
      newIngredients.forEach(ingredient => {
        if(ingredient.category === action.payload.category){
          ingredient.allowed = false;
        }
      })
      const newOrder = {...state.order, selectedIngredients: newSelectedIngredients };
      
      return {...state, ingredients: newIngredients, order: newOrder };
    }
    if(action.type === REMOVESELECTEDINGREDIENT) {
      const newSelectedIngredients = state.order.selectedIngredients.filter(element => element !== action.payload);
      const newOrder = {...state.order, selectedIngredients: newSelectedIngredients };
      const newIngredients = [...state.ingredients];
      newIngredients.sort((a, b) => (a.category > b.category) ? 1 : -1); // sort alphabetically so i can create category headers
      newIngredients.forEach(ingredient => {
        if(ingredient.category === action.payload.category){
          ingredient.allowed = true;
        }
      })
      return  {...state, ingredients: newIngredients, order: newOrder};
    }
    if(action.type === SETFOODTYPE) { // sort alphabetically so i can create category headers
      const newOrderType = {...state.order.type, type: action.payload };
      const newOrder = {...state.order, type: newOrderType };
      return {...state, order: newOrder};
    }
  }

  export default stateReducer;