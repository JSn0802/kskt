import React from 'react'
import SignUpForm from '../components/SignUpForm'
function LogReg({loggedin, setLoggedin}) {
  return (
    <div>
  <SignUpForm loggedin={loggedin} setLoggedin={setLoggedin}></SignUpForm>
    </div>
  )
}

export default LogReg