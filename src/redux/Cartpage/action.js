import { ERROR, LOADING, SUCCESS } from "./actiontype"


export const cartReducer = (dispatch)=>{
    dispatch({type : LOADING})
    // fetch(`https://mock-server-app2-dll0.onrender.com/newproduct`)
    fetch(`https://mock-server-app-2-88b4.onrender.com/cart`)
    .then((res)=>res.json())
    .then((res)=>{
        dispatch({type : SUCCESS, payload : res})
    })
    .catch((err)=>{
        dispatch({type : ERROR, payload:err})
    })
}
    