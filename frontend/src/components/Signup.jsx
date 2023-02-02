import React, { useState } from 'react';
import { account } from '../appwrite/appwriteConfig';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

function Signup() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: ""
  })

  // sign up
  const signupUser = async (e) => {
    e.preventDefault()

    const promise = account.create(
      uuidv4(),
      user.email,
      user.password,
      user.name
    );

    promise.then(
      function (response) {
        console.log(response);
        navigate('/dashboard') //sucess
      },
      function (error) {
        console.log(error); //failure
      }
    )

  }


  return (
    <div className='login-div'>
      <div className="form-div">
        <h1>Sign Up</h1>
        <form className='login-form' action="">
          <input type="text" id='name' name='name' placeholder='Name' onChange={(e) => { setUser({ ...user, name: e.target.value }) }} />
          <input type="email" id='email' name='email' placeholder='Email' onChange={(e) => { setUser({ ...user, email: e.target.value }) }} />
          <input type="password" id='password' name='password' placeholder='Password' onChange={(e) => { setUser({ ...user, password: e.target.value }) }} />
          <button type='submit' onClick={signupUser}>Submit</button>
        </form>
        <h2>OR</h2>
        <div className="social">
          <button className='google'>Google</button>
          <button className='fb'>Facebook</button>
        </div>
      </div>
    </div>
  )
}

export default Signup;