import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from 'react-router-dom';
import { listYears } from '../../actions/yearActions';
import { listWeeks } from '../../actions/weekActions';
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
    const { loading, error, years } = yearList;

    const weekList = useSelector((state) => state.weekList);
    const { weeks } = weekList;

    useEffect(() => {
  dispatch(listYears());
    }, [dispatch, userInfo, history])

    useEffect(() => {
      dispatch(listWeeks());
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

    <Navbar.Brand
    href="/">
    <img
      src={logo}
      width="30"
      height="30"
      className="d-inline-block align-top"
      alt="NWD Logo"
    />
    </Navbar.Brand>

    <Navbar.Toggle id="toggle" aria-controls="basic-navbar-nav" variant="light" />
       <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
       <Nav className="justify-content-flex-end">


    { userInfo
    ? <Nav.Item className="navSection">
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
              className="dropdownToggle"
              href="/today">
              Today
            </Dropdown.Toggle>
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
