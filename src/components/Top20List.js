import React from 'react'
import Song from './Song'

export default function Top20List(props){

    let songNodes = props.top20.map(song => {
        return <Song song={song} key={song.id.attributes["im:id"]} />
    })

    return(
        <div>
            {songNodes}
        </div>
    )
}