import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { account } from "../appwrite/appwriteConfig";

function Login() {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const loginUser = async (e) => {
        e.preventDefault()

        try {
            await account.createEmailSession(user.email, user.password);
            navigate("/dashboard")
        } catch (error) {
            console.log(error);
        }
    }



    return (
        <div className='login-div'>
            <div className="form-div">
                <h1>Login</h1>
                <form className='login-form' action="">
                    <input type="email" name="email" id="email" placeholder='Email' onChange={(e) => { setUser({ ...user, email: e.target.value }) }} />
                    <input type="password" name="password" id="password" placeholder='Password' onChange={(e) => { setUser({ ...user, password: e.target.value }) }} />
                    <button type="submit" onClick={loginUser}>Submit</button>
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