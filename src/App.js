import React from 'react';
import Intro from "./components/Intro";
import Input from "./components/Input";
import Results from "./components/Results";


class App extends React.Component {

  constructor(){
    super();
    this.state = {searchTerm: ""};
  }

  clickMe(val){
  	this.setState({searchTerm: val});
  }

  render(){

  	var x = this.state.searchTerm;

	  function Display(){
		  if (x.length == 0) {
		    return <Intro />;
		  } else {
		  	return <Results searchTerm={x} />;
			}
		}

	  return (
	    <div className="container">
	    	<div className="jumbotron">
	    		<h1>Facebook Emoji Weather Mood</h1>
	    	  <Input action={this.clickMe.bind(this)} />
      	</div>
	      <Display />
	    </div>
	  );
  }
}

export default App;
