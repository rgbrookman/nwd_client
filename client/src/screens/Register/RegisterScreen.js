import React from 'react';
import Register from '../../components/Register';
import './register.css';

export default function RegisterScreen() {
  return (
    <main id="registerScreen">
    <Register />
      <span>Already have a NWD, login <a href="/login" style={{textDecoration: "none",  textShadow: "0 0 2px #EBF4FA", color: "#46A46C"}}>here...</a></span>
    </main>
  );
}
