import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Fabric } from 'office-ui-fabric-react/lib//Fabric'
// import { Provider } from 'react-redux';
// import store from './store/index';

ReactDOM.render(
    <Fabric>
        <MuiThemeProvider>
            <BrowserRouter>
                <App /> 
            </BrowserRouter>
        </MuiThemeProvider>
    </Fabric>
, document.getElementById('root'));
