import React, { Component } from "react";


class Header1 extends Component{
    render(){
        return(
            <div>
                {this.props.Data.Name} and address is {this.props.Data.Address}
                <button onClick={this.props.NewAddress}>Add</button>
                <button onClick={this.props.NewName}>ChangeName</button>
                
            </div>
        )
    }
}

export default Header1;