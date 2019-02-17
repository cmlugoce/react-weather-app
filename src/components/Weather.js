import React from 'react';


const Weather = props => (
	
	
	<div className="weather__info">

	  { 	
	 	props.temperature && <p className="weather__key">  
			 <div className="weather__temp"> 
			 <img className="weather__icon" src = {`http://openweathermap.org/img/w/${props.icon}.png`} alt="weather_icon"/>
			 {Math.round(props.temperature)}&#176;F</div>	
	 	</p> 
	 }

	 { 	
	 	props.description && <p className="weather__key">
            Condition:
	 		<span className="weather__value">  { props.description } </span>  
	 </p> 
	 }
	 {	
	 	props.city && props.country && <p className="weather__key"> Location: 
	 		<span className="weather__value"> { props.city }, { props.country }</span>
	 	</p> 
	 }
	 
	 { 	
	 	props.humidity && <p className="weather__key"> Humidity: 
	 		<span className="weather__value"> { props.humidity } </span>
	 	</p> 
	 }
	 
	 { 
	 	props.error && <p className="weather__error">{ props.error }</p>  
	 }
	</div>
);








export default Weather;