import React from 'react'
import { useDispatch } from 'react-redux'
import {actionCreators} from '../state/index'

const BalanceItem = (props) => {
  const dispatch = useDispatch()
  const downbalance = ()=>{
    dispatch(actionCreators.decreasebalance(parseInt(props.money)))
  }
  const upbalance = ()=>{
    console.log(parseInt(props.money))
    dispatch(actionCreators.increasebalance(parseInt(props.money)))
  }
  return (
    <div className='my-3 mx-3'>
      <div className="card" style={{"width": "18rem"}}>
        <div className="card-body">
            <h5 className="card-title">{props.money} Rs card</h5>
            <p className="card-text">You can increase or decrease your balance by {props.money} Rs.</p>
            
            <button className="btn btn-primary mx-2" onClick={downbalance}>Decrease</button>
            <button className="btn btn-primary mx-2" onClick={upbalance}>Increase</button>
        </div>
        </div>
    </div>
  )
}

export default BalanceItem
