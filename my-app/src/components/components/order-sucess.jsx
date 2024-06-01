import React from 'react'

function OrderSucess(){

    return(

        <>
        
            <div className="OrderSucess">
                <h1></h1>
                <h2>Your order has been placed successfully Thankyou For Your Purchase</h2>
                <p>Your order number is 1234569874</p>
                <h3>Get In:</h3>
                <div>
                    <h1>{}</h1>
                    <div><h3> Track the delivery of your order </h3><button>Track Order</button></div>
                    <h2>Please ready your amount</h2>
                    <h2>{}</h2>
                    <div className="btn">
                        <button>Go to Homepage</button>
                        <button>Cancel my order</button>
                    </div>
                </div>
            </div>

        </>

    )

}

export default OrderSucess;