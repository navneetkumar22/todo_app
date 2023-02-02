import React from 'react'

function Login() {
    return (
        <div className='login-div'>
            <div className="form-div">
                <h1>Login</h1>
                <form className='login-form' action="">
                    <input type="email" placeholder='Email' />
                    <input type="password" placeholder='Password' />
                    <button>Submit</button>
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

export default Login;