import { combineReducers } from "redux";
import amountreducer from './amountreducer'

const reducers = combineReducers({
    amount: amountreducer //isme aise hi sare reducer ko daal do.
})

export default reducers;