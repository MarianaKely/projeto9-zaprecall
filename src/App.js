
// General configuration page and rendering of zaprecall - outset

import React from 'react';
import {useState} from "react";
import styled from 'styled-components';

// Import files from js pages - outset

import Cards from "./components/Cards";
import Deck from"./components/Deck";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Bonus } from './Bonus';

// Import files from js pages - end



export default function App () {


// Constants that enable functionalities on the App.js - outset

    
    const [untap, setUntap] = useState([]);  
    const [toturn, setToturn] = useState([]);  
    const [result, setResult] = useState([]);  
    const [finished, setFinished] = useState(0);
    const [trailingslash, setTrailingslash] = useState([]);
    const [icon, setIcon] = useState("");
    const [questionsarray] = useState([...Deck.sort( () => .5 - Math.random() )]);
    const [ticket] = useState([...questionsarray.slice(0,20)]);


// Constants that enable functionalities on bonus page - outset
   

    const [bonuspage, setBonuspage] = useState(false)
    const Gotogame = () => { setBonuspage(true)}


// Constants that enable functionalities on bonus page - end    
   

 // Constants that enable functionalities on the App.js - end


 alert ('SEJA BEM VINDO(A)!');


    return (


// Creation configuration of page layout- outset 


    <ScreenContainer>

<>
      <Welcomepage status={Gotogame}>{!bonuspage ?

      <Bonus Gotogame={Gotogame}/>:
<>

        <Header/>

        {ticket.map((flahscard, index) => (
        <Cards
          key={index}
          summary={index}
          flahscard={flahscard}
          untap= {untap}
          setUntap = {setUntap}
          toturn = {toturn}
          setToturn = {setToturn}
          result = {result}
          setResult = {setResult}
          setFinished = {setFinished}
          finished = {finished}
          setTrailingslash={setTrailingslash}
          trailingslash = {trailingslash}
          icon = {icon}
          setIcon = {setIcon}
        />
        
        ))}

       <Footer
         ticket = {ticket}
         finished = {finished}
         trailingslash = {trailingslash}
/>

</>
} 
</Welcomepage>
</>


    </ScreenContainer>
    )


  // Creation configuration of page layout- end    


}


// App.js page styling - outset


const ScreenContainer = styled.header`
    box-sizing: borderbox;
    width: 375px;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: #FB6B6B;
    padding-bottom: 200px;
`

const Welcomepage = styled.div`
    width: 375px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #FB6B6B;
    padding-bottom: ${props => props.status ? '50px' : '0'}
`



// App.js page styling - end

// General configuration page and  rendering of zaprecall - end