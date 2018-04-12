import React from 'react';
import axios from 'axios';

import Header from './header';
import Modal from './modal';
import PanelComp from './panel';
import './home.css'


class Home extends React.Component{

    constructor(props){
        super(props)
        this.state={
            pokemons:[],
            showPanel: false
        }
    }

    componentDidMount(){
        let API_URL = 'https://pokeapi.co/api/v2/pokemon/';
        axios.get(API_URL)
            .then((response) => {
                this.setState({
                    pokemons: response.data.results
                })
                console.log(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    render(){
        return(
            <div className='container'>
            <Header/>
            <PanelComp/>
            {this.state.pokemons.map(pokemon => {
                
                return(
                    <div className='pokemon'>
                        <Modal pokemon={pokemon}  />
                        {this.pokemon}  
                    </div>
                ) 
            })
            }
            </div>
        )
    }}



export default Home;