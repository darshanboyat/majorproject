import React from 'react'
import products from './CartDummyData'
var total = 0;

function Counter(count){
    console.log(total)
    total += count
}
function Cart() {
  return (
    <>
        <div className="container px-1 text-center cart-container">
        <div className="row gx-1">
          <div className="col">
            {
                products.map(prod =>{
                    return(
                        <div className="p-3 d-flex border mb-3 bg-light">
                            <img src={prod.image} width="15%" alt="" />
                            <h2 className='prod'>{prod.Product}</h2>
                            <h2 className='prod'>{prod.Quantity}</h2>
                            <h2 className='prod'>&#8377; {prod.price * prod.Quantity}</h2>
                            {Counter(prod.price * prod.Quantity)}
                        </div>
                    )
                })
            }
          </div>
        </div>
      </div>
      <figure className="figure">
        <h1 className="d-flex total-box">Total :-  &#8377; {total}</h1>
        <button type="button" className="total-box btn btn-success">Place Order</button>
      </figure>
    </>
  )
}

export default Cart