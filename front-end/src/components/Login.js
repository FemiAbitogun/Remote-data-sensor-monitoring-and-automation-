import React, { useContext, useEffect, useState } from 'react'
import { context } from '../context/Context'
import axios from 'axios'


function Login() {

    const { user, setUser, error, setError } = useContext(context);
    const [name, setName] = useState();
    const [password, setPassword] = useState();


    const nameChange = (e) => { setName(e.target.value) }
    const passwordChange = (e) => { setPassword(e.target.value) }


    const formSubmit = async (e) => {
        e.preventDefault();

        try {
            const result = await axios.post("http://localhost:5000/user/login",
                {
                    name: name,
                    password: password
                }
            );

        } catch (error) {
            setError(error.response.data.msg)
        }

    }








    return (
        <div>
            <form className="login" onSubmit={formSubmit}>
                <h1>LOGIN</h1>
                <div className="login-form ">
                    <div className="error">
                        {error ? (<h3>{error}</h3>) : ""}
                    </div>
                    <input id="name" type="text" placeholder="name" onChange={nameChange} />
                    <input id="password" type="text" placeholder="password" onChange={passwordChange} />
                    <button type="submit">Submit</button>

                </div>
            </form>
        </div>
    )
}

export default Login
