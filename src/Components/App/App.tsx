import React from 'react';
import './App.css';

import { SearchBar } from '../SearchBar/SearchBar';
import { DummyData, TrackElement } from '../../Model/TrackElement';
import { SearchResult } from '../SearchResult/SearchResult';

interface AppProps {
}

interface AppState {
  searchResults: TrackElement[];
}

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props)

    this.state = {
      searchResults: DummyData
    }
  }

  render () {

    const props = this.state.searchResults
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
          <div className="App">
            {/* <SearchBar searchResults={this.state.searchResults}/> */}
          <div className="App-playlist">
            <SearchResult searchResults={this.state.searchResults}/>
          </div>
        </div>
      </div>
      );
  }
}

export default App;
