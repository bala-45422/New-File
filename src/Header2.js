import { Component } from "react";

class Header2 extends Component{
    render(){
        return(
            <div>
                {this.props.NewData.Name}
                <button onClick={this.props.NewName}>Change Name</button>
            </div>
        )
    }
}

export default Header2;