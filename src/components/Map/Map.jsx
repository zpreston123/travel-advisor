import React from 'react';
import GoogleMapReact from 'google-map-react';

import Marker from './Marker/Marker';
import WeatherIcon from './WeatherIcon';

import useStyles from './styles';

import mapStyles from './mapStyles';

const Map = ({ setCoordinates, setBounds, coordinates, places, setChildClicked, weatherData }) => {
    const classes = useStyles();

    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={14}
                margin={[50, 50, 50, 50]}
                options={{ disableDefaultUI: true, zoomControl: true, styles: mapStyles }}
                onChange={(e) => {
                    setCoordinates({ lat: e.center.lat, lng: e.center.lng });
                    setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
                }}
                onChildClick={(child) => setChildClicked(child)}
            >
                {places?.map((place, i) => <Marker place={place} key={i} /> )}
                {weatherData?.list?.map((data, i) => <WeatherIcon data={data} key={i} /> )}
            </GoogleMapReact>
        </div>
    );
};

export default Map;
