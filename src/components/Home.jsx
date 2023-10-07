import React, { useState } from "react";
import axios from "axios";

function Home() {
  const [data, setData] = useState({
    celcius: 10,
    name: "London",
    humidity: 10,
    speed: 2,
    image: "",
  });

  const [name, setName] = useState(" ");
  const [error, setError] = useState(" ");

  const handleClick = () => {
    if (name !== "") {
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=a77c3914aa31dd3584d3827198438aaa&units=metric`;
      axios
        .get(apiUrl)
        .then((res) => {
            // let imagePath = '';
            // if(res.data.weather[0].main === "Clouds"){
            //   imagePath = "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn2.vectorstock.com%2Fi%2F1000x1000%2F84%2F11%2Fweather-forecast-icon-seasons-clouds-vector-21218411.jpg&tbnid=p_L6Bp2sKxDqSM&vet=12ahUKEwitn8qUtraAAxX52jgGHdcSAYkQMygDegUIARDiAQ..i&imgrefurl=https%3A%2F%2Fwww.vectorstock.com%2Froyalty-free-vector%2Fweather-forecast-icon-seasons-clouds-vector-21218411&docid=w6kWW7yhyh-iTM&w=1000&h=1080&q=weather%20forecast%20clouds%20image&ved=2ahUKEwitn8qUtraAAxX52jgGHdcSAYkQMygDegUIARDiAQ"
            // }
            // else if(res.data.weather[0].main === "Clear"){
            //   imagePath = ""
            // }
            // else if(res.data.weather[0].main === "Rain"){
            //   imagePath = ""
            // }
            // else if(res.data.weather[0].main === "Drizzle"){
            //   imagePath = ""
            // }
            // else if(res.data.weather[0].main === "Mist"){
            //   imagePath = ""
            // }
            // else{
            //   imagePath = ""
            // }
            
          setData({
            ...data,
            celcius: res.data.main.temp,
            name: res.data.name,
            humidity: res.data.main.humidity,
            speed: res.data.wind.speed,
            // image: imagePath
          });
         
          setError("");
        })
        .catch((err) => {
          if (err.response.status === 404) {
            setError("Invalid City Name");
          } else {
            setError("");
          }
          console.log(err);
        });
    }
  };
  //   useEffect(() => {
  //     // handleClick()
  //   }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12 col-md-6 col-sm-3">
          <div className="heading">
            <h1>Weather Forecast</h1>
          </div>
          <div className="weather">
            <div className="search">
              <input
                type="text"
                placeholder="Enter City Name"
                onChange={(e) => setName(e.target.value)}
              />
              {/* <button className='img'><img src={data.imagePath}/></button> */}
              <button className="img" onClick={handleClick}>
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
            <div className="error">
              <p>{error}</p>
            </div>
            <div className="winfo">
              <img
                src="../assets/Images/weather.jpeg"
                alt=""
                className="icon"
              />
              <h1>{Math.round(data.celcius)}°C</h1>
              <h2>{data.name}</h2>
            </div>
            <div className="details">
              <div className="col">
                {/* <img src="" alt="" /> */}
                <div className="humidity">
                  <p>Humidity: {Math.round(data.humidity)}%</p>
                </div>
              </div>
              <div className="col">
                {/* <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fthenounproject.com%2Fbrowse%2Ficons%2Fterm%2Fhigh-wind-speeds%2F&psig=AOvVaw16aRCgf6Tfb7o22ou9lbQH&ust=1690787032098000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCKic6tbutYADFQAAAAAdAAAAABAE" alt="" /> */}
                <div className="wind">
                  <p>Wind : {Math.round(data.speed)}km/h</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
