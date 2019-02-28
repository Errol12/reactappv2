import React from 'react';

const Rainbow = (WraopedComponent) => {

    const colours = ['red','pink','orange','blue'];
    const randomColour = colours[Math.floor(Math.random() * 3)];
    const className = randomColour + '-text';

    return (props) =>{
        return (
            <div className={className}>
                <WraopedComponent {...props}/>
            </div>
        )
    }
    
}

export default Rainbow;