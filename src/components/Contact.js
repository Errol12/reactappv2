import React from 'react';
import Rainbow from '../hoc/Rainbow';
const Contact = (props) => {
    //console.log(props);
    // setTimeout(()=>{
    //     props.history.push('/about');
    // },2000);
    return (
        <div>
            <h1>Contacts</h1>
        </div>
    )
}

export default Rainbow(Contact);