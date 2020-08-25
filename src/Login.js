import React from "react";
import { Button } from "@material-ui/core";
import "./Login.css";
import logo from "./logoax.png";
import { auth, provider } from "./firebase";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";
function Login() {
  const [{}, dispatch] = useStateValue();
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => console.log(error.message));
  };
  return (
    <div className="login">
      <div className="login__container">
        <img src={logo} />
        <div className="login__text">
          <h1> sign in to whatsAx</h1>
        </div>
        <Button onClickCapture={signIn}> Sign in with Google</Button>
      </div>
    </div>
  );
}

export default Login;
