import React from "react";
import axios from "axios";
const URL = "http://www.anapioficeandfire.com/api/";

export default class Question2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: [],
    }
  }

  async getAnswer() {
    try {
      const response = await axios.get(URL + "houses/17")
      console.log(response.data)
      this.setState({info: response.data.seats});
    } catch {

    }
  }

  // componentDidMount() {
  //   axios
  //     .get(`${URL}characters/16`)
  //     .then((res) =>
  //       this.setState({
  //         info: res.data,
  //       })
  //     )
  //     .catch((e) => console.error(e.message));
  // }
  componentDidMount() {
    this.getAnswer();
  }

  // answer = this.state.info.born
  render() {
    return (
      <div>
        <h1> What is the second seat of House Baratheon?</h1>
        <h2> {this.state.info[1]} </h2>
      </div>
    );
  }
}
