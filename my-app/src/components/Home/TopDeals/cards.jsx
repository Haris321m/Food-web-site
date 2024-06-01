import React from 'react'
import { Link } from 'react-router-dom';

function Cards(props){

    return(

        <>
        
            <div className="card">
                <Link to='/deals'><img src={props.img} alt="" /></Link>
            </div>

        </>

    )

}

export default Cards;