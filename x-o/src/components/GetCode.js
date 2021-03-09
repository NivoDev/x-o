import React, { useState , useEffect} from 'react';

function GetCode({ onGive }){
    const [ code, setCode ] = useState('');

    useEffect(() =>{

        const givenCode = Date.now().toString().substring(5);
        setCode(givenCode);
        onGive(givenCode);
    })
 
    return(
     <label className="GivenCode">The given code:
     </label>
 )
}