import React from 'react';
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css';






class Modal extends React.Component {


    render() {


// console.log(this.props.weatherinfo);

        return (
            <>
                {
                    this.props.showmap &&



                    <Card className='my-15' style={{ border: 'groove' }}>
                        <Card.Header style={{ textAlign: 'center' }} as="h3">{this.props.name} </Card.Header>
                        <Card.Body>
                            <Card.Title style={{ textAlign: 'center' }}>{this.props.name} , {this.props.lat} , {this.props.lon}</Card.Title>
                            <Card.Text style={{ textAlign: 'center' }}>
                                <img src={`https://maps.locationiq.com/v3/staticmap?key=pk.43fed3791d35ddb76aa14f749c6d3080&center=${this.props.lat},${this.props.lon}`} alt='map' />
                            </Card.Text>
                            {/* <Card.Text style={{ textAlign: 'center' }}>
                            {this.props.weatherinfo}
                            </Card.Text> */}

                        </Card.Body>
                    </Card>

                }


{ 
       this.props.displayerr && <Card my-15 style={{ border: 'groove' }}><Card.Text style={{ textAlign: 'center', fontSize:'300%', color:'red'   }}>{this.props.errormsg} </Card.Text></Card>
        
       }





            </>

        )
    }

}
export default Modal;