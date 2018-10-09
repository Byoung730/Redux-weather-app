import React, { Component } from "react";
import SearchBar from "../containers/search_bar";
import WeatherList from "../containers/weather_list";
import _ from "lodash";

export default class App extends Component {
  render() {
    const weatherSearch = _.debounce(term => {
      this.weatherSearch(term);
    }, 300);

    return (
      <div>
        <h2>Enter a city to get the weather outlook</h2>
        <h6>Dotted red line denotes average</h6>
        <hr />
        <SearchBar onSearchTermChange={weatherSearch} />
        <WeatherList />
      </div>
    );
  }
}
