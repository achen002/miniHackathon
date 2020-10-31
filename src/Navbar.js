import React from 'react';


const Navbar = () => {
    
    return(
        <div className="ui secondary menu">
            <div className="item" to='/'>Logo</div>

           
        
            <div className="right menu">
                <div className=" ui item">About</div>
                <div className=" ui item">Products</div>
                <div className=" ui item">Recipies</div>
            </div>
        
      
    </div>
    )
}

export default Navbar;