import {useState} from 'react'
import { render } from 'react-dom'
function LightSwitchFunc() {
    const [on, setOn] = useState(false)

    return (
        <div>
            <button>{on ? "true" : "false"}</button>
        </div>
    )
}