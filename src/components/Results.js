import React from "react";
import Request from "superagent";

class Results extends React.Component{

  constructor(){
    super();
    this.state = {
    	city: "",	temp: 0, condition: "",	icon: ""
    };
  }

  componentWillMount(){
		var url = "http://api.openweathermap.org/data/2.5/weather?q=" + this.props.searchTerm + "&APPID=a9bdab540e70be3d80f95ac4c1987efe";
		Request.get(url).accept("json").then((response)=> {
			this.setState({
				city: response.body.name,
				temp: response.body.main.temp,
				condition: response.body.weather[0].description,
				icon: response.body.weather[0].icon,
				cloudCover: response.body.clouds.all,
				windSpeed: response.body.wind.speed,
				humidity: response.body.main.humidity
			});
		});
	}

  render(){

  	var tempF = ((9/5)*(this.state.temp - 273)) + 32;

  	var icon = this.state.icon.slice(0,2), showIcon = "";
		if(icon == "03" || icon == "04") {
			showIcon = "2";
		} else if(icon == "50") {
			showIcon = "3";
		} else if(icon == "09" || icon == "10" || icon == "13") {
			showIcon = "4";
		} else if(icon == "11") {
			showIcon = "5";
		} else {
			showIcon = "1";
		}

    return (
      <div className="intro2">
      	<h1>Current conditions</h1>
      	<p><strong>City:</strong> <strong>{this.state.city}</strong></p>
      	<p><strong>Temperature:</strong> {Math.round(tempF)} F</p>
      	<p><strong>Description:</strong> {this.state.condition}</p>
      	<p><strong>Cloud Cover:</strong> {this.state.cloudCover}%</p>
      	<p><strong>Wind Speed:</strong> {this.state.windSpeed} MPH</p>
      	<p><strong>Humidity:</strong> {this.state.humidity}%</p>
      	<p><strong>FB emoji mood:</strong></p>
       	<img src= {"images/face" + showIcon + ".png"} />
       	<img src= {"images/face" + showIcon + ".png"} />
       	<img src= {"images/face" + showIcon + ".png"} />
      </div>
    );
  }

};

export default Results;