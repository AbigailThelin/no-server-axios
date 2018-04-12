import React from 'react';
import PanelComp from './panel';

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
                <PanelComp/>
            </div>
        )
    }
}

export default Header;