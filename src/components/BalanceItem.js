import React from 'react'

const BalanceItem = (props) => {
  const decreasebalance = ()=>{

  }
  const increasebalance = ()=>{

  }
  return (
    <div className='my-3 mx-3'>
      <div className="card" style={{"width": "18rem"}}>
        <div className="card-body">
            <h5 className="card-title">{props.money} Rs card</h5>
            <p className="card-text">You can increase or decrease your balance by {props.money} Rs.</p>
            
            <button className="btn btn-primary mx-2" onClick={decreasebalance}>Decrease</button>
            <button className="btn btn-primary mx-2" onClick={increasebalance}>Increase</button>
        </div>
        </div>
    </div>
  )
}

export default BalanceItem
