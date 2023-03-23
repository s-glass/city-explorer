import React from 'react';
import Card from 'react-bootstrap/Card';


class Movies extends React.Component {
  render() {
    console.log(this.props);
    return (
      <>
        {
          this.props.movieData.map((movie, idx) => {
            return (
              <Card key={idx} style={{ width: '18rem' }}>
                <Card.Img
                  src={movie.image}
                  alt={movie.title}
                />
                <Card.Body className='card-caption'>
                  <Card.Title>{movie.title}</Card.Title>
                  <Card.Text>
                    <p className='card-text'>{movie.overview}</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            )
          })
        }
      </>
    )
  }
}

export default Movies;