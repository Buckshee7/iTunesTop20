import React from 'react'
import Song from './Song'

export default function Top20List(props){

    let songNodes = props.top20.map((song, index) => {
        return <Song song={song} chartPosn={index+1} key={index} />
    })

    return(
        <div>
            <h2>Songs</h2>
            {songNodes}
        </div>
    )
}