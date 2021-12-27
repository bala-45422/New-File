import React,{Component} from "react";
class Count extends Component{
    constructor(){
        super();
        this.state={Count:0,}
    }
    increment=()=>{
        this.setState({ count:this.state.Count+1});
    }
    decrement=()=>{
        this.setState({ count:this.state.Count-1});
    }
    render(){
        return(
            <div>
                <button onClick={this.increment} Incre={this.increment}>+</button>
                <button onClick={this.decrement} Decre={this.decrement}>-</button>
                <input type="number" value={this.state.Count}></input>
            </div>
        )
    }
}
export default Count;