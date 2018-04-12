import React from 'react';

import './header.css'

class Header extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            open: false,
          };
    }

    render(){
        return(
            <div className='headerContainer'>
header
            </div>
        )
    }
}

export default Header;