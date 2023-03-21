import React from 'react';
import axios from 'axios';


class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      pokemonData: [],
      city: '',
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

  // ** async/await - handle our asynchronous code
  // ** try/catch - handle our errors - try resolves successful promises and catch handles rejected promises
  getCityData = async (event) => {
    event.preventDefault();

    try {

    // } catch(error){
    //   // tell user there's an error, call axios possibly
    // }

    // TODO: Use axios to get the data from LocationIQ using city in state
    let url = `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.city}&format=json`

    let cityDataFromAxios = await axios.get(url);

    console.log(cityDataFromAxios.data[0]);

    // TODO: Set state with the data that comes back from axios & set error boolean to false
    this.setState({
      cityData: cityDataFromAxios.data[0],
      error: false
    });

  }   catch(error){

      // TODO: set state with the error boolean and the error message
      this.setState({
        error: true,
        errorMessage: error.message
      })
  }
}

  // *** Map portion of the lab - img src points to this url:
  //*** https://maps.locationiq.com/v3/staticmap?key=<YOUR API KEY>&center=<CITY LAT>,<CITY LON>>&zoom=13 */


  render(){
    return(
      <>
        <h1> API CALLS</h1>

      <form onSubmit={this.getCityData}>
        <label > Enter In A City:
          <input type="text" onChange={this.handleCityInput}/>
        </label>
        <button type="submit">Explore!</button>
      </form>
      
            {/*ternary - wtf, if there's an error, show the error, if not, show the actual data from location IQ */}
      {
      this.state.error
      ? <p>{this.state.errorMessage}</p>
      :<p>{this.state.cityData.display_name}{this.state.cityData.lat}{this.state.cityData.lon}</p>
      }

      </>
    )
  }
}


export default App;










{/* <form >
        <button type='sumbit' onClick={this.handleGetPokemonData}>Gotta catch 'em all!</button>
      </form>

      <ul>
        {this.state.pokemonData.map((pokemon, idx) => <li key={idx}>{pokemon.name}</li>)}
      </ul> */}



  // *** Get Pokemon Data

  // handleGetPokemonData = async (event) => {
  //   event.preventDefault(); 

  //   // TODO: use axios to make a call out to the pokemon api
  //   let pokemonData = await axios.get('https://pokeapi.co/api/v2/pokemon/')

  //   // ** .data - where axios stores the info
  //   // ** .results - where the api stores the actual pokemon info

  //   console.log(pokemonData.data.results);

  //   // TODO; set that data into state 
  //   this.setState({
  //     pokemonData: pokemonData.data.results
  //   })
    
  // }