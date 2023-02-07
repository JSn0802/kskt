import React from 'react'
import LoginForm from '../components/LoginForm'
function LogReg({loggedin, setLoggedin}) {
  return (
    <div>
  <LoginForm loggedin={loggedin} setLoggedin={setLoggedin}></LoginForm>
  
    </div>
  )
}

export default LogReg