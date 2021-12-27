import React from "react";
import { useState } from "react/cjs/react.development";
function New5() {
    const[new,setNew] = useState();
    const Courses = [
        { id:1, name:'Angular'},
        { id:2, name:'React Courses'},
        { id:3, name:'Aws courses'}
    ];
    return(
        <div>
            <h1>React Js List and Keys</h1>
            <ul>
                {
                    Courses.map((data,index)=>(
                        <li key={index}>{data.name}</li>
                    ))
                }
            </ul>

        </div>
    )
    
}

export default New5;