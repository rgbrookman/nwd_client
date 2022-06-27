import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

// Year
import YearScreen from './screens/Year/YearScreen';
import ViewYearScreen from './screens/Year/ViewYearScreen';
import UpdateYearScreen from './screens/Year/UpdateYearScreen';

// Day
import DayScreen from './screens/Day/DayScreen';
import ViewDayScreen from './screens/Day/ViewDayScreen';

// Week
import WeekScreen from './screens/Week/WeekScreen';
import CreateWeekScreen from './screens/Week/CreateWeekScreen';

// Landing
import LandingScreen from './screens/LandingPage/LandingScreen';

// Insight
import InsightScreen from './screens/Insight/InsightScreen';
import InsightTestScreen from './screens/Insight/InsightTestScreen';

//Header
import LoginScreen from './screens/Login/LoginScreen';
import RegisterScreen from './screens/Register/RegisterScreen';

//Experiences
import ValuesScreen from './screens/Values/ValuesScreen';
import DiaryScreen from './screens/Diary/DiaryScreen';

//Footer
import HelpScreen from './screens/HelpScreen';
import AboutScreen from './screens/About/AboutScreen';
import ContactScreen from './screens/Contact/ContactScreen';
import ProfileScreen from './screens/Profile/ProfileScreen';

//Components
import Header from "./components/Header/Header";

//Loading
import PropagateLoader from "react-spinners/PropagateLoader";

//Styles
import './App.css';
import './index.css';

//Misc
import ExportScreen from './screens/ExportScreen';


function App() {

  return (
    <Router>
    <Header />
        <Routes>
          <Route path="/" element={<LandingScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/about" element={<AboutScreen />} />
          <Route path="/register" element={<RegisterScreen />} />
          <Route path="/insight" element={<InsightScreen />} />
          <Route path="/insight/test" element={<InsightTestScreen />} />
          <Route path="/profile" element={<ProfileScreen />} />
          <Route path="/week/create" element={<CreateWeekScreen />} />
          <Route path="/week/:id" element={<WeekScreen />} />
          <Route path="/help" element={<HelpScreen />} />
          <Route path="/contact" element={<ContactScreen />} />
          <Route path="/values" element={<ValuesScreen />} />
          <Route path="/year/create" element={<YearScreen />} />
          <Route path="/year/:id" element={<ViewYearScreen />} />
          <Route path="/today" element={<DayScreen />} />
          <Route path="/today/:id" element={<ViewDayScreen />} />
          <Route path="/diary" element={<DiaryScreen />} />
        </Routes>
      </Router>

  );
}
export default App;
