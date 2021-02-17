import React, { useState, useEffect, createContext } from 'react'
import axios from 'axios'


export const context=createContext();

function Context(props) {
    const [user, setUser] = useState(undefined);
    const [error, setError] = useState(undefined);

    let token = localStorage.getItem("auth-token");
    if (!token) {
        localStorage.setItem("auth-token", "");
        token = "";

    }

    useEffect(() => {
        const getInfo = async () => {

            try {
                const result = await axios.post("http://localhost:5000/user/verify", null,
                    { headers: { "auth-token": token } }
                );

               setUser(result.data)

            } catch (error) {
                 setError(error.response.data.msg)
            }

        }
        getInfo();
    }, []);








    return (
        <div>
           <context.Provider value={{user, setUser,error, setError}}>
                {props.children}
           </context.Provider>
        </div>
    )
}

export default Context
