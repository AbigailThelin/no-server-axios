import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';

import './modal.css'

export default class Modal extends React.Component{
    constructor(props){
        super(props)
        this.state={
            open: false
        }
        this.handleClose = this.handleClose.bind(this)
        this.handleOpen = this.handleOpen.bind(this)
    }

    handleOpen = () => {
        this.setState({open: true});
        };
    
    handleClose = () => {
    this.setState({open: false});
    };
    
    render(){
        const actions = [
            <FlatButton
              label="CLOSE"
              primary={true}
              onClick={this.handleClose}
            />
          ];
        return(
            <div >
            {this.props.pokemon.name}
            <RaisedButton label="MORE INFO" onClick={this.handleOpen} />

            <Dialog
                title=""
                actions={actions}
                modal={true}
                open={this.state.open}
                >
                <div className='grid1'>
                    <i class="material-icons">face</i>
                    <h6 className='info'>{this.props.pokemon.name}</h6>
                </div>
                <Divider/>
                <div className='grid1'>
                    <i class="material-icons">grade</i>
                    <h6 className='info'>{this.props.pokemon.name}</h6>
                </div>
                <Divider/>
                <div className='grid1'>
                    <i class="material-icons">warning</i>
                    <h6 className='info'>{this.props.pokemon.name}</h6>
                </div>
                <Divider/>
                <div className='grid1'>
                    <i class="material-icons">cloud_queue</i>
                    <h6 className='info'>{this.props.pokemon.name}</h6>
                </div>
                <Divider/>
                <div className='grid1'>
                    <i class="material-icons">sentiment_very_dissatisfied</i>
                    <h6 className='info'>{this.props.pokemon.name}</h6>
                </div>
                <Divider/>
                <div className='grid1'>
                    <i class="material-icons">whatshot</i>
                    <h6 className='info'>{this.props.pokemon.name}</h6>
                </div>
            </Dialog>
            </div>
        )
    }
}