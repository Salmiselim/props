import React from "react";
import Profile from "./Profile/Profile";
import logo  from "./img/logostarbuck.png"
import PropTypes from "prop-types";
import "./styles.css";
export default function App() {
  function Hello(name) {
    alert(`Hello my name is ${name}`);
  }

  return (
    <div className="App">
      <Profile
        fullName="selim"
        bio="*__*"
        profession="0"
        hh={Hello}
      >
        
      </Profile>
       
      <img
      src={logo}
      />
      
    </div>
  );
  Profile.propTypes = {
    fullName: PropTypes.string,
    profession: PropTypes.string,
    bio: PropTypes.string,
    hh: PropTypes.func 
      
    }
  };
