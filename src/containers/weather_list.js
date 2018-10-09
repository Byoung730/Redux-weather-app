import React, { Component } from "react";
import { connect } from "react-redux";
import Chart from "../components/chart";
import GoogleMap from "../components/google_map";

class WeatherList extends Component {
  renderWeather(cityData) {
    if (cityData) {
      const name = cityData.city.name;
      const temps = cityData.list.map(
        weather => (weather.main.temp - 273.15) * (9 / 5) + 32
      );
      const pressure = cityData.list.map(weather => weather.main.pressure);
      const humidity = cityData.list.map(weather => weather.main.humidity);
      const { lon, lat } = cityData.city.coord;

      return (
        <tr key={name}>
          <td>
            <GoogleMap lon={lon} lat={lat} />
          </td>
          <td>
            <Chart data={temps} color="red" units="F" />
          </td>
          <td>
            <Chart data={pressure} color="green" units="hPa" />
          </td>
          <td>
            <Chart data={humidity} color="blue" units="%" />
          </td>
        </tr>
      );
    } else {
      alert("Please enter a valid city");
    }
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City Map</th>
            <th>Temperature (Farenheit)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>{this.props.weather.map(this.renderWeather)}</tbody>
      </table>
    );
  }
}

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
