import React, { Component } from "react";
import CatCard from "./components/CatCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import cats from "./cats.json";
import "./App.css";

class App extends Component {
  //set state
  state = {
    cats
  };

  
   selectFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const cats = this.state.cats;
    let score = this.state.score;
    let bestscore = this.state.bestscore;

    if (this.state.previousFriend === null) {
        console.log("first selection");
        score = score + 1;
        this.setState({score: score});
        this.setState({message: "Lucky guess, keep going."});


    } else {
      if (this.state.previousFriend === id) {

        score = 0;
        this.setState({score: score});
        this.setState({message: "You Lose"});
        this.setState({previousFriend: null});
      } else {
        score = score + 1;
        this.setState({score: score});
        this.setState({message: "You guessed correctly, keep going."});

      }
    }
    this.setState({previousFriend: id});

    if (score > bestscore) {
      bestscore = score;
      this.setState({bestscore: score});
      console.log("new best score!" + bestscore);
    } else {
      console.log(score);
    }
    //below, random
    cats.sort(function(a, b) {
      return 0.5 - Math.random()
    });  
    this.setState({ cats });

  };

//add a componentDidMount which fires up on load and does"something" to initialize the app. 
  componentDidMount() {
    this.setState({score: 0});
    this.setState({bestscore: 0});
    this.setState({previousFriend: null});
  }


  render() {
    return (
      <Wrapper>
        <Title>
        <h1 class="titleline">Cat in a Box</h1>
        <h3 class="score formattitle" class="bestscore">Score: {this.state.score}  Best Score: {this.state.bestscore}</h3>
        <p class="message formattitle">{this.state.message}</p>
        </Title>
        
        {this.state.cats.map(friend => (
          <CatCard
            selectFriend={this.selectFriend}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}          
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;

// <h3 class="formattitle">Do not click the same image twice.</h3>
// code - push//