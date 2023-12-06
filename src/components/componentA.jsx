import React from "react";
import { ComponentB } from "./componentB"
import { ComponentC } from "./componentC"
import { EmailContext } from "../contexts";

export const ComponentA = (props) => {

    const [email, setEmail] = React.useState("");

    return <div>
        <EmailContext.Provider value={{email, setEmail}}>
            <h4>ComponentA</h4>
            <ComponentB ></ComponentB>
            <ComponentC ></ComponentC>
        </EmailContext.Provider>
    </div>
}