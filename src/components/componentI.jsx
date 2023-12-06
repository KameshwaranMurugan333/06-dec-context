import React from "react"
import { EmailContext } from "../contexts"

export const ComponentI = (props) => {

    const emailContext = React.useContext(EmailContext)

    return <div>
        <h4>ComponentI</h4>
        <input type="email" value={emailContext.email} onChange={(e) => emailContext.setEmail(e.target.value)} />
    </div>
}