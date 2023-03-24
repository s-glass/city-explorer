import React from 'react'

class Movie extends React.Component {
  render() {
    return(
      <>
      <img src={`https://image.tmdb.org/t/p/w500/${this.props.movie.image}`} alt={this.props.movie.title}></img>
      <p>{this.props.movie.title}</p>
      <p>{this.props.movie.overview}</p>
      </>
    )
  }
}

export default Movie;