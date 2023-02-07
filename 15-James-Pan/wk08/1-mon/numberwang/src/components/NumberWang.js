import React, { Component } from "react";
import axios from "axios";

class NumberWang extends Component {
  constructor() {
    super();
    this.state = {
      fact: "",
    };
    this._fetchFact = this._fetchFact.bind(this);
  }

  _fetchFact() {
    axios.get("http://numbersapi.com/random/trivia?json").then((response) => {
      this.setState({ fact: response.data.text });
    });
  }

  render() {
    return (
      <div>
        <button onClick={this._fetchFact}>NumberWang</button>
        <p>{this.state.fact}</p>
      </div>
    );
  }
}

export default NumberWang;
