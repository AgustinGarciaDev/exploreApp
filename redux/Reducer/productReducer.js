
const initialState = {
    allProducts:[]
}

const productsReducer =( state = initialState, action )=>{

    switch (action.type) {
        case "FETCHALLPRODUCTS" :
            return{
                ...state,
                allProducts: action.payload
            }
    
        default: return state
        
    }
}

export default productsReducer