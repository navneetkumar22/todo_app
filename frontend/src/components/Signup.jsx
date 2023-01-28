import React from 'react'

function Signup() {
  return (
    <div className='login-div'>
      <div className="form-div">
        <h1>Sign Up</h1>
        <form action="">
          <input type="text" placeholder='Enter your name' />
          <input type="email" placeholder='Enter your email' />
          <input type="password" placeholder='Enter your password' />
          <button>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Signup;