import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import './Login.css';
import FontIcon from 'material-ui/FontIcon';
import {blue500, red500} from 'material-ui/styles/colors';
import firebase from 'firebase';
import {Redirect} from 'react-router'
var app = firebase.initializeApp({
     apiKey: "AIzaSyDS0ln_eDiHcydWUkf4x1fph5hbctOsHgQ",
    authDomain: "wdavero.firebaseapp.com",
    databaseURL: "https://wdavero.firebaseio.com",
    projectId: "wdavero",
    storageBucket: "wdavero.appspot.com",
    messagingSenderId: "966393582574"
 });
const auth = firebase.auth;
const facebook = new firebase.auth.FacebookAuthProvider();
const google = new firebase.auth.GoogleAuthProvider();

class Login extends Component{
    constructor(props){
        super(props)
        this.state = {
            loggedin: false
        }
    }
    loginFacebook(){
        const vm = this;
        auth().signInWithPopup(facebook).then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        vm.setState({
            loggedin: true,
            email: user.email
        })
        localStorage.setItem('email', user.email)
        // ...
        }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
        });
    }
    loginGoogle(){
        const vm = this;
        auth().signInWithPopup(google).then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        vm.setState({
            loggedin: true,
            email: user.email
        })
        localStorage.setItem('email', user.email)
        // ...
        }).catch(function(error) {
            console.log(error)
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
        });
    }
    componentDidMount(){
        localStorage.setItem('position', this.props.match.params.position)
    }
    render(){
        if(this.state.loggedin){
            return <Redirect to='/app'/>
        }
        return (
            <div className="container">
                <div>
                    <h1>Login page {this.props.match.params.position}</h1>
                    <TextFieldExampleError/>
                    <RaisedButtonExampleSimple/> 
                    <RaisedButtonExampleComplex
                    facebookEvent={this.loginFacebook.bind(this)}
                    googleEvent={this.loginGoogle.bind(this)}/>
                </div>
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
    render(){
        return(
            <div>
                <RaisedButton
                label="Facebook"
                labelColor="#FFFFFF"
                backgroundColor="#3b5998"
                onClick={this.props.facebookEvent}
                style={styles.button}
                icon={<FontIcon className="fa fa-facebook"  />}
                
                />
                <RaisedButton
                label="Google"
                onClick={this.props.googleEvent}
                labelColor="#FFFFFF"
                backgroundColor="red"
                style={styles.button}
                icon={<FontIcon className="fa fa-google-plus" />}
                />
            </div>
        )
    }
};

const TextFieldExampleError = () => (
  <div>
    <TextField
      hintText="Username"
      //errorText="This field is required"
    /><br />
    <TextField
      hintText="Password"
     // errorText="The error text can be as long as you want, it will wrap."
    /><br />
    
  </div>
);

const style = {
  margin: 12,
};

const RaisedButtonExampleSimple = () => (
  <div>
    <RaisedButton label="LOGIN" primary={true} style={style} />
  </div>
);

export default Login;
