import React from 'react'

class WeatherDay extends React.Component {
  render() {
    return(
      <>
      <p>{this.props.weather.date}</p>
      <p>{this.props.weather.description}</p>
      </>
    )
  }
}

export default WeatherDay;
