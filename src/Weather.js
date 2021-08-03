import React from 'react';
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css';


class Weather extends React.Component {

    render() {console.log(this.props.showmap);
        return (
            <>
                {
                    this.props.showmap &&
                    this.props.weatherinfo.map(foscastobj => {
                        return (<Card style={{ border: 'groove' }}>
                            <Card.Header style={{ textAlign: 'center' }} as="h3">
                                {foscastobj.date}
                            </Card.Header>
                            <Card.Header style={{ textAlign: 'center' }} as="h3">
                                {foscastobj.description}
                            </Card.Header>
                        </Card>
                        )

                    })
                }

            </>

        )
    }

}





export default Weather;
