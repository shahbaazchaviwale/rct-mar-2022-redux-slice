import { Fragment, useState } from "react"

const Demo = (props) =>{
   const [addText, setAddText] = useState('')
    const sendValues = () => {
        props.sendProps(addText)
    }
    const getText = (e) => {
        setAddText(e.target.value)
    }
    
    return<div>
        <input type="text" onChange={getText}/>
        <button onClick={sendValues}>Visible</button>
    </div>
}


export default Demo;