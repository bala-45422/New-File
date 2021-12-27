import { Component } from "react/cjs/react.production.min";

class Property extends Component{
    render(){
        return(
            <div>
                <h1>Hello,{this.props.name}</h1>
                <button>Change</button>
            </div>
        )
    }
}

export default Property;
