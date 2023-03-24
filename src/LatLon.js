import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';


class LatLon extends React.Component {
  render() {
    return (
      <>
      <ListGroup>
        <ListGroup.Item> City Latitude: {this.props.cityData.lat}</ListGroup.Item>,
        <ListGroup.Item> City Longitude: {this.props.cityData.lon}</ListGroup.Item>,
      </ListGroup>
      </>
    )
}
}

export default LatLon;