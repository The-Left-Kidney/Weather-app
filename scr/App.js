import React, { Component } from 'react';

import  TS from "./Comp/TS"
import Forms from "./Comp/Forms"
import Weather from "./Comp/Weather"


const API_KEY= "bcdfb62499ecad33557987b7c866e017";

class App extends Component {

  state = {
    temperature: undefined,
    city: undefined,
    humidity: undefined,
    country: undefined,
    description:undefined,
    error: undefined
    
  }

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=imperial`);
    const data = await api_call.json();
    
    if (data.cod === "404"){
      this.setState({
        temperature: "",
        city: "",
        humidity: "",
        country: "",
        description:"",
        error: "City Not Found"
      });
    }

    if (data.coord ){
      
    this.setState({
      temperature: data.main.temp,
      city: data.name,
      country: data.sys.country,
      description: data.weather[0].description,
      humidity: data.main.humidity,
      error:""

    });
    }
  }
  

  render() {
    return (
      <div >
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-6 title-container">

                  <TS/>

                </div>
                <div className="col-xs-6 form-container">
                  
                <Forms getWeather={this.getWeather}/>

                      <Weather
                      temperature={this.state.temperature}
                      city={this.state.city}
                      country={this.state.country}
                      description={this.state.description}
                      humidity={this.state.humidity}
                      error={this.state.error}
                      />
                </div>
              </div>
            </div>
          </div>
        </div>
     

      </div>
    );
  }
}

export default App;



   
 

