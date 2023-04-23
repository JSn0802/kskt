import React from 'react'
import styled from 'styled-components'
import { Link, useNavigate } from "react-router-dom";
 

function Navbar({loggedin, setloggedin}) {

  const navigate = useNavigate();

  const logout = () => {
    window["logOutFunction"]();
    setloggedin({isloggedin: false, user: ""});
    navigate("/");
  }

  return (
    <Snav>
     <nav>
        <ul>
          <li><Slink to='/'>About Us</Slink></li>
          
          <li><Slink to='/buyTogether'>Buy Together</Slink></li>
        
          <li><Slink to='/'>Contact Us</Slink></li>
          
          {loggedin.isloggedin ?  <li><Slink to='/track'>Track</Slink></li> : null}
          
          <li><Slink to='/farmers'>Farmers</Slink></li>
          {loggedin.isloggedin?null:
          <li> <Slink to='/login'>Login</Slink></li>
          }
          {loggedin.isloggedin ? <li>Hello {loggedin.user}</li> : null}
          
          {loggedin.isloggedin ? <li style={{fontWeight:"bold", cursor:"pointer"}} onClick={logout}>Logout</li> : <li><Slink to='/signup'>Sign Up</Slink></li>}
          
        </ul>
      </nav>
    </Snav>
  )
}
const Snav=styled.div`
  nav{
   background-color: rgb(125, 231, 125);
   
  }
.topbar{
    background: linear-gradient(180deg, rgb(125, 231, 125) 70%, white 30%);
}
  nav ul{
    display: flex;
    justify-content: space-around;
    list-style: none;
    padding: 0.8rem 0rem;
    margin: 0;
  }
  @media (max-width: 768px) {
  nav ul{
    flex-direction: column;
    align-items: center;
  }
}
  nav li{
  font-size: 1.1rem;
  }

`;

const Slink=styled(Link)`
  text-decoration: none;
  color: black;
  font-weight: 550;
  :hover
  {
    color:green;
  }

`
export default Navbar;