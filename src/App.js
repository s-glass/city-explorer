import React from 'react';
import axios from 'axios';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import './App.css';
import Weather from "./Weather";
import Movies from "./Movies";
// import LatLon from "./LatLon";
// import WeatherDay from "./WeatherDay";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      cityData: {},
      cityWeather: [],
      error: false,
      errorMessage: '',
      movieData: [],
      showImages: false,
      movieError: false,
      movieErrorMessage: ''
    }
  }

  getCityData = async () => {

    try {
      let url = `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.city}&format=json`

      let cityDataFromAxios = await axios.get(url);

      this.setState({
        cityData: cityDataFromAxios.data[0],
        error: false,
      });

      let lat = cityDataFromAxios.data[0].lat;
      let lon = cityDataFromAxios.data[0].lon;
      this.handleWeather(lat, lon);

      this.getMovies();

    } catch (error) {
      this.setState({
        error: true,
        errorMessage: error.message
      });
    }
  }


  handleWeather = async (lat, lon) => {

    try {
      let url = `${process.env.REACT_APP_SERVER}/weather?lat=${lat}&lon=${lon}`
      
      let weatherDataFromAxios = await axios.get(url);

      this.setState({
        cityWeather: weatherDataFromAxios.data
      });

    } catch (error) {
      this.setState({
        error: true,
        errorMessage: error.message,
      });
    }
  }





  getMovies = async () => {
    try {
      let results = await axios.get(`${process.env.REACT_APP_SERVER}/movies?city_name=${this.state.city}`);

      this.setState({
        movieData: results.data,
        showImages: true,
        movieError: false,
        movieErrorMessage: ''
      })

    } catch (error) {
      this.setState({
        movieError: true,
        showImages: false,
        movieErrorMessage: `A Movie Error Occurred: ${error.response.status}, ${error.response.data}`
      })
    }
  }





  handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.city.value);
    this.setState({
      city: event.target.city.value

    }, this.getCityData )

  }


  render() {
    return (
      <>
        <h1> Enter A City Name:</h1>

        {/* <Form onSubmit={this.getCityWeather}>
          <Form.Label> Enter In A City:</Form.Label>
          <Form.Control type="text" />
          <Button variant="success" type="submit">Explore!</Button>
        </Form> */}

        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="city name" name="city"></input>
          <button type="submit">Explore!</button>
        </form>


        <Weather cityWeather={this.state.cityWeather} />
        {
          this.state.error
            ? <p>{this.state.errorMessage}</p>

            : Object.keys(this.state.cityData).length > 0 &&
           <ul>
              <p>{this.state.cityData.display_name}{this.state.cityData.lat}{this.state.cityData.lon}</p>

              <Image class="img-fluid" src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${this.state.cityData.lat},${this.state.cityData.lon}&zoom=13`} alt='Map of entered city' />

          </ul>

        }
              <Movies movieData={this.state.movieData}/>
      </>
    )
  }
}


export default App;
