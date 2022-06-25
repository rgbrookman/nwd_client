import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from 'react-router-dom';
import PropagateLoader from "react-spinners/PropagateLoader";
import { DropdownButton, Dropdown, Nav, Navbar, Container  } from 'react-bootstrap';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faFontAwesome, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faShareNodes } from '@fortawesome/free-solid-svg-icons';

export const YouTube = () => {

library.add(faYoutube, faFontAwesome);

  const dispatch = useDispatch();
  const [loadingSpinner, setLoadingSpinner ] = useState(false);

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

  return (
    <Link
    href="https://www.youtube.com/channel/UCQU-OotA4BtSw_FG02gZymw"
    style={{textDecoration: "none", color: "#EBF4FA", fontFamily: "'Koulen', cursive" }}
    >  <FontAwesomeIcon icon={faYoutube} /> </Link>
  )
}

export const Instagram = () => {

library.add(faYoutube, faFontAwesome, faInstagram);


  return (
<Link>
    href="https://www.instagram.com/nowasteddays/"
    style={{textDecoration: "none", color: "#EBF4FA", fontFamily: "'Koulen', cursive" }}
    >  <FontAwesomeIcon icon={faInstagram} /> </Link>


  )
}

export const Share = () => {

library.add(faYoutube, faFontAwesome, faInstagram);


  return (
<Link>
    href="https://www.instagram.com/nowasteddays/"
    style={{textDecoration: "none", color: "#EBF4FA", fontFamily: "'Koulen', cursive" }}
    >  <FontAwesomeIcon icon={faShareNodes} /> </Link>


  )
}
