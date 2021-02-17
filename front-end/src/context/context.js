

import React, { useState,createContext } from 'react'
export const context = createContext();

function Context(props) {

    const [user, setUser] = useState(undefined);
    const [error, setError] = useState(undefined);
    const [verify, setVerify] = useState(false);
    return (
        <div>
            <context.Provider value={{ user, setUser, error, setError }}>
                {props.children}
            </context.Provider>
        </div>
    )
}

export default Context
