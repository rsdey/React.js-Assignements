import React from 'react'
import { FaTimes, FaRegCircle } from "react-icons/fa";

const Icon=({choice})=>{
   
    switch(choice){
        case "cross":
            return <FaTimes className="iconc"/>;
        case "circle":
            return <FaRegCircle className="icono"/>;
        default:
            return ""
    }
}

export default Icon

