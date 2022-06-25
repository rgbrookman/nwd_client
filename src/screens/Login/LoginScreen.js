import React from 'react';
import Login from '../../components/Login';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import './login.css';

export default function LoginScreen() {
  return (
    <main id="login-screen" className="loginPageScreen">
    <Login />
    <span>If you want to try it, click <a href="/register" style={{textDecoration: "none",  textShadow: "0 0 2px #EBF4FA", color: "#46A46C"}}>here...</a></span>
    </main>
  );
}
