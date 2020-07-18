import React from "react";
import axios from "axios";
const URL = "http://www.anapioficeandfire.com/api/";

export default class Question5 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: [],
      infofo:[],
    }
  }

  async getAnswer() {
    try {
      const response = await axios.get(URL + "houses/362")
      
    //   console.log(response.data)
      this.setState({info: response.data.founder});
      console.log(response.data.founder)
      const respon = await axios.get(this.state.info);
      this.setState({infofo: respon.data.name});
      console.log(this.state.infofo)
    // console.log(`this is ${respon.data.name}`)
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
        <h1>What's the name of the founder of House Stark? </h1>
        {/* <h2> this is the url: {this.state.info} </h2> */}
        <h2> {this.state.infofo} </h2>
      </div>
    );
  }
}