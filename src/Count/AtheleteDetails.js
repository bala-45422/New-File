
import React,{Component} from 'react';
import "./Count.css";

class AtheleteDetails extends React.Component{
    constructor(){
        super();
        this.state = {atheletedata:[]}
    }

    componentDidMount(){
        fetch('https://raw.githubusercontent.com/ag-grid/ag-grid/master/packages/ag-grid-docs/src/olympicWinnersSmall.json').then(res=>res.json()).then(resp=>{
    this.setState({atheletedata:resp})})
    }
    render(){
        const {atheletedata}=this.state
        return(
<React.Fragment>
    <h1>Athelete Details</h1>
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Sport</th>
                <th>Country</th>
                <th>year</th>
                <th>Date</th>
            </tr>
            </thead>
            <tbody>
   {
      
           atheletedata.map((alt,index)=>{
           return <tr>
            <td>{alt.athlete}</td>
            <td>{alt.age}</td>
            <td>{alt.sport}</td>
            <td>{alt.country}</td>
            <td>{alt.year}</td>
            <td>{alt.date}</td>
            </tr>

        })
        
   }
   </tbody>>
   </table>
</React.Fragment>
        )
    }
}

export default AtheleteDetails;