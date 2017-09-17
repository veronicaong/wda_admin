import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

class Header extends Component{
    render(){
        var name = "Veronica";
        return (
            <div>
                <h1>HI MY NAME IS {name}</h1>
                <h2>I am very ndut</h2>
            </div>
        );
    }
}

class Veronica extends Component{
    render(){
        return (
            <div>
                <h1>WOHOOO {this.props.suka}</h1>
                <RaisedButton label="Default" />
            </div>
      
        );
    }
}
export {
    Veronica
}
export default Header;