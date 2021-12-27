import React,{Component} from 'react';
// import Header1 from './Header1';
import Count from './Count';
class Header extends Component{
    // constructor(){
    // super();
    // this.state = { Name:'Balaji',Address:'Potheri'}
    // }
    // updateAddress = () =>{
    //     this.setState({Address:'Urapakkam,Potheri'})
    // }
    // ChangeName=()=>{
    //     this.setState({Name:"Karthick"})
    
    // }
  
    
    render(){
        return(
            <div>
                <Count/>
                {/* <Header1 Data={this.state} NewAddress={this.updateAddress} NewName={this.ChangeName} />
                {/* {this.state.Name} and address is {this.state.Address} */}
                {/* <button onClick={this.updateAddress}>Change Address</button>
                */}
            </div>
        )
    }
}
export default Header;