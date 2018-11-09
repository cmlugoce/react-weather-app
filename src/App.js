import React, { Component } from 'react';
import './App.css';
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';

const API_KEY = '9c55e2fb81e17cc16ad45b467ce8fd8a'

class App extends Component {

  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }
   
  getWeather = async (e) =>{
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=imperial`);
    const data = await api_call.json();
    if (city && country) {
    console.log(data); 
    this.setState({
      temperature: data.main.temp,
      city: data.name,
      country: data.sys.country,
      humidity: data.main.humidity,
      description: data.weather[0].description,
      error: ""
    })
  } else {
    this.setState({
      temperature: undefined,
      city: undefined, 
      country: undefined, 
      humidity: undefined, 
      description: undefined,
      error: "Please enter the value."
  })
}
  }

  render() {
    return (
      <div>
      <div className='wrapper'>
        
          <div className="container-fluid">
            <div className="row">
              <div className="col-xs-5 col-md-6 title-container">
                <Titles />
              </div>
              <div className="col-xs-7 col-md-6 form-container">
                <Form getWeather={this.getWeather} />
                <Weather 
                  temperature={this.state.temperature} 
                  humidity={this.state.humidity}
                  city={this.state.city}
                  country={this.state.country}
                  description={this.state.description}
                  error={this.state.error}
                />
              
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default App;
