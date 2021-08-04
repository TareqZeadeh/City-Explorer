import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Movie from './rendercomponents/Movie';


class Movies extends React.Component {

    render() {

        return (
            <>


                {
                    this.props.showmap &&
                    this.props.Movieslist.map(moviesobj => {
                        return (

                            <Movie Movie={moviesobj}/>

                        )

                    })
                }


            </>

        )
    }
}

export default Movies;