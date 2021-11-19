import "../App.css";

export default function Cart(props) {
    const { cartData,cartTotal,removeFromCart } = props;
    const proceedToCheckout=()=>{

    }
    
  
    return (
        <div className="cartblock">
        <b>Your Cart Summary</b>
        <div className="cart-header">
          <div className="cart-headerdata">Items in Cart</div>
          <div className="cart-headerdata">cartTotal $</div>
        </div>
        <div className="cart-header">
          <div className="cart-headerdata">{cartData.length}</div>
          <div className="cart-headerdata">${cartTotal}</div>
        </div>
        <hr />

        <div className="cart-header">
          <div className="cart-headerdata">Items</div>
          <div className="cart-headerdata">Quanity</div>
          <div className="cart-headerdata">Price</div>
          <div className="cart-headerdata">Action</div>
        </div>

        {cartData.map((item, index) => (
          <div key ={index}>
            <hr />
            <div className="cart-header">
              <div className="cart-headerdata">
                <b>{item.name}</b> - {item.description}
              </div>
              <div className="cart-headerdata">{item.quantity}</div>
              <div className="cart-headerdata">{item.price}</div>
              <div className="cart-headerdata">
                <button
                  className="btn btn-danger"
                  onClick={() => removeFromCart(item)}
                >
                  Remove
                </button>
              </div>

            
            </div>
          </div>
        ))}
        { cartData.length >0  &&
        <>
         
           <div className="cart-checkout"> <b>Total Cart Value including tax (HST 18%) : ${(cartTotal + cartTotal* 0.18).toFixed(2)} </b></div>
          
          <button
                  className="btn btn-primary"
                  onClick={() => proceedToCheckout()}
                >
                  Proceed to checkout
            </button>
            </>
        } 
      </div>
    )
}

