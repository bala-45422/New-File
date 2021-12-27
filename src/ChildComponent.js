import React,{component} from "react";

class ChildComponent extends component{
    render(){
        return(
            <div>
                {this.props.Data.Name} address is {this.props.Data.Address}
            </div>
        );
    }
}

export default ChildComponent;