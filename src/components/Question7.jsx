import React from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
const URL = "http://www.anapioficeandfire.com/api/";

export default class Question5 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: [],
      bookArray: [],
    };
  }

  //   async getArray(element) {
  //     try {
  //         const num = await axios.get(element)
  //         this.state.bookArray.push(num)
  //     }catch {
  //     }}

  async getAnswer() {
    try {
      const response = await axios.get(URL + "characters/232");

      //   console.log(response.data)
      this.setState({ info: response.data.povBooks });
      console.log(response.data.povBooks);
      //   let book = this.state.info
      //   this.state.info.forEach(element =>{
      //     this.getArray(element)
      //   })

      //   const respon = await axios.get(this.state.info);
      //   this.setState({infofo: respon.data.name});
      //   console.log(this.state.infofo)
      // console.log(`this is ${respon.data.name}`)
    } catch {}
  }

  books = [];
  async getArray() {
    try {
      await axios.get(URL + "characters/232");

      console.log(this.state.info.length);
      for (let i = 0; i < this.state.info.length; i++) {
        let num = await axios.get(this.state.info[i]);
        this.books.push(num);
      }

      console.log(this.books);

      this.setState({ bookArray: this.books });
      console.log(this.books);
    } catch {}
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
    this.getArray();
  }

  // answer = this.state.info.born
  render() {
    console.log(this.state.bookArray);

    return (
      <div>
        <h1>What are the titles of Catelyn Stark's three POV books? </h1>
        {this.state.bookArray.map((book) => {
          return (<h2> Book: {book.data.name} </h2>);
        })}
      </div>
    );
  }
}
