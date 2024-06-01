import React from 'react'

function Cards(props){

    return(

        <>
        
            <div className="cards flex border-2 rounded-xl border-black p-3">
                <div className="img">
                    <img src={props.img} alt="" />
                </div>
                <div className="text ml-3">
                    <h1 className='font-bold'>{props.name}</h1>
                    <h1 className='lg:font-medium md:font-thin lg:text-md md:text-sm'>{props.review}</h1>
                </div>
            </div>

        </>

    )

}

export default Cards;