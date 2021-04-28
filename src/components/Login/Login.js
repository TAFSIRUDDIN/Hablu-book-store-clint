import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import firebase from "firebase/app";
import "firebase/auth";
import './Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import firebaseConfig from "../firebase.config";
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
if (firebase.apps.length === 0) { 
    firebase.initializeApp(firebaseConfig);
  }
const Login = () => {
    const [user, setUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };



    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
            //    console.log(result)
                const {displayName, email, photoURL} = result.user;
                const signedInUser = {name: displayName, email, photoURL};
                setUser(signedInUser);
                history.replace(from);
                
            }).catch((error) => {
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
    console.log(user);
    return (
    
            <Container style={{backgroundColor: 'rgb(245, 158, 142)', height: '655px' }}>
                <div className="login-page " style={{width: '50%', margin: '0 auto'}}>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                <br/>
                <Button onClick={handleGoogleSignIn} variant="primary" type="submit">
                <FontAwesomeIcon icon={faSignInAlt} /> Login
                    </Button>
                    </div>
            </Container>
        
    );
};

export default Login;