import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from 'react-router-dom';
import { listDays } from './../../actions/dayActions';
import TasksCompleted from '../../components/charts/TasksCompleted/TasksCompleted.js';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import axios from "axios";
import * as d3 from "d3";

export default function InsightScreen({ history }) {
  const [state, setState] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const dayList = useSelector((state) => state.dayList);
  const { loading, error, days } = dayList;

  useEffect(() => {
    dispatch(listDays());
  }, [dispatch, userInfo, history])

  return (

    <Container className="mainContainer mt-5">
    <Row>
        <TasksCompleted />
      </Row>
    </Container>
  );
}
