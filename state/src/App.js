import React,{useState} from 'react'
import "./style.css"

const App=()=>{
    
    let [score, setScore] =  useState(0)

    return(
        <div style={{textAlign:"center"}}>
            <h1>Counter Application</h1>
            <h2>The value of Score is: {score}</h2>
            <button onClick={() => (score < 25) ? setScore(score +1) : ""}>Increment</button>
            <button onClick={() => (score > 0) ? setScore(score -1) : ""}>Decrement</button>
            <button onClick={()=>{setScore(0)}}>Reset</button>
        </div>
    )
}

export default App
