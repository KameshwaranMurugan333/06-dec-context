import React from "react"
import { CountContext, EmailContext } from "../contexts"

export const ComponentH = (props) => {

    const countContext = React.useContext(CountContext);
    const emailContext = React.useContext(EmailContext);

    return <div>
        <h4>ComponentH</h4>
        <h1>Email: {emailContext.email}</h1>
        <h1>Count: {countContext.count}</h1>
        <button onClick={() => countContext.setCount(countContext.count + 1)}>Increment</button>
    </div>
}