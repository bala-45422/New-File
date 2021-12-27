import React,{useState} from "react";

const InputArea = (Props) =>{
    const[inputText,setinputText] = useState("");

    const handleChange =(event) =>{
     setinputText(event.target.value);
    };
    return(
        <div className="form">
           <input type="text" onChange={handleChange} value={inputText}/>
            <button onClick={()=>{
                Props.addItems(inputText);
                setinputText("");
            }}>
                <span>Add</span>
            </button>

        </div>
    )
}

export default InputArea;