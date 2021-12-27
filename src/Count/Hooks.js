import React,{useState} from 'react';
const Hooks = ()=>{
    const [name,setName] = useState({firstName:'',lastName:''});
return(
        <div>
        <input type="text" value={name.firstName} onChange={e=>setName({...name,firstName:e.target.value})}></input>
        <input type="text" value={name.lastName} onChange={e=>setName({...name,lastName:e.target.value})}></input>
        <h1>Your firstName is {name.firstName}</h1>
        <h2>Your lastName is {name.lastName}</h2>
        </div>
    );
}

export default Hooks;