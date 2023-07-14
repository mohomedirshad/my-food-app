export const ADD_FOOD = "ADD_FOOD";
export const DELETE_FOOD = "DELETE_FOOD";

let foodId = 0;

export const addFood = food => ({
    type: ADD_FOOD,    
    payload: {
        id: ++foodId,
        food
    }
});

export const deleteFood = food => ({
    type: DELETE_FOOD,
    payload: food
})