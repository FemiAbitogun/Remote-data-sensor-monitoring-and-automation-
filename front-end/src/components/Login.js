import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom';
import { context } from '../context/Context'
import axios from 'axios'


function Login() {
    const history = useHistory();
    const { user, setUser, error, setError } = useContext(context);
    const [name, setName] = useState();
    const [password, setPassword] = useState();
    const nameChange = (e) => { setName(e.target.value) }
    const passwordChange = (e) => { setPassword(e.target.value) }

    const formSubmit = async (e) => {
        e.preventDefault();
        try {
            const LoginResult = await axios.post("http://localhost:5000/user/login",
                {
                    name: name,
                    password: password
                }
            );

            if (LoginResult.data) {
                setUser(LoginResult.data)
                localStorage.setItem("auth-token", LoginResult.data.token);
                history.push("/home")
            }

        } catch (error) {
            setError(error.response.data.msg)
        }
    }

    const returnError = () => {
        setTimeout(() => {
            setError("");
        }, 2000)

        return (
            <section>
                <h3>{error} </h3>
            </section>

        )


    }





    return (
        <div>
            <form className="login" onSubmit={formSubmit}>
                <div className="login-form">
                    <div className="error">
                        {error ? returnError() : ""}
                    </div>
                    <input id="name" type="text" placeholder="name" onChange={nameChange}/>
                    <input id="password" type="text" placeholder="password" onChange={passwordChange}/>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Login
