import React from "react";
import "./Profile.css";

export default function Profile(props) {
  return (
    <div >
      {props.children}
      <div className="filou" >
        
        <p >
             Name : 
          {props.fullName}{" "}  
        </p>
        <p>
          {" "}
           Profession : 
          {props.profession}{" "}
        </p>
        <p>
          {" "}
          Bio 
          {props.bio}{" "}
        </p>

        
       
      </div>
    </div>
  );
}

