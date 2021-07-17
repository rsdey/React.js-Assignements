import React from 'react'

const Card = (props) => {
   return(
    <div className="col-4">
    <div className="card" style={{width: "18 rem"}}>
      <img
        src="https://images.pexels.com/photos/3532557/pexels-photo-3532557.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{props.cardTitle}</h5>
        <p className="card-text">
         {props.cardDescription}
        </p>
        <a href="#" className="btn btn-success">{props.buttonText}</a>
      </div>
    </div>
  </div>
 
   )
}

export default Card