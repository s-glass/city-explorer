import React from 'react'
import Card from 'react-bootstrap/Card';

class Movie extends React.Component {
  render() {
    return (
      <>    
              <Card shadow='0' border='primary' background='grey' className='cards' style={{ width: '18rem' }}>
                <Card.Img src={`https://image.tmdb.org/t/p/w500/${this.props.movie.image}`} alt={this.props.movie.title}/>
                <Card.Body className='text-primary'>
                  <Card.Title> {this.props.movie.title}</Card.Title>
                  <Card.Text>
                    <p className='text-primary'>{this.props.movie.overview}</p>
                  </Card.Text>
                </Card.Body>
              </Card>
      </>
    )}};

export default Movie;