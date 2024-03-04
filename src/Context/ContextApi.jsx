import React, { createContext, useState, useContext } from 'react'

const EmailContext = createContext()

export const EmailProvider = ({ children }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <EmailContext.Provider
            value={{ email, setEmail, password, setPassword }}
        >
            {children}
        </EmailContext.Provider>
    )
}

export const useEmail = () => useContext(EmailContext)