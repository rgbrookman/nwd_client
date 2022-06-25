import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from 'react-router-dom';
import { listDays } from './../../actions/dayActions';
import FeelingScore from '../../components/charts/FeelingScore/FeelingScore.js';
import TasksCompleted from '../../components/charts/TasksCompleted/TasksCompleted.js';
import TasksAttempted from '../../components/charts/TasksAttempted/TasksAttempted.js';
import TasksCompletionRate from '../../components/charts/TaskCompletionRate/TaskCompletionRate.js'
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import axios from "axios";
import * as d3 from "d3";
import './insight.css'

export default function InsightScreen({ history }) {
  const [isFeelingScoreDiv, setFeelingScoreDiv] = useState(true);
  const [isFeelingScoreGraph, setFeelingScoreGraph] = useState(false);
  const [isTasksCompletedDiv, setTasksCompletedDiv] = useState(true);
  const [isTasksCompletedGraph, setTasksCompletedGraph] = useState(false);
  const [isTasksAttemptedDiv, setTasksAttemptedDiv] = useState(true);
  const [isTasksAttemptedGraph, setTasksAttemptedGraph] = useState(false);
  const [isTasksCompletionRateDiv, setTasksCompletionRateDiv] = useState(true);
  const [isTasksCompletionRateGraph, setTasksCompletionRateGraph] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const dayList = useSelector((state) => state.dayList);
  const { loading, error, days } = dayList;

  useEffect(() => {
    dispatch(listDays());
  }, [dispatch, userInfo, history])

  const showHideState = {
    hide: {
      display: "none",
    },
    show: {
      display: "flex",
    },
  }

  return (

    <Container className="mainContainer mt-5">
      <Row className="mb-4">
        <Col>
        <motion.div
        className="feelingScoreDivPanel"
        whileHover={()=> {
          setFeelingScoreDiv(isFeelingScoreDiv => false);
          setFeelingScoreGraph(isFeelingScoreDiv => true);
          setTasksCompletedDiv(isTasksCompletedDiv => true);
          setTasksAttemptedDiv(isTasksAttemptedDiv => true);
          setTasksCompletedDiv(isTasksCompletedDiv => true);

          setTasksCompletedGraph(isTasksCompletedGraph => false);
          setTasksAttemptedGraph(isTasksAttemptedGraph => false);
          setTasksCompletionRateGraph(isTasksCompletedGraph => false);
        }}
        animate={isFeelingScoreDiv ? "show" : "hide"}
        variants={showHideState}>
        <h3>Feeling Score over Time</h3>
          </motion.div>

        <motion.div
        className="feelingScoreDiv"
        animate={isFeelingScoreGraph ? "show" : "hide"}
        variants={showHideState}
        >
          <FeelingScore />
          </motion.div>
        </Col>
        <Col>
        <motion.div
        className="tasksCompletedDivPanel"
        whileHover={()=> {
          setTasksCompletedDiv(isTasksCompletedDiv => false);
          setTasksCompletedGraph(isTasksCompletedDiv => true);
          setFeelingScoreDiv(isFeelingScoreDiv => true);
          setTasksAttemptedDiv(isTasksAttemptedDiv => true);
          setTasksCompletionRateDiv(isTasksCompletionRateDiv => true);

          setFeelingScoreGraph(isFeelingScoreGraph => false);
          setTasksAttemptedGraph(isTasksAttemptedGraph => false);
          setTasksCompletionRateGraph(isTasksCompletedGraph => false);
        }}
        animate={isTasksCompletedDiv ? "show" : "hide"}
        variants={showHideState}>
        <h3>Tasks Completed over Time</h3>
          </motion.div>

        <motion.div
        className="tasksCompletedDiv"
        animate={isTasksCompletedGraph ? "show" : "hide"}
        variants={showHideState}
        >
          <TasksCompleted />
          </motion.div>
        </Col>
        </Row>
      <Row className="mb-4">
        <Col>
        <motion.div
        className="tasksAttemptedDivPanel"
        whileHover={()=> {
          setTasksAttemptedDiv(isTasksAttemptedDiv => false);
          setTasksAttemptedGraph(isTasksAttemptedDiv => true);
          setFeelingScoreDiv(isFeelingScoreDiv => true);
          setTasksCompletedDiv(isTasksCompletedDiv => true);
          setTasksCompletionRateDiv(isTasksCompletionRateDiv => true);

          setFeelingScoreGraph(isFeelingScoreGraph => false);
          setTasksCompletedGraph(isTasksCompletedGraph => false);
          setTasksCompletionRateGraph(isTasksCompletedGraph => false);
        }}
        animate={isTasksAttemptedDiv ? "show" : "hide"}
        variants={showHideState}>
        <h3>Tasks Attempted over Time</h3>
          </motion.div>

        <motion.div
        className="tasksAttemptedDiv"
        animate={isTasksAttemptedGraph ? "show" : "hide"}
        variants={showHideState}
        >
          <TasksAttempted />
          </motion.div>
        </Col>
        <Col>
        <motion.div
        className="tasksCompletionRateDivPanel"
        whileHover={()=> {
          setTasksCompletionRateDiv(isTasksCompletionRateDiv => false);
          setTasksCompletionRateGraph(isTasksCompletionRateDiv => true);
          setFeelingScoreDiv(isFeelingScoreDiv => true);
          setTasksCompletedDiv(isTasksCompletedDiv => true);
          setTasksAttemptedDiv(isTasksAttemptedDiv => true);

          setFeelingScoreGraph(isFeelingScoreGraph => false);
          setTasksCompletedGraph(isTasksCompletedGraph => false);
          setTasksAttemptedGraph(isTasksAttemptedGraph => false);
        }}
        animate={isTasksCompletionRateDiv ? "show" : "hide"}
        variants={showHideState}>
        <h3>TCR over Time</h3>
          </motion.div>

        <motion.div
        className="tasksCompletionRateDiv"
        animate={isTasksCompletionRateGraph ? "show" : "hide"}
        variants={showHideState}
        >
          <TasksCompletionRate />
          </motion.div>
        </Col>
      </Row>
    </Container>
  );
}
