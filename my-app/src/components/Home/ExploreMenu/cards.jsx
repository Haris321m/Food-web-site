// components/explore/Cards.js

import React, { useContext } from "react";
import { CartContext } from '../../cart/CartContext';

function Cards(props){
    const { onAddToCart } = useContext(CartContext);

    return(
        <>
            <div className="card hover:cursor-pointer">
                <div className="img flex justify-center items-center text-center rounded-full overflow-hidden w-56">
                    <img src={props.img} alt="" />
                </div>
                <div className="title flex justify-center items-center text-center">
                    <h1>{props.title}</h1>
                </div>
            </div>
        </>
    )
}

export default Cards;
