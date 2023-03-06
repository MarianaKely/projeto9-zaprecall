
// General configuration and rendering the welcome page - outset


import styled from 'styled-components';
import React from 'react';


// Import images from assets/img - outset


import copy from "./assets/img/copy.png";


// Import images from assets/img - end


export const Welcome = ({Gotogame}) => {


   return(


// Bonus.js layout - outset 


     <Welcomepage>

       <div>
        <img src={copy}></img>
       </div>
       <h1>ZapRecall</h1>
       <button data-test="start-btn" onClick={Gotogame}>Iniciar Recall!</button>

     </Welcomepage>

   )

// Bonus.js layout - end  


 }

 // Footer.js page styling - outset

// Styling the welcome page - outset

 
 const Welcomepage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 30px 0 30px 0;
    margin: 30px 0 20px 0;
    & .logo-container{
      max-width: 136px;
      width: 100%;

    }
    > img {
      width: 52px;
    }
    > h1 {
      color: #fff;
      font-size: 36px;
      font-family: 'Righteous';

    }
    > button {
      width: 246px;
      height: 54px;
      color: #D70900;
      font-family: 'Recursive';
      font-size: 18px;
      border: 1px solid #D70900;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
      border-radius: 5px;
      background: #FFFFFF;
      margin: 20px 0 0px 0;

    }
    `



// Styling the welcome page - outset


// General configuration and rendering the welcome page - end