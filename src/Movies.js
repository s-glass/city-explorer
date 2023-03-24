import React from 'react';
// import Card from 'react-bootstrap/Card';
import Movie from './Movie';


class Movies extends React.Component {
  render() {
    console.log(this.props);
    return (
      <>
        <section>{this.props.movieData.map(movie => <Movie movie={movie}/>)}</section>
      </>
    )
  }
}

export default Movies;