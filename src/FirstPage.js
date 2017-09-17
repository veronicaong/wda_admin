import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { Redirect } from 'react-router';
class FirstPage extends Component{
    constructor(props){
        super(props)
        this.state = {
            picked: false,
            vero: 'ndut'
        }
    }
    setPicked(position){
        this.setState({
            picked: true,
            position:position
        })
    }
    render(){
        var name = "Veronica"; 
        if(this.state.picked){
            return <Redirect to={{
                pathname: '/login/'+this.state.position,
                state: {position: this.state.position}
            }}/>;    
        }
        
        return (
            <div>
                <h1>HI MY NAME IS {name}</h1>
                <h2>I am very ndut</h2>
                <RaisedButtonExampleComplex callback={this.setPicked.bind(this)} />
            </div>
        );
    }
}

const styles = {
  button: {
    margin: 12,
  },
  exampleImageInput: {
    cursor: 'pointer',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    width: '100%',
    opacity: 0,
  },
};
class RaisedButtonExampleComplex extends Component {
    pick(position){
        this.props.callback(position)
    }
    render(){
        return(
            
            <div>
                <RaisedButton
                label="Helpdesk"
                labelColor="#FFFFFF"
                backgroundColor="#212121"
                onClick={()=>{this.pick('helpdesk')}}
                style={styles.button}
          
                
                />
                <RaisedButton
                label="Technical Users"
                onClick={()=>{this.pick('technical')}}
                labelColor="#FFFFFF"
                backgroundColor="#212121"
                style={styles.button}
                />
            </div>
        )
    }
};

export default FirstPage;