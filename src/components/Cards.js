
// General configuration and rendering the cards - outset

import React from 'react'
import { useState } from "react";
import styled from 'styled-components';


// Import images from assets/img - outset


import startbutton from "../assets/img/seta_play.png";
import turnbutton from "../assets/img/seta_virar.png";
import forgot from "../assets/img/icone_erro.png";
import almost from "../assets/img/icone_quase.png";
import remembered from "../assets/img/icone_certo.png";


// Import images from assets/img - end


export default function Cards({
    flahscard,
    summary,
    untap,
    setUntap,
    setToturn,
    toturn,
    result,
    setResult,
    finished,
    setFinished,
    setTrailingslash,
    trailingslash

}) {


// Constants that enable functionalities on the Cards.js - outset
    

    const [endgame, setEndgame] = useState("")
    const [endgamestatus, setEndgamestatus] = useState("")
    const [icon, setIcon] = useState("")


// Constants that enable functionalities on the Cards.js - end

// Cards.js layout - outset
    

    return (
        <div data-test="flashcard"> 


            <Questionbox display={untap.includes(flahscard) ? true : false} >
                <p data-test="flashcard-text" >pergunta {summary + 1}</p>
                <img data-test="play-btn" src={startbutton} 
                    onClick={() => {
                        setUntap([...untap, flahscard])
                    }}></img>
            </Questionbox>


            <Otherquestionbox display={!untap.includes(flahscard) || toturn.includes(flahscard) ? true : false}>
                <h1 data-test="flashcard-text" >{flahscard.question}</h1>
                <img data-test="turn-btn" src={turnbutton} 
                    onClick={() => {
                        setToturn([...toturn, flahscard])
                    }}></img>
            </Otherquestionbox>


            <Resultbox display={!toturn.includes(flahscard) || result.includes(flahscard) ? true : false}>
                <h1 data-test="flashcard-text" >{flahscard.answer}</h1>

                <div>


                    <Resultoptions data-test="no-btn" color="#FF3030"
                        onClick={() => {
                            setResult([...result, flahscard])
                            setFinished(finished + 1)
                            setEndgame(forgot)
                            setEndgamestatus("#FF3030")
                            setIcon("no-icon")
                            setTrailingslash([...trailingslash, forgot])
                        }}
                    > Não lembrei</Resultoptions>


                    <Resultoptions data-test="partial-btn" color="#FF922E"
                        onClick={() => {
                            setResult([...result, flahscard])
                            setFinished(finished + 1)
                            setEndgame(almost)
                            setEndgamestatus("#FF922E")
                            setIcon("partial-icon")
                            setTrailingslash([...trailingslash, almost])
                            

                        }}

                    >Quase não lembrei</Resultoptions>


                    <Resultoptions data-test="zap-btn" color="#2FBE34"
                        onClick={() => {
                            setResult([...result, flahscard])
                            setFinished(finished + 1)
                            setEndgame(remembered)
                            setEndgamestatus("#2FBE34")
                            setIcon("zap-icon")
                            setTrailingslash([...trailingslash, remembered])

                        }}
                    >Zap!</Resultoptions>


                </div>

            </Resultbox>


            <Endgamebox color={endgamestatus} display={!result.includes(flahscard) ? true : false}>
                <p data-test="flashcard-text" >pergunta {summary + 1}</p>
                <img data-test={icon}   src={endgame}></img>
            </Endgamebox>


            </div>

    )
}

// Cards.js layout - end


/* 
1- Questionbox is the box that shows the question number
2- Otherquestionbox is the box that shows the question 
3- Resultbox is the box that shows the answer
4- Resultoptions is the box to click on options: remembered, almost and forgot 
5 - Endgamebox is the box that shows the result
*/


 // Cards.js page styling - outset


// Styling the number of question box - outset

const Questionbox = styled.div`

    width: 300px;
    height: 35px;
    display:${props => props.display ? 'none' : 'flex'};
    align-items: center;
    justify-content: space-between;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    background-color: #FFFFFF;
    margin: 12px;
    padding: 15px;
    p {
    color: #333333;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
}
`

// Styling the number of question box - end 


// Styling the question box - outset


const Otherquestionbox = styled.div`

    width: 300px;
    height: 100px;
    display:${props => props.display ? 'none' : 'flex'};   
    flex-direction: column;
    justify-content: space-between;
    color: #333333;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 9px;
    line-height: 22px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    background: #FFFFD5;
    padding: 15px;
    margin: 12px;
    position: relative;
    img{
    position: absolute;
    bottom: 10px;
    right: 10px;
}
`

// Styling the question box - end


// Styling the answer box - outset


const Resultbox = styled.div`

    width: 300px;
    height: 100px;
    color: #333333;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 22px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    background: #FFFFD5;
    padding: 15px;
    margin: 12px;
    position: relative;
    display:${props => props.display ? 'none' : 'flex'};   
    flex-direction: column;
    justify-content: space-between;
    div{
        display:flex;
        justify-content:space-between
    }
    `

// Styling the answer box - end


// Styling the options box - outset

const Resultoptions = styled.button`
    
    width: 90px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFFFFF;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    text-align: center;
    border-radius: 5px;
    border: 1px solid blue;
    background: ${props => props.color} ;
    padding:5px;
`

// Styling the options box - end


// Styling the result box - outset

const Endgamebox = styled.div`
    width: 300px;
    height: 35px;
    display:${props => props.display ? 'none' : 'flex'};
    align-items: center;
    justify-content: space-between
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    background-color: #FFFFFF;
    padding: 15px;
    margin: 12px;
    ;
    p {
    color : ${props => props.color} ;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    text-decoration: line-through;
}
`

// Styling the result box - end

// Cards.js page styling - end


// General configuration and rendering the cards - end