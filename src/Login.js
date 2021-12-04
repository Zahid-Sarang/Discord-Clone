import { Button } from "@material-ui/core";
import React from "react";
import {auth,provider} from "./firebase"
import './Login.css';

const Login = () => {

    const signIn = () => {
        auth.signInWithPopup(provider).catch((error) => alert(error.message));
    };
   
  return (
    <div className="login">
      <div className="login__logo">
          <img src="https://approximateengineering.org/wp-content/uploads/2017/09/AAEAAQAAAAAAAAxZAAAAJDE5MWJiYjkyLTliYTYtNDhhOS04YmI3LTkyNzg0ZmQ3OTFlNQ.png" alt="" />
      </div>
      <Button onClick={signIn}>Sign In</Button>
    </div>
  );
};

export default Login;
