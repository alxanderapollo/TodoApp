import React, { Component} from 'react';
import './App.css';

class  App extends React.Component {
  //1. Create the app and the form for a user to input in
  //2. initlize a state to contain an arry of inputs from the user
  constructor(props) {
    super(props);
    this.state = {myArray: []};
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.saveMyValue = this.saveMyValue.bind(this);
  }
  
  // When the user clicks on the input field and starts typing, each keystroke triggers the onChange event handler. 
  // The handleChange function is then called and the current value (text) in the input is saved to state using 
  // setState().

  // setState() causes the component to rerender and the text displayed in the input field is now fetched from 
  // this.state.username. The text in the h3 is also updated upon the re-render.
  // This flow ensures that the input, h3 and state are always in sync since the state object is the single source 
  // of truth for the component.

  handleChange(event) {
    //console.log(this.state.myArray)
    event.preventDefault();
    this.setState({myArray: [...this.state.myArray, event.target.value]});

    //changes the value of state
    //save the input into the current most state
  

  }

  handleSubmit(event) {
   

  }
  saveMyValue(event) {
    event.preventDefault();
  this.setState({myArray: [...this.state.myArray, event.target.value]});
  }


  //called when the component is rendered onto the screen
  componentDidMount() {
    console.log('My component has been rendered onto the screen ')
  }
  //called when the component has been updated 
  componentDidUpdate() {
    console.log('my Component has been updated')
  } 

  render() {
    return (
      <div className="App">
        <h1>This is my Todo App</h1>
      <form >
        <label>
          <input type="text" 
                  value={this.state.value} 
                  onChange={this.handleChange} 
          />
        </label>
        <input type="submit" value="Submit" onclick={saveMyValue(this.value)}  />
      </form>
        {this.state.myArray.map((value, index) => 
          <li key ={index}>{value}</li>)}
      </div>
    );
  }
}

export default App;
