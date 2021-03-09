import React, {} from 'react';
import styled from 'styled-components'

const Square = ( { value , onClick } )=>{
    const style = value ? 'suqares ${value}' : 'squares';
    return(
        <Button className={style}
        onClick={onclick}>
            {value}
        </Button>
    )
}
export default Square;

const Square = styled.button`
    cursor:pointer;
    background: #272727;
    border:none;

`;