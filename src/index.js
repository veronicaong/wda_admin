import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './Login';
import FirstPage from './FirstPage';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter, Route } from 'react-router-dom';
const Root = () => (
    <div>
        <Route exact path="/" component={FirstPage}/>
        <Route path="/login/:position" component={Login}/>
        <Route path="/app" component={App}/>
</div>
        
            
        
    
);
ReactDOM.render(<MuiThemeProvider>
    <BrowserRouter>
    <Root />
    </BrowserRouter>
    </MuiThemeProvider>, document.getElementById('root'));
registerServiceWorker();
