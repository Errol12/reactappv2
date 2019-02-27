import React from 'react';

const Ninjas = ({ ninjas }) => {

        // const ninjaList = ninjas.map(ninja => {
        // if(ninja.age > 20)
        // {
        //     return (
        //         <div className="ninja" key={ninja.id}>
        //         <div>Name: {ninja.name}</div>
        //         <div>Age: {ninja.age}</div>
        //         <div>Belt: {ninja.belt}</div>
        //         </div>
        //     )
        // }else{
        //     return null
        // }
            
        // })

        const ninjaList = ninjas.map(ninja=>{
            //condition > 20 ? () : ()
            return ninja.age > 20 ? (
                <div className="ninja" key={ninja.id}>
                 <div>Name: {ninja.name}</div>
                 <div>Age: {ninja.age}</div>
                 <div>Belt: {ninja.belt}</div>
                 </div> 
            ) : null;
        })

        return (
            <div className="ninjaList">
                { ninjaList }
            </div>
        )
    
}

export default Ninjas;