import React from 'react';
import { EmptyState } from '../../EmptyProps';
import './Track.css';

import { TrackElement } from '../../Model/TrackElement'

interface TrackProps {
    track: TrackElement
}

export class Track extends React.Component<TrackProps, EmptyState> {

    renderAction(isRemoval: boolean) {
        const title = isRemoval ? '-' : '+'
        return <button>title</button>
    }

    render() {
        const track = this.props.track
        return (
            <div className="Track">
                <div className="Track-information">
                    <h3>{track.name}</h3>
                    <p>{track.artist} | {track.album}</p>
                </div>
            <button className="Track-action"></button>
            </div>
        )
    }
}