import React, { Component } from 'react';
import './App.css';
import Quote from './Quote';
import Button from './Button';
class App extends Component {

  constructor() {
    super()
    this.state = { 
      count: 0,
      jokeArray: [],
      
      
    }
    this.thisButton = this.thisButton.bind(this);
    this.nextButton = this.nextButton.bind(this);
    this.previousButton = this.previousButton.bind(this);
    
  }

  
  thisButton() {
    fetch("https://quote-garden.herokuapp.com/quotes/random", {
    headers: { Accept: "application/json" }
  })
  .then(res => res.json())
  .then(res => {
    console.log(res)
    if(this.state.jokeArray.length <= 9){
      this.setState(prevState => ({
      jokeArray: [...prevState.jokeArray, res.quoteText]
    }))
    }else{this.state.jokeArray.shift();} 
    // console.log(this.state.jokeArray)
  })   
}

nextButton (){
  if(this.state.count < 9){
  this.setState({count: this.state.count + 1})
  }else {
    console.log(this.state.count)
  }

}  
previousButton (){
  if(this.state.count > 0){
  this.setState({count: this.state.count - 1})
  }else {
    console.log(this.state.count)
  }
} 


  render() {
  
    const count = this.state.count
    const joke = this.state.jokeArray[count] 
    return (
      <div className="App">
        <header className="App-header">
          
          <h1 className="App-title">Inspirational Quotes</h1>
        </header>
        <h1>
          <Quote jokes={joke}/>
         </h1>
          <div className="rowOfButtons" >
          <Button thisButton={this.previousButton} label={'Next'}/>
          <Button className="words" thisButton={this.thisButton} label={'New Quote'}/>
          <Button thisButton={this.nextButton}label={'Prev'}/>
          </div>
         

      </div>
    );
  }
}
export default App


