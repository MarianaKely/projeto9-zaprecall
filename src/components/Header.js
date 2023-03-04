
// General configuration and rendering the footer - outset


import React from 'react';
import styled from 'styled-components';


// Import images from assets/img - outset


import logo from "../assets/img/logo.png";


// Import images from assets/img - end


export default function Header(){
        return(


// Creation configuration of header layout- outset 


            <Summit>

             <img src={logo} ></img>
             <h1>Zap Recall</h1>

            </Summit>

        )

// Creation configuration of header layout- end   


}


// Header.js page styling - outset


// Styling the top image and title - outset


const Summit = styled.header`

    display: flex;
    align-items: center;
    margin: 40px 0 20px 0;
    > img {
        width: 52px;
    }
    > h1 {
        color: #FFFFFF;
        font-family: 'Righteous';
        font-style: normal;
        font-weight: 400;
        font-size: 36px;
        line-height: 45px;
        margin-left: 20px;
        margin-right: 20px;
    }    
`

// Styling the top image and title - end


// Header.js page styling - end


// General configuration and rendering the header - end