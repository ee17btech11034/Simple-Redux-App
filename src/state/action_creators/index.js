export const decreasebalance =(amount)=>{
    return (dispatch)=>{
        dispatch({
            type: "withdraw",
            payload: amount
        })
    }
}

export const increasebalance =(amount)=>{
    return (dispatch)=>{
        dispatch({
            type: "deposit",
            payload: amount
        })
    }
}