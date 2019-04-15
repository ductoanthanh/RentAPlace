import React, { Component } from 'react';
import { MapWithGeocode } from 'components/map/GoogleMap';
import { connect } from 'react-redux';
import * as actions from 'actions';

class RentalMap extends Component {
  reloadMapFinish() {
    this.props.dispatch(actions.reloadMapFinish());
  }

  render() {
     const { location, map: {isReloading} } = this.props;
     return (
      <MapWithGeocode
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCxDYhw-RJz6rQwHtHeZQms1h-oA23mKNI&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `360px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
        location={location}
        isReloading={isReloading}
        mapLoaded={() => this.reloadMapFinish()}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    map: state.map
  }
}

export default connect(mapStateToProps)(RentalMap);
