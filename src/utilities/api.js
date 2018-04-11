import axios from 'axios';

let API_URL = 'https://pokeapi.co/api/v2/pokemon/';

export default function(){
    axios.get(API_URL)
}