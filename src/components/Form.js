import React from 'react';


const Form = props => (
	<form onSubmit={props.getWeather}>
		<input type="text" name="city" placeholder="City..."/>
		<input type="text" name="country" placeholder="Country..."/>
		<span><button id='button'>Get Weather</button></span>
	</form>
);







export default Form;