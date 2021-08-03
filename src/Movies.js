import React from 'react';
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css';


class Movies extends React.Component {

    render() {

        return (
            <>


                {
                    this.props.showmap &&
                    this.props.Movieslist.map(moviesobj => {
                        return (

                            <Card className='my-15' style={{ border: 'groove' }}>
                                <Card.Header style={{ textAlign: 'center' }} as="h2">{moviesobj.title} </Card.Header>
                                <Card.Body>
                                    <Card.Title style={{ textAlign: 'center' }}>{moviesobj.overview}</Card.Title>
                                    <Card.Text style={{ textAlign: 'center' }} >
                                        <img src={moviesobj.image_url} alt='map' />
                                    </Card.Text>
                                    <Card.Text style={{ textAlign: 'center' }} as="h4">
                                    average votes: {moviesobj.average_votes}
                                    </Card.Text>
                                    <Card.Text style={{ textAlign: 'center' }} as="h4">
                                    total votes: {moviesobj.total_votes}
                                    </Card.Text>
                                    <Card.Text style={{ textAlign: 'center' }} as="h4">
                                    popularity: {moviesobj.popularity}
                                    </Card.Text>

                                    <Card.Text style={{ textAlign: 'center' }} as="h4">
                                    released on:  {moviesobj.released_on}
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

                        )

                    })
                }









            </>

        )
    }
}

export default Movies;