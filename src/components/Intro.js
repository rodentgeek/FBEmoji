import React from "react";

class Intro extends React.Component{

  render(){
    return (
      <div className="intro">
      
        <p>Input the name of any city and an API call to <strong>Open Weather Map</strong> will retrieve and present the latest weather condition in that city.&nbsp; Furthermore, our not-so-advanced algorithm will choose the appropriate Facebook emoji to describe the mood of the weather there.</p>

				<div className="introImages">
					<img src="./images/faces.gif" />
				</div>
   
      </div>
    );
  }

};

export default Intro;