import React from 'react';
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css';

class Movie extends React.Component {
    render() {

        return (
            <>
                <Card className='my-15' style={{ border: 'groove' }}>

                    <Card.Header style={{ textAlign: 'center' }} as="h2">
                        {this.props.Movie.title}
                    </Card.Header>
                    <Card.Body>

                        <Card.Title style={{ textAlign: 'center' }}>
                            {this.props.Movie.overview}
                        </Card.Title>

                        <Card.Text style={{ textAlign: 'center' }} >
                            <img src={this.props.Movie.image_url} alt='map' />
                        </Card.Text>

                        <Card.Text style={{ textAlign: 'center' }} as="h4">
                            average votes: {this.props.Movie.average_votes}
                        </Card.Text>

                        <Card.Text style={{ textAlign: 'center' }} as="h4">
                            total votes: {this.props.Movie.total_votes}
                        </Card.Text>

                        <Card.Text style={{ textAlign: 'center' }} as="h4">
                            popularity: {this.props.Movie.popularity}
                        </Card.Text>

                        <Card.Text style={{ textAlign: 'center' }} as="h4">
                            released on:  {this.props.Movie.released_on}
                        </Card.Text>

                        <Card.Text style={{ textAlign: 'center' }} as="h4">
                            ----------------------------------------
                            ----------------------------------------
                            ----------------------------------------
                            ----------------------------------------
                            ----------------------------------------
                            ----------------------------------------
                            ----------------------------------------
                            ----------------------------------------
                            ----------------------------------------
                            ----------------------------------------
                        </Card.Text>


                    </Card.Body>
                </Card>
            </>
        )

    }



}
export default Movie;