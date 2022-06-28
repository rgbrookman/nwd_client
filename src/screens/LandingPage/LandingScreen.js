import React, { useState, useEffect } from 'react';
import {useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import './landingpage.css';
import Footer from '../../components/Footer';
import { listDays } from '../../actions/dayActions';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { createWeekAction, listWeeks } from '../../actions/weekActions';
import Loading from '../../components/Loading';
import { ErrorMessage } from '../../components/ErrorMessage';
import axios from "axios";
import { Helmet } from 'react-helmet';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';


export default function LandingScreen(history) {
  const [loading, setLoading] = useState(true);
const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;


  return (
    <main className="LandingPage">
    <Helmet>
       <title>Welcome to NWD</title>
     </Helmet>
    {
      userInfo
      ?
      <div>
      <h1 className="landingPageHeaderText">
      {userInfo.name}, <br/>this is your NoWastedDays</h1>

      </div>
      :
      <h1 style={{textDecoration: "none", color: "#EBF4FA", fontSize: "72px"}}>
      Welcome to NoWastedDays</h1>
    }
        <Footer />
    </main>

  );
}
