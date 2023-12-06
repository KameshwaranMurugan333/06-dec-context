import React from "react"

export const CountContext = React.createContext({
    count: 0,
    setCount: () => false
});

export const UserContext = React.createContext({
    user: {},
    updateUserDetail: () => false
});

export const EmailContext = React.createContext({
    email: "",
    setEmail: () => false
})