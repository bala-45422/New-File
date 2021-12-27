import { useState } from "react/cjs/react.development"

const Test = (Props)=>{
    const [inputText,setinputText] =useState("");

    const handleChange =(event) =>{
        setinputText(event.target.value)
    };
return(
    <div>
        <input type="text" onChange={handleChange} value={inputText}></input>
        <button onClick= {()=>{
          Props.addItems(inputText);
          setinputText("");
        }
        }>Add</button>
    </div>
)
}

export default Test;