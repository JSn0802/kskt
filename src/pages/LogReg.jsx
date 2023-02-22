import React from 'react'
import SignUpForm from '../components/SignUpForm'
function LogReg({loggedin}) {
  return (
    <div>
  <SignUpForm loggedin={loggedin} ></SignUpForm>
    </div>
  )
}

export default LogReg