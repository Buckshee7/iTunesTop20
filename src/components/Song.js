import React from 'react'

export default function Song(props){

    return (
        <div>
            <img src={props.song["im:image"][0].label} alt={"image for song: " + props.song.title.label}/>
            <h4>{props.song["im:name"].label}</h4>
            <p>Artist: {props.song["im:artist"].label}</p>
            <p>Genre: {props.song.category.attributes.label}</p>
        </div>
    )

}