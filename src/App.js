import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

this.state = {
  Person: {
    fullName: "Anouar Khalloufi",
    bio: "Passionate web developer and cybersecurity learner.",
    imgSrc:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
    profession: "Full Stack Developer",
  },
  shows: false,
  timeSinceMount: 0,
};
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        timeSinceMount: prevState.timeSinceMount + 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  toggleProfile = () => {
    this.setState((prevState) => ({
      shows: !prevState.shows,
    }));
  };

  render() {
    const { Person, shows, timeSinceMount } = this.state;

    return (
      <div className="App">
        <h1>React Class Component Checkpoint</h1>

        <button onClick={this.toggleProfile}>
          {shows ? "Hide Profile" : "Show Profile"}
        </button>

        <h3>Component mounted since:</h3>
        <p>{timeSinceMount} seconds</p>

        {shows && (
          <div className="card">
            <img src={Person.imgSrc} alt={Person.fullName} />
            <h2>{Person.fullName}</h2>
            <h4>{Person.profession}</h4>
            <p>{Person.bio}</p>
          </div>
        )}
      </div>
    );
  }
}

export default App;