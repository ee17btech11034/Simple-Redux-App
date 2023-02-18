import React from 'react'

const BalanceItem = () => {
  return (
    <div className='my-3 mx-3'>
      <div className="card" style={{"width": "18rem"}}>
        <div className="card-body">
            <h5 className="card-title">{5} Rs card</h5>
            <p className="card-text">You can increase or decrease your balance by {5} Rs.</p>
            
            <button className="btn btn-primary mx-2">Decrease</button>
            <button className="btn btn-primary mx-2">Increase</button>
        </div>
        </div>
    </div>
  )
}

export default BalanceItem
