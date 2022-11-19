import React from 'react';
import './Tracklist.css';

import { EmptyState } from '../../EmptyProps'
import { TrackElement } from '../../Model/TrackElement'
import { Track } from '../Track/Track';

interface TracklistProps {
    tracks: TrackElement[];
}

export class Tracklist extends React.Component<TracklistProps, EmptyState> {
    render() {
        const tracks = this.props.tracks.map(track => {
            return <Track track={track} key={track.id}/>
        })
        return (
            <div className="TrackList">
                {tracks}
            </div>
        )
    }
}