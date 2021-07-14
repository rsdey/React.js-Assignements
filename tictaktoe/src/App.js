import React,{useState} from 'react'
import Icon from './Components/Icon'


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import "./style.css"

const tiktacArray = new Array(9).fill("")
const App=()=>{


    let[isCross, setIsCross] = useState(true)
    let[winMessage, setWinMessage] = useState("")

    const playAgain=()=>{
        setIsCross(true)
        setWinMessage("")
        tiktacArray.fill("")
    }

    const findWinner=(tiktacArray)=>{
        const wins = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i=0; i< wins.length; i++) {
            let [a, b, c] = wins[i];
           
            if (tiktacArray[a] !== "" && tiktacArray[a] ===tiktacArray[b] && tiktacArray[a] === tiktacArray[c]) {
                return true;
            }
        }
        return false;
    }


    return (
        <div>
            <Icon choice="cross"/>

        </div>
    )
}

export default App