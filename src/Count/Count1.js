import { Component } from "react";

class Count1 extends Component{
    render(){
        return(
            <div>
                
                <button onClick={this.props.Incre}>+</button>
            </div>
        )
    }
}

export default Count1;