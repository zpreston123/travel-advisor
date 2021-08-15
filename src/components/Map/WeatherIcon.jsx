import React from 'react';

const WeatherIcon = ({ data }) => {
    return (
        <div lat={data.coord.lat} lng={data.coord.lon}>
            <img height={100} src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`} alt={data.weather[0].main} />
        </div>
    );
};

export default WeatherIcon;
