import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    // const total = cart.reduce((total,prd) =>total + prd.price , 0)
     let total =0; 
    for(let i=0; i< cart.length; i++){
      const product =cart[i];
      total=total + product.price;
    }
    let shipping = 12.99;
    if(total>35){
        shipping=0;
    }
    
    else if(total>15){
        shipping=4.99;
    }
    else if(total>15){
        shipping=4.99;
    }

     const tax =(total/10).toFixed(2);
     const grandtotal = (total+shipping + Number(tax)).toFixed(2);

    return (
        <div>
            <h1>Order Summary</h1>
            <p>Items Ordered:{cart.length} </p>
            <p>product Price:{total}</p>
            <p><small>shipping Cost:{shipping}</small></p>
            <p><small>Tax+ Vat:{tax}</small></p>
            <p>Total price:{grandtotal}</p>
        </div>
    );
};

export default Cart;