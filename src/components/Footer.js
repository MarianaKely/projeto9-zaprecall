
// General configuration and rendering the footer - outset

import React from 'react';
import styled from 'styled-components';


export default function Footer({
    finished,
    trailingslash,
    ticket
}){

// Constant that enable functionalities on the Footer.js - outset    

    const putassetshere = [...trailingslash]

// Constant that enable functionalities on the Footer.js - end        

// Footer.js layout - outset    
    
    return(
        <Endgamescreen data-test="footer" >

            <Evaluationspace>
                {trailingslash.map((putassetshere, index) => <img key ={index}  src ={putassetshere} ></img>)}
            </Evaluationspace>
                <p>CONCLUÍDOS {finished}/{ticket.length}</p>
        </Endgamescreen>
        
    )
}

// Footer.js layout - end

/* 
1- Endgamescreen is the white box who hold the final score
2- Evaluationspace shows the final score
*/


// Footer.js page styling - outset

// Styling the white box - outset

const Endgamescreen = styled.footer`
    width: 100%;
    min-height: 50px;
    background-color: #FFFFFF;
    position: fixed;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'Recursive';
    font-weight: 400;
    font-size: 18px;
    color: #333333;
    padding: 10px;
`


// Styling the white box - end


// Styling the final score - outset

const Evaluationspace = styled.div`
    display:flex;
    img{
        margin-left: 5px ;
        margin-bottom: 10px ;
    }
`

// Styling the final score - end


// Footer.js page styling - end



// General configuration and rendering the footer - outset