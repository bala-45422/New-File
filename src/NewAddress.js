import React,{component} from "react";
import ChildComponent from "./ChildComponent";
class NewAddress extends component{
    constructor(){
        super();
        this.state ={Name:"Crud Operations",Address:"Urapakkam"}
    }
    UpdateAddress =() =>{
        this.setState({Address:"Urapakkam&Chennai"})
    }
    render(){
        return(
            <div>
                <ChildComponent Data={this.state} />
                <button onClick={this.UpdateAddress}>Change Address</button>
            </div>
        );
    }
}
export default NewAddress;