import React from "react";

class Input extends React.Component{

  constructor(){
    super();
    this.state = {inputVal: ""};
  }

  updateVal(val){
    this.setState({inputVal: val.target.value});
  }

  theClick(){
  	var x = this.state.inputVal
  	this.props.action(x);
  }

  render(){
    return (
      <div className="inputHeader">
        <input type="text" className="input-lg" placeholder="Enter City Name" onChange={(x)=> this.updateVal(x)} /> <button className="btn btn-lg btn-danger" onClick={this.theClick.bind(this)}>Sumbit</button>
      </div>
    );
  }  

};

export default Input;