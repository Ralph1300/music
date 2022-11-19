import React from 'react';
import './SearchResult.css';

import { EmptyState } from '../../EmptyProps'
import { Tracklist } from '../Tracklist/Tracklist';
import { TrackElement } from '../../Model/TrackElement';

interface SearchResultProps {
    searchResults: TrackElement[];
}

export class SearchResult extends React.Component<SearchResultProps, EmptyState> {
    render() {
        return (
            <div className="SearchResults">
                <h2>Results</h2>
                <Tracklist tracks={this.props.searchResults}/>
            </div>
        )
    }
}
