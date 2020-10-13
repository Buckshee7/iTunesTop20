import React from 'react'

export default function Song(props){

    return (
        <div>
            <h4>{props.song["im:name"].label}</h4>
            <p>Artist: {props.song["im:artist"].label}</p>
        </div>
    )

}