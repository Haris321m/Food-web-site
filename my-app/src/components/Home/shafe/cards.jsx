import React from 'react'

function Cards(props){

    return(

        <>
        
            <div className="cards flex ml-3 my-3">
                <div className="img">
                    <img src={props.img} alt="" className='w-10 h-10 bg-white rounded-full mr-3'/>
                </div>
                <div className="text ml-2">
                    <p>{props.text}</p>
                </div>
            </div>

        </>

    )

}

export default Cards;