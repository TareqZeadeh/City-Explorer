import React from 'react';
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css';

class WeatherDayRender extends React.Component {

    render() {

        return (
            <>

                <Card style={{ border: 'groove' }}>
                    <Card.Header style={{ textAlign: 'center' }} as="h3">
                        {this.props.weatherinfoRender.date}
                    </Card.Header>
                    <Card.Header style={{ textAlign: 'center' }} as="h3">
                        {this.props.weatherinfoRender.description}
                    </Card.Header>
                </Card>


            </>
        )

    }
}

export default WeatherDayRender;