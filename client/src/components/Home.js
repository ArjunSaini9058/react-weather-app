import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const [temphum, setTemphum] = useState([]);
  const [windy, setWindy] = useState([]);
  const [wtype, setWtype] = useState([]);
  const [city, setCity] = useState('delhi');
  const [todo, setTodo] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const getWeather = async () => {
      try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e60f9bc1718956090e276eca8c0a9c7f&units=metric`;
        const response = await axios.get(url);
        const result = response.data;
        setCity(result.name);
        setTemphum(result.main);
        setWindy(result.wind);
        setWtype(result.weather[0]);
        setError('');
      } catch (e) {
        console.log(e);
        setError('Error fetching weather data');
      }
    };

    getWeather();
  }, [city]);

  const navigate = useNavigate();
  const navigateStart = () => {
    navigate('/');
  };

  const searchData = (e) => {
    setCity(todo);
    e.preventDefault();
    setTodo('');
  };

  return (
    <div className='Bbox'>
      <button className='arrow' onClick={navigateStart}>
        <h2>⇦</h2>
      </button>
      <h2 className='Bitem1'>{city}</h2>
      <div className='Bitem2'>
        <img
          className='icon'
          src={`https://openweathermap.org/img/wn/${wtype.icon}@2x.png`}
          height='100px'
          width='100px'
          alt='Weather Icon'
        />
        <div>{wtype.main}</div>
      </div>
      <h2 className='Bitem3'>
        <span>
          <img
            src='https://www.pngall.com/wp-content/uploads/2017/01/Temperature-PNG-Clipart.png'
            height='50px'
            width='50px'
            alt='Temperature Icon'
          />
        </span>
        {temphum.temp} ℃
      </h2>
      <div className='Bitem4'>
        <div>
          <span>
            <img
              src='https://weather-app-arjun.netlify.app/img/humidity.png'
              height='30px'
              width='30px'
              alt='Humidity Icon'
            />
          </span>
          {temphum.humidity} % Humidity
        </div>
        <div>
          <span>
            <img
              src='https://weather-app-arjun.netlify.app/img/wind.png'
              height='30px'
              width='30px'
              alt='Wind Icon'
            />
          </span>
          {windy.speed} Km/H
        </div>
      </div>
      <input
        type='search'
        className='searchbar'
        placeholder='Enter city name'
        value={todo}
        onChange={(event) => {
          setTodo(event.target.value);
        }}
      />
      <div className='Bitem6'>
        <button onClick={searchData} className='btn6'>
          Search Data
        </button>
      </div>
      {error && <div className='error-message'>{error}</div>}
    </div>
  );
};

export default Home;
