import React, { Component } from "react";
import SearchBar from "../containers/searchBar";
import WeatherList from "../containers/weather_list";
import _ from "lodash";

export default class App extends Component {
  render() {
    const weatherSearch = _.debounce(term => {
      this.weatherSearch(term);
    }, 300);

    return (
      <div>
        <SearchBar onSearchTermChange={weatherSearch} />
        <WeatherList />
      </div>
    );
  }
}
