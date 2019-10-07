import React, { Component } from 'react'
import Person from './Person/Person'
export default class App extends Component {
  state = {
    showPost: false
  }
  onShowPost = () => {
    const doShowPost = this.state.showPost;
    this.setState({

      showPost: !doShowPost
    })
  }
  render() {
    const style = {
      marginTop: "10px",
      flexDirection: "column",
      display: "flex",
      backgroudColor: "white",
      justifyContent: "center",
      alignItems: "center",

    }
    let persons = null;
    if (this.state.showPost) {
      persons = (
        <div>
          <Person title="Asgarov" name="Kamil">sdsadsa</Person>

        </div>

      );


    }
    return (
      <div style={style} className="App">
        <button onClick={this.onShowPost} className="btn btn-lg">click button</button>
        {persons}
      </div>
    )
  }
}


