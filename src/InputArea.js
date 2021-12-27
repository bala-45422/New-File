import React,{usestate} from "react";

const InputArea = (Props) => {
    usestate[inputText,setinputText] = usestate("");
    const handleChange = (event) => {
        setinputText(event.target.value);
    }
    return(
        <div className="form">
            <input type="text" onChange={handleChange} value={inputText}></input>
            <button onClick={()=>{
                Props.addIems(inputText);
                setinputText("");
            }}>
                <span>Add</span>
            </button>

        </div>
    )
}
export default InputArea;