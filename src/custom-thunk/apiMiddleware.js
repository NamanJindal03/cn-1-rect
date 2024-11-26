import { fetchProductFailure, fetchProductSuccess, fetchProductRequest } from "./productSlice"
export const fetchProducts = () => {
    return async (dispatch) => {
        console.log(dispatch)
        dispatch(fetchProductRequest());
        try{
            const response = await fetch("https://fakestoreapi.com/products");
            if(!response.ok){
                throw new Error("failed to fetch products")
            }
            const data = await response.json();
            dispatch(fetchProductSuccess(data));
        }
        catch(err){
            dispatch(fetchProductFailure(err.message))
        }
    }
}
