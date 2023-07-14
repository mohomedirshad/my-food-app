export const ADD_SUPPLIER = "ADD_SUPPLIER";
export const DELETE_SUPPLIER = "DELETE_SUPPLIER";

let supplierId = 0;

export const addSupplier = (supplier) => ({
    type: ADD_SUPPLIER,
    payload: {
        id: ++supplierId,
        supplier
    }
});

export const deleteSupplier = (supplier) => ({
    type: DELETE_SUPPLIER,
    payload: supplier
});
