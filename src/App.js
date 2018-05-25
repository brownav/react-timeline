import React, { Component } from 'react';
import './App.css';
import timelineData from './data/timeline.json';
// import Timeline from './components/Timeline';
import TimelineEvent from './components/TimelineEvent'

class App extends Component {
  render() {

    console.log(timelineData);

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">TimeLine</h1>
        </header>
        <main className="App-main">
          <TimelineEvent/>
        </main>
      </div>

    );
  }
}

export default App;
