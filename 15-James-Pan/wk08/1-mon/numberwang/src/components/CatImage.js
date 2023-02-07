import React, { Component } from "react";
import axios from "axios";

class CatImage extends Component {
  constructor() {
    super();
    this.state = {
      image: "",
    };
    this._fetchImage = this._fetchImage.bind(this);
  }

  _fetchImage() {
    axios.get("https://aws.random.cat/meow").then((response) => {
      this.setState({ image: response.data.file });
    });
  }

  render() {
    const styles = {
      width: "600px",
    };

    return (
      <div>
        <button onClick={this._fetchImage}> Show Cat Image</button>
        <br />
        {this.state.image ? (
          <img src={this.state.image} alt="cat" style={styles} />
        ) : null}
      </div>
    );
  }
}

export default CatImage;
