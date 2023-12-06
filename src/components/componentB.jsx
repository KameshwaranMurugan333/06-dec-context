import { ComponentD } from "./componentD"
import { ComponentE } from "./componentE"

export const ComponentB = (props) => {
    return <div>
        <h4>ComponentB</h4>
        <ComponentD ></ComponentD>
        <ComponentE></ComponentE>
    </div>
}