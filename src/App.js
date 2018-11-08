import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';

const API_KEY = '9c55e2fb81e17cc16ad45b467ce8fd8a'

class App extends Component {

  getWeather = async (e) =>{
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?id=2172797&appid=${API_KEY}`);
    const data = await api_call.json();
    console.log(data); 
}

  render() {
    return (
      <div className="App">
        <Titles/>
        <Form getWeather={this.getWeather}/>
        <Weather/>
      </div>
    );
  }
}

export default App;
