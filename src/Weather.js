import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherRender from './rendercomponents/WeatherDay';


class Weather extends React.Component {

    render() {console.log(this.props.showmap);
        return (
            <>
                {
                    this.props.showmap &&
                    this.props.weatherinfo.map((weatherOBJ) => {
                        return (

                            <WeatherRender weatherinfoRender={weatherOBJ}/>
                        
                        )

                    })
                }

            </>

        )
    }

}





export default Weather;
