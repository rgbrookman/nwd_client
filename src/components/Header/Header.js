import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from 'react-router-dom';
import { listYears } from '../../actions/yearActions';
import { listWeeks } from '../../actions/weekActions';
import { listDays } from '../../actions/dayActions';
import Loading from '../../components/Loading';
import PropagateLoader from "react-spinners/PropagateLoader";
import { DropdownButton, Dropdown, Nav, Navbar, Container  } from 'react-bootstrap';
import logo from '../../NWD_Logo_White.png';
import { logout } from '../../actions/userActions';
import './header.css';

const Header = ({ history }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let { id } = useParams();
  const [loadingSpinner, setLoadingSpinner ] = useState(false);

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    const yearList = useSelector((state) => state.yearList);
    const { years } = yearList;

    const weekList = useSelector((state) => state.weekList);
    const { weeks } = weekList;

    const dayList = useSelector((state) => state.dayList);
    const { loading, error,  days } = dayList;

    useEffect(() => {
  dispatch(listYears());
    }, [dispatch, userInfo, history])

    useEffect(() => {
      dispatch(listWeeks());
    }, [dispatch, userInfo, history]);

    useEffect(() => {
      dispatch(listDays());
    }, [dispatch, userInfo, history]);

    const logoutHandler = () => {
      dispatch(logout());
      navigate('/');
    }

    useEffect(() => {
      setLoadingSpinner(true);
      setTimeout(() => {
        setLoadingSpinner(false);
      }, 1500);
    }, [])

    const override = {
        display: "block",
        top: "50vh",
        left: "50%",
        margin: 0,
    };



  return (

 <Navbar className="navbarHeader navbar-dark align-items-center" expand="md">
{ !days && !years && !weeks ? <Loading /> : null}

{ !days && !years && !weeks ? <Navbar.Brand
  href="/">
  </Navbar.Brand> :   <Navbar.Brand
    href="/">
    <img
      src={logo}
      width="30"
      height="30"
      className="d-inline-block align-top"
      alt="NWD Logo"
    />
    </Navbar.Brand> }


    <Navbar.Toggle id="toggle" aria-controls="basic-navbar-nav" variant="light" />
       <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
       <Nav className="justify-content-flex-end">

       <Nav.Item className="navSection">
  <Nav.Link to="/feedback"> Feedback</Nav.Link>
         </Nav.Item>

    { userInfo
    ?
    <Nav.Item className="navSection">
        <Dropdown
        className='navSection headerDropdown'>

          <Dropdown.Toggle
            id="yearDropdownToggle"
            className="dropdownToggle">
            Year
          </Dropdown.Toggle>

        <Dropdown.Menu
            id="yearDropdownMenu"
            className="dropdownMenu">

        <Dropdown.Item
          id="createSelector"
          href={`/year/create`}>
        Create A New Year
          </Dropdown.Item>
          <hr className="dividingLine" />

      {years && years.map((year) =>
    <Dropdown.Item
      id="viewSelector"
      key={year._id}
      href={`/year/${year._id}`}>
      View & Update
      </Dropdown.Item>
    )}
    </Dropdown.Menu>
    </Dropdown>
      </Nav.Item>
: null }

    { userInfo
    ? <Nav.Item className="navSection">

      <Dropdown
        className='headerDropdown'>
        <Dropdown.Toggle
        id="weekDropdownToggle"
        className="dropDownToggle">
        Week
        </Dropdown.Toggle>
        <Dropdown.Menu
        id="weekDropdownMenu"
        className="dropdowMenu">

        <Dropdown.Item
          id="createSelector"
          className="dropdownItem"
          href="/week/create">
        Create a New Week
        </Dropdown.Item>
        <hr className="dividingLine" />
        {weeks && weeks
              .filter((week, i, weeks) => weeks.indexOf(week) === weeks.length -1 )
              .map((week) => (
            <Dropdown.Item
              key={week._id}
              id="viewSelector"
              className="dropdownItem"
              href={`/week/${week._id}`}>
              View & Update
              </Dropdown.Item>
                    ))}
    </Dropdown.Menu>
    </Dropdown>
    </Nav.Item>
    : null
    }

    { userInfo
      ? <Nav.Item className="navSection">
          <Dropdown
          className='navSection headerDropdown'>

            <Dropdown.Toggle
              id="yearDropdownToggle"
              className="dropdownToggle">
              Today
            </Dropdown.Toggle>
            { !days ? null :
            <Dropdown.Menu
            id="weekDropdownMenu"
            className="dropdowMenu">

            <Dropdown.Item
              id="createSelector"
              className="dropdownItem"
              href="/today">
            Create your Day
            </Dropdown.Item>
            <hr className="dividingLine" />

            {days && days
                  .filter((day, i, days) => days.indexOf(day) === days.length -1 )
                  .map((day) => (
                <Dropdown.Item
                  key={day._id}
                  id="viewSelector"
                  className="dropdownItem"
                  href={`/today/${day._id}`}>
                  Update Day
                  </Dropdown.Item>
                        ))}

        </Dropdown.Menu>
        }
            </Dropdown>
 </Nav.Item>


      : <Nav.Item className="navSection">
           <Nav.Link
           className="navItem"
           href="/login"
           >Login / Register</Nav.Link>
           </Nav.Item>
         }

         { userInfo
         ? <Nav.Item className="navSection">
             <Dropdown
             className='navSection headerDropdown'>

               <Dropdown.Toggle
                 id="yearDropdownToggle"
                 className="dropdownToggle"
                 href="/insight">
                 Insight
               </Dropdown.Toggle>
               </Dropdown>
    </Nav.Item>
         : null
         }

         { userInfo
         ? <Nav.Item className="navSection">
             <Dropdown
             className='navSection headerDropdown'>

               <Dropdown.Toggle
                 id="yearDropdownToggle"
                 className="dropdownToggle"
                 href="/diary">
                 Diary
               </Dropdown.Toggle>
               </Dropdown>
    </Nav.Item>
         : null
         }

         { userInfo
         ? <Nav.Item className="navSection">
          <Dropdown className="userDropdown">
            <Dropdown.Toggle
            id="userDropdownToggle"
            className="dropdownToggle"
            >
            {userInfo?.name}</Dropdown.Toggle>
            <Dropdown.Menu id="userDropdownMenu">
              <Dropdown.Item id="profileSelector" className="profileTabSelector" href="/profile">My Profile</Dropdown.Item>
                <hr className="dividingLine" />
              <Dropdown.Item id="logoutSelector" className="profileTabSelector"onClick={logoutHandler}href="/">Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
     </Nav.Item>

     : null }
</Nav>
</Navbar.Collapse>

  </Navbar>

  )
}

export default Header;
