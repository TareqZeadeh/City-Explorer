import React from 'react';
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css';


class Weather extends React.Component {
   
    render() {




        return (
            <>
                {
                    this.props.showmap &&

                  


                    <Card  style={{ border: 'groove' }}>
                        <Card.Header style={{ textAlign: 'center' }} as="h3">{this.props.name} </Card.Header>
                        <Card.Body>

                            <Card.Text style={{ textAlign: 'center' }}>
                            {this.props.weatherinfo1date}
                            </Card.Text>
                            <Card.Text style={{ textAlign: 'center' }}>
                            {this.props.weatherinfo1description}
                            </Card.Text>
                            <Card.Text style={{ textAlign: 'center' }}>
                            {this.props.weatherinfo2date}
                            </Card.Text>
                            <Card.Text style={{ textAlign: 'center' }}>
                            {this.props.weatherinfo2description}
                            </Card.Text>
                            <Card.Text style={{ textAlign: 'center' }}>
                            {this.props.weatherinfo3date}
                            </Card.Text>
                            <Card.Text style={{ textAlign: 'center' }}>
                            {this.props.weatherinfo3description}
                            </Card.Text>
                        
                        </Card.Body>
                    </Card>

                }






            </>

        )
    }

}






export default Weather;