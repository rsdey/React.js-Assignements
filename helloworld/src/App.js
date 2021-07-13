import React from "react"
import "./style.css"
import Button from "./Button"
const App=()=>{

    return(
        <div>
            <h1 style={{textAlign:"center"}}>Welcome to the part 1 of react JS</h1>
            <h2 style={{textAlign:"center"}}>Below you can see the 3 features of React.js</h2>
            <Button buttonText="Declarative"/>
            <Button buttonText="Component Based"/>
            <Button buttonText="Learn once, Write Anywhere"/>
           
        </div>
    )
}

export default App