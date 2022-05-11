import {useState} from "react"
import { flushSync } from "react-dom"

const Batching = () => {
    const [state, setState] = useState(0)
    const [value, setValue] = useState(0)

    console.log('render')

    const update = () => {
        setTimeout(() => {
            flushSync(() => { setValue(prev => prev + 1) })
           flushSync(() => { setState(prev => prev + 1)})
        }, 3000)
    }

    return (
        <div>
            <h1>value = {value}</h1>
            <h1>state = {state}</h1>
            <button onClick={update}>Update</button>
        </div>
    )
}

export default Batching