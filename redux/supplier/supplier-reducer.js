import { ADD_SUPPLIER, DELETE_SUPPLIER } from "./supplier-action";

const initialState = {
    suppliers: []
}

const supplierReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_SUPPLIER: {
            const { id, supplier } = action.payload;
            return {
                ...state,
                suppliers: [...state.suppliers, { id, supplier }]
            };
        }
        case DELETE_SUPPLIER: {
            return {
                suppliers: [
                    ...state.suppliers.filter(supplier => supplier.id !== action.payload)
                ]
            };
        }
        default:
            return state;
    }
}

export default supplierReducer;