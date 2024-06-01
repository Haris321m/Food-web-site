import React from 'react';
import Content from './list.js'
import Cards from './cards'

function content(status){

    return(

        <Cards 
            img = {status.img}
            text = {status.text}
        />

    )

}

function Shafe(){

    return(

        <>
        
            <div className="shafe grid lg:grid-cols-4 md:grid-cols-2 overflow-hidden px-10 py-10  bg-darkgreen mt-20">
                {Content.map(content)}
            </div>

        </>

    )

}

export default Shafe;