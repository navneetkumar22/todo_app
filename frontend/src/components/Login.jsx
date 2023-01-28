import React from 'react'

function Login() {
    return (
        <div className='login-div'>
            <div className="form-div">
                <h1>Login</h1>
                <form action="">
                    <input type="email" placeholder='Enter your email' />
                    <input type="password" placeholder='Enter your password' />
                    <button>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Login;