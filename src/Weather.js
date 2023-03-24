import React from 'react';
import WeatherDay from './WeatherDay'


class Weather extends React.Component {
  render() {
  return(
    <>
    <section>{this.props.cityWeather.map(weather => <WeatherDay weather={weather} />)}</section>
    </>
   )
  }
}

export default Weather;