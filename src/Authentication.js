import React, { useState, useEffect } from "react";

import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { auth } from "./firebase";

export function SignIn(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(u => {
      if (u) {
        props.history.push("/app");
      }
      // do something
    });

    return unsubscribe;
  }, [props.history]);

  const handleSignIn = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {})
      .catch(error => {
        alert(error.message);
      });
  };

  return (
    <div>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            Sign In
          </Typography>
        </Toolbar>
      </AppBar>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <Paper style={{ width: 480, marginTop: 50, padding: 30 }}>
          <TextField
            placeholder="Email"
            fullWidth="true"
            value={email}
            onChange={e => {
              setEmail(e.target.value);
            }}
          />
          <TextField
            type={"password"}
            placeholder="Password"
            fullWidth="true"
            style={{ marginTop: 30 }}
            value={password}
            onChange={e => {
              setPassword(e.target.value);
            }}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 30
            }}
          >
            <Typography>
              Don't have an account? <Link to="/signup">Sign Up</Link>!
            </Typography>
            <Button variant="contained" color="primary" onClick={handleSignIn}>
              Sign In
            </Button>
          </div>
        </Paper>
      </div>
    </div>
  );
}

export function SignUp(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("")

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(u => {
      if (u) {
        props.history.push("/app");
      }
      // do somethings
    });

    return unsubscribe;
  }, [props.history]);

  const handleSignUp = () => {
    auth
      .createUserWithEmailAndPassword(email, password).then((res) => {
        const user = auth.currentUser;
        return user.updateProfile({
          displayName: fullName,
          // phoneNumber: phone
        })
            user.updatePhoneNumber({

            })
      })      
      .catch(error => {
        alert(error.message);
      }) 
  };

//   auth.languageCode = 'it'

//   window.recaptchaVerifier = new auth.RecaptchaVerifier('sign-in-button', {
//     'size': 'invisible',
//     'callback': function(response) {
//       // reCAPTCHA solved, allow signInWithPhoneNumber.
//       //onSignInSubmit();
//     }
//   });


// var appVerifier = window.recaptchaVerifier;
// auth.signInWithPhoneNumber(phoneNumber, appVerifier)
//     .then(function (confirmationResult) {
//       // SMS sent. Prompt user to type the code from the message, then sign the
//       // user in with confirmationResult.confirm(code).
//       window.confirmationResult = confirmationResult;
      
//     }).catch(function (error) {
//       // Error; SMS not sent
//       // ...
      
//     });
  
//     //var code = getCodeFromUserInput();
//     confirmationResult.confirm(code).then(function (result) {
//       // User signed in successfully.
//       var user = result.user;
//       // ...
//     }).catch(function (error) {
//       // User couldn't sign in (bad verification code?)
//       // ...
//     });

  // var provider = new auth.GoogleAuthProvider();

  // const handleSignUpGoogle = () => {}

  // auth.signInWithPopup(provider).then(function(result) {
  //   // This gives you a Google Access Token. You can use it to access the Google API.
  //   var token = result.credential.accessToken;
  //   // The signed-in user info.
  //   var user = result.user;
  //   // ...
  // }).catch(function(error) {
  //   // Handle Errors here.
  //   var errorCode = error.code;
  //   var errorMessage = error.message;
  //   // The email of the user's account used.
  //   var email = error.email;
  //   // The firebase.auth.AuthCredential type that was used.
  //   var credential = error.credential;
  //   // ...
  // });

  return (
    <div>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            Sign Up
          </Typography>
        </Toolbar>
      </AppBar>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <Paper style={{ width: 480, marginTop: 50, padding: 30 }}>
        <TextField
            placeholder="Full Name"
            fullWidth="true"
            value={fullName}
            onChange={e => {
              setFullName(e.target.value);
            }}
          />
          <TextField
            placeholder="Phone"
            fullWidth="true"
            style={{ marginTop: 30 }}
            value={phoneNumber}
            onChange={e => {
              setPhoneNumber(e.target.value);
            }}
          />
          <TextField
            placeholder="Email"
            fullWidth="true"
            style={{ marginTop: 30 }}
            value={email}
            onChange={e => {
              setEmail(e.target.value);
            }}
          />
          <TextField
            type={"password"}
            placeholder="Password"
            fullWidth="true"
            style={{ marginTop: 30 }}
            value={password}
            onChange={e => {
              setPassword(e.target.value);
            }}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 30
            }}
          >
            <Typography>
              You have an account? <Link to="/">Sign In!</Link>
            </Typography>

            <Button variant="contained" color="primary" onClick={handleSignUp}>
              Sign Up
            </Button>
            {/* <Button variant="contained" color="primary" onClick={handleSignUpGoogle}>
              Sign up with Google
            </Button> */}
            <Button variant="contained" color="primary" onClick={handleSignUp}>
              Sign Up with Phone Number
            </Button>
          </div>
        </Paper>
      </div>
    </div>
  );
}