import React, { Component } from "react";
import Count1 from "./Count1";
import Count2 from "./Count2";


class Count extends Component {
  constructor(){
    super();
    this.state={
      Count:0
    }
  }
  increment=()=>{
    this.setState({ Count:this.state.Count+1});
    
}
decrement=()=>{
    this.setState({ Count:this.state.Count-1});
}
  render() {
    return( 
    <div>
      <input type="number" value={this.state.Count}/>
      <Count1 Incre={this.increment}/>
      <Count2 Decre={this.decrement}/>
    </div>
    );
  }
}

export default Count;
