
// General configuration page and rendering of zaprecall - outset

import React from 'react';
import {useState} from "react";
import styled from 'styled-components';

// Import files from js pages - outset

import Cards from "./components/Cards";
import Deck from"./components/Deck";
import Footer from "./components/Footer";
import Header from "./components/Header";

// Import files from js pages - end



export default function App () {


// Constants that enable functionalities on the App.js - outset

    
    const [untap, setUntap] = useState([]);  
    const [toturn, setToturn] = useState([]);  
    const [result, setResult] = useState([]);  
    const [finished, setFinished] = useState(0);
    const [trailingslash, setTrailingslash] = useState([]);
    const [icon, setIcon] = useState("");
    const [questionsarray] = useState([...Deck.sort( () => .3 - Math.random() )]);
    const [ticket] = useState([...questionsarray.slice(0,20)]);
   
   

 // Constants that enable functionalities on the App.js - end


    return (


// Creation configuration of page layout- outset 


    <ScreenContainer>

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
    flex-direction: column;
    align-items: center;
    background-color: #FB6B6B;
    padding-bottom: 200px;
`


// App.js page styling - end

// General configuration page and  rendering of zaprecall - end