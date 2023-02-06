import React, { Component } from "react";
import axios from 'axios';

import SearchForm from "./SearchForm";
import WeatherInformation from "./WeatherInformation";

class WeatherSearch extends Component {
    constructor(props) {
        super();

        this.state = {
            weatherData: null
        };
        this.fetchWeather = this.fetchWeather.bimd(this);
    }

    fetchWeather(city) {

        const weatherURL = 'https://api.openweathermap.org/data/2.5/weather';
        const weatherParams = {
            appid: 'c29cb1dea084fb8e6bb5930ee2a1fb4e',
            units: 'metric',
            q: city
        }

        axios.get(weatherURL, {params: weatherParams}).then((response) => {
            this.setState({weatherData: response.data});
        }, () => {this.setState({weatherData: null})
        });
    }

    render() {
        return (
            <div>
                <h1>
                    Here's the Weather:
                </h1>
                <SearchForm onSubmit={ this.fetchWeather } />
                <WeatherInformation data={ this.state.weatherData } />
            </div>
        )
    }
};

export default WeatherSearch