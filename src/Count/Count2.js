import React, { Component } from "react";

class Count2 extends Component{
    render(){
        return(
            <div>
                <button onClick={this.props.Decre}>-</button>
            </div>
        )
    }
}

export default Count2;