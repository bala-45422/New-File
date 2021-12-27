import React,{useState} from "react";

const FunctionButton=()=> {

    const initialValue = 0;
    const [count,setCount] = useState(initialValue);

    


    // Addition=()=>{
    //     setCount(count+1);
    // }

    // Sbutraction=()=>{
    //     setCount(count-1);
    // }
    const Incrementfive=()=>{
        for(let i=0;i<10;i++){
            setCount(prevCount=>prevCount+1)
        }
     }
     
    return(
        <div>
            <h1>Functional Based Component</h1>
            <input type="number" value={count} />
            <button onClick={()=>setCount(prevCount=>prevCount+1)}>Add</button>
            <button onClick={()=>setCount(prevCount=>prevCount-1)}>Minus</button>
            <button onClick={Incrementfive}> Increment</button>
            <button onClick={initialValue}>Reset</button>
        </div>
    );


}

let arr = [120];
console.log(arr);

const arr2 =[123];
console.log(arr2);

export default FunctionButton;

