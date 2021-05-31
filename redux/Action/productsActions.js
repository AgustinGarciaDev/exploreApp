import axios from "axios"

const productsActions ={
    fetchAllProducts:()=>{
        return(dispatch)=>{
            axios.get("http://localhost:4000/api/products")
            .then( data => dispatch({ type:"FETCHALLPRODUCTS", payload: data.data.result })  )
            .catch( err => console.log( err ) )
        }
    }
}

export default productsActions
