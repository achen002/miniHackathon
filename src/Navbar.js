import React from 'react';
import { Link } from 'react-router-dom'

const Navbar = () => {
    
    return(
        <div className="ui secondary menu">
      
        <div className="item" to='/'>Nutrition</div>
        <div className="item" to='/favorites'>About</div>
        
      
    </div>
    )
}

export default Navbar;