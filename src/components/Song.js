import React from 'react'

export default function Song(props){

    return (
        <div class="grid">
            <h2 class="songHeader">{props.chartPosn}.</h2>
            <img class="songimg" src={props.song["im:image"][2].label} alt={"image for song: " + props.song.title.label}/>
            <div class="songDetails">
                <h4>{props.song["im:name"].label}</h4>
                <p>Artist: {props.song["im:artist"].label}</p>
                <p>Genre: {props.song.category.attributes.label}</p>
            </div>
            <audio class="songAudio" controls>
                <source src={props.song.link[1].attributes.href} type="audio/mp4" />
            </audio>
        </div>
    )

}