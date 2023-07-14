import { ADD_FOOD, DELETE_FOOD } from "./food-action";

const initialState = {
    foods: []
};

const foodReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FOOD: {
            const { id, food} = action.payload;

            return {
                ...state,
                foods: [...state.foods, {id, food}]
            };
        }
        case DELETE_FOOD: {            
            return {                 
                foods: [
                    ...state.foods.filter(food => food.id !== action.payload)
                ]
            };
        }
    
        default:
            return state;
    }
}

export default foodReducer;