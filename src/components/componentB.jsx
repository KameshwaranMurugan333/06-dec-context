import { CountContext, EmailContext } from "../contexts"
import MyClassComponent from "./MyClassComponent"
import { ComponentD } from "./componentD"
import { ComponentE } from "./componentE"

export const ComponentB = (props) => {
    return <div>
        <h4>ComponentB</h4>
        <ComponentD ></ComponentD>
        <ComponentE></ComponentE>
        <CountContext.Consumer>
            {countContext => <EmailContext.Consumer>
                {emailContext => <MyClassComponent countContext={countContext} emailContext={emailContext} />}
            </EmailContext.Consumer>}
        </CountContext.Consumer>
    </div>
}