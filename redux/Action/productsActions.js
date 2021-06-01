import axios from "axios"

const productsActions ={
    fetchAllProducts:()=>{
        return(dispatch)=>{
            axios.get("https://explore-2021.herokuapp.com/api/products")
            .then( data => dispatch({ type:"FETCHALLPRODUCTS", payload: data.data.result }) )
            .catch( err => console.log( err ) )
        }
    }
}

export default productsActions
