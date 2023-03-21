import React from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import './App.css'


class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      pokemonData: [],
      city: '',
      cityLat: '',
      CityLon: '',
      cityData: {},
      error: false,
      errorMessage: ''
    }
  }


  handleCityInput = (event) => {
    this.setState({
      city: event.target.value
    })
  }

  getCityData = async (event) => {
    event.preventDefault();

    try {
    let url = `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.city}&format=json`

    let cityDataFromAxios = await axios.get(url);
    console.log(cityDataFromAxios.data[0]);

    this.setState({
      cityData: cityDataFromAxios.data[0],
      error: false
    });

  }   catch(error){

      this.setState({
        error: true,
        errorMessage: error.message
      });
  }
}

  // *** Map portion of the lab - img src points to this url:



  render(){
    return (
      <>
        <h1> API CALLS</h1>

      <Form onSubmit={this.getCityData}>
        <Form.Label> Enter In A City:</Form.Label>
          <Form.Control type="text" onChange={this.handleCityInput}/>
        <Button variant="success" type="submit">Explore!</Button>
      </Form>
      
            {/*ternary - wtf, if there's an error, show the error, if not, show the actual data from location IQ */}
      {
      this.state.error
      ? <p>{this.state.errorMessage}</p>
      : Object.keys(this.state.cityData).length > 0 &&
      <ul>
        <p>{this.state.cityData.display_name}{this.state.cityData.lat}{this.state.cityData.lon}</p>
        <Image class="img-fluid" src = {`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${this.state.cityData.lat},${this.state.cityData.lon}&zoom=13`} alt = 'Map of entered city'/> 
      </ul>

      }

      </>
    )
  }
}


export default App;
