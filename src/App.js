import React from "react";
import './App.css';
import Pokemon from "./Pokemon";

// Psge that lets us increase or decrease
// how many Pokemon are on screen
// App component needs to:
// - keep track of how many Pokemon to show
// - iterate over a sing, D.R.Y modular Pokemon component
// - button to increase Pokemon count
// - button to decrease Pokemon count

class App extends React.Component {
  constructor(){
    super();

    // start with at least ONE pokemon on screen
    this.state = {
      pokemonCount: 3
    }
  }

  exampleFunction(){
    console.log("Hello world, from button click");
  }

  decreasePokemonCount(currentCount){
    if (currentCount > 0){
      this.setState({pokemonCount: this.state.pokemonCount - 1});
    }
  }

  render(){
    return(
      <div>
        <h1>Pokemon page</h1>

        {/* <button onClick={this.exampleFunction}>Increase Pokemon Count</button>
        <button onClick={() => {console.log("Hello world, from inline expression")}}>Decrease Pokemon Count</button> */}
        
        <button onClick={() => this.setState({pokemonCount: this.state.pokemonCount + 1})}>Increase Pokemon Count</button>
        <button onClick={() => this.decreasePokemonCount(this.state.pokemonCount)}>Decrease Pokemon Count</button>

        {/* <Pokemon></Pokemon> */}
        {
          // Array(arraySize).fill(default value).map(arrayValue => {return some JSX here})
          Array(this.state.pokemonCount).fill(null).map((element, index) => <Pokemon key={index}/>)
        }
      </div>
    )
  }
}

export default App;
