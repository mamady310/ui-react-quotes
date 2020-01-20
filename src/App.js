import React, { Component } from 'react';
import './App.css';
import Button from './Button';
import Quote from './Quote';
class App extends Component {

  constructor() {
    super()
    this.state = { 
      count: 0,
      quoteArray: [],
      
      
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
    //console.log(res)
    if(this.state.quoteArray.length <= 14){
      this.setState(prevState => ({
      quoteArray: [...prevState.quoteArray, res.joke]
    }))
    }else{this.state.quoteArray.shift();} 
    // console.log(this.state.quoteArray)
  })   
}

nextButton (){
  if(this.state.count < 14){
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
  // this.setState(prevState=> ({
  //   jokeArray: [...prevState.jokeArray]})
  // let i = this.state.jokeArray.indexOf(this.state.jokeArray)
  // if(i > 0, i < this.state.jokeArray.length)
  // this.setState({
  //    index: this.state.jokeArray[i + 1]
  // })



  render() {
  
    const count = this.state.count
    const quote = this.state.quoteArray[count] 
    return (
      <div className="App">
        <header className="App-header">
          
          <h1 className="App-title">Dad Jokes</h1>
        </header>
        <h1>
          <Quote quotes={quote}/>
         </h1>
          {/* <Button previous={this.previousButton}/> */}
          {/* <Button buttonMethod={this.thisButton} label={'Previous Joke'}/> */}
          <div className="rowOfButtons" >
          <Button thisButton={this.previousButton} label={'Prev Quote'}/>
          <Button thisButton={this.thisButton} label={'New Quote'}/>
          <Button thisButton={this.nextButton}label={'Next Quote'}/>
          {/* <Button next={this.nextButton}/> */}
          </div>

      </div>
    );
  }
}
export default App


