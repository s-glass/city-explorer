import React from 'react';


class Weather extends React.Component {
  render() {
  return(
    <>
    {this.props.cityWeather.map((singleDay, idx) => {
      
      return(
        <>
        {/* key={idx} */}
        <p>{singleDay.date}</p>
        <p>{singleDay.description}</p>
        </>
      )
    })}
    </>
  )

  }
}

export default Weather;