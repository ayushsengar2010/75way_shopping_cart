export const cartReducer =(state,action) => {
    switch(action.type) 
    {
    case "ADD_TO_CART":
        return [...state,action.payload];
    case "REMOVE_FROM_CART":
        return state.filter(item => item.id !== action.payload);
    case "UPDATE_QTY":
        return state.map(item => item.id === action.payload.id? 
            {
                ...item, qty: action.payload.qty
            }
            : item
        );
        case "CLEAR_CART":
            return [];
        default:
            return state;
    }    

};