import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

class Movies extends React.Component {
  render() {
    return(
      <Carousel>
        {this.props.movieInfo.map((movie, idx) => {
          return (
            <Carousel.Item key={idx}>
              <img
                className="d-block w-100"
                src={`https://image.tmdb.org/t/p/w500/${movie.image}`}
                alt={movie.title}
                />
                <Carousel.Caption className='carousel-caption'>
                  <h1>{movie.title}</h1>
                  <p className='carousel-text'>{movie.overview}</p>
                </Carousel.Caption>
            </Carousel.Item>
          )
        })}
      </Carousel>
    )
  }
}

export default Movies;