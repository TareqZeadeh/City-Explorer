import './App.css';
import React from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Modal from './Modal';
import Weather from './Weather';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      displayname: '',
      lon: '',
      lat: '',
      showmap: false,
      errormsg: 'Bad Response , No Results',
      displayerr: false,
      weatherinfo1date: '',
      weatherinfo2date: '',
      weatherinfo3date: '',
      weatherinfo1description: '',
      weatherinfo2description: '',
      weatherinfo3description: '',
      weatherinfoerr:''
    }
  }
  getlocationdata = async (event) => {
    event.preventDefault();
    let cityname = event.target.cityname.value;
    let url = `https://eu1.locationiq.com/v1/search.php?key=pk.b0f373df36ce8d03dec337f6f3d2f107&q=${cityname}&format=json`;
    let URL = '';
    console.log(cityname);


    if (cityname === 'amman' || cityname === 'AMMAN') {

      URL = `${process.env.REACT_APP_SERVER_URL}/weather?lat=31.95&lon=35.91&searchQuery=Amman`;
      let weatherData = await axios.get(URL);
      this.setState({
        weatherinfo1date: weatherData.data[0].date,
        weatherinfo2date: weatherData.data[1].date,
        weatherinfo3date: weatherData.data[2].date,
        weatherinfo1description: weatherData.data[0].description,
        weatherinfo2description: weatherData.data[1].description,
        weatherinfo3description: weatherData.data[2].description,
      })


    }
    else if (cityname === 'paris' || cityname === 'PARIS') {

      URL = `${process.env.REACT_APP_SERVER_URL}/weather?lat=48.86&lon=2.35&searchQuery=Paris`;
      let weatherData = await axios.get(URL);
      this.setState({
        weatherinfo1date: weatherData.data[0].date,
        weatherinfo2date: weatherData.data[1].date,
        weatherinfo3date: weatherData.data[2].date,
        weatherinfo1description: weatherData.data[0].description,
        weatherinfo2description: weatherData.data[1].description,
        weatherinfo3description: weatherData.data[2].description,
      })
    }
    else if (cityname === 'seattle' || cityname === 'SEATTLE') {
      URL = `${process.env.REACT_APP_SERVER_URL}/weather?lat=47.60621&lon=-122.33207&searchQuery=Seattle`;
      let weatherData = await axios.get(URL);
      this.setState({
        weatherinfo1date: weatherData.data[0].date,
        weatherinfo2date: weatherData.data[1].date,
        weatherinfo3date: weatherData.data[2].date,
        weatherinfo1description: weatherData.data[0].description,
        weatherinfo2description: weatherData.data[1].description,
        weatherinfo3description: weatherData.data[2].description,
      })
    }
   


    try {
      let explorresult = await axios.get(url);
      
      this.setState({
        displayname: explorresult.data[0].display_name,
        lon: explorresult.data[0].lon,
        lat: explorresult.data[0].lat,
        showmap: true,
       
      })

    }
    catch {
      this.setState({
        showmap: false,
        displayerr: true,

      })


      console.log(this.state.weatherinfo);

      console.log(this.state.displayerr + "in catch")

    }



  }


  // getweatherdata = async () => {
  //   let URL = `${process.env.REACT_APP_SERVER_URL}/weather?lat=31.95&lon=35.91&searchQuery=Amman`;
  //   let weatherData = await axios.get(URL);
  //   this.setState({
  //     weatherinfo : weatherData.data
  //   })
  //   console.log(weatherData);
  // }



  render() {


    return (

      <>
        <h1 style={{ textAlign: 'center' }} >City Explorer</h1>
        <Form style={{ textAlign: 'center' }} onSubmit={this.getlocationdata}>
          <Form.Group style={{ display: 'inline-block' }} className="mb-3" controlId="exampleForm.ControlInput1">

            <Form.Control style={{ display: 'inline-block', width: '100%', }} type="text" placeholder="Type Your Location" name='cityname' />
          </Form.Group>
          <Button style={{ display: 'inline-block', background: 'lightgreen', }} variant="primary" type="submit">
            Explore!
          </Button>

        </Form>
        {/* <p>{this.state.displayname} , {this.state.lat} , {this.state.lon} </p> */}

        {/* {this.state.showmap &&  */}
        <Modal name={this.state.displayname} lat={this.state.lat} lon={this.state.lon} displayerr={this.state.displayerr} showmap={this.state.showmap} errormsg={this.state.errormsg} weatherinfo={this.state.weatherinfo} />
        

        <Weather weatherinfo1date={this.state.weatherinfo1date} weatherinfo2date={this.state.weatherinfo2date} weatherinfo3date={this.state.weatherinfo3date} weatherinfo1description={this.state.weatherinfo1description} weatherinfo2description={this.state.weatherinfo2description} weatherinfo3description={this.state.weatherinfo3description} showmap={this.state.showmap} weatherinfoerr={this.state.weatherinfoerr} displayerr={this.state.displayerr}/>
        {/* } */}


        {/* { 
       this.state.displayerr && 
       this.state.errormsg 
       } */}




      </>
    )
  }

}

export default App;
/* <img src={`https://maps.locationiq.com/v3/staticmap?key=pk.43fed3791d35ddb76aa14f749c6d3080&center=${this.state.lat},${this.state.lon}`} alt='map' /> */
