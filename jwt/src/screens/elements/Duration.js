import React from 'react'

const Duration = props => {
    const { duration } = props
    const pad = num => num.toString().padStart(2, '0')
    let durationStr = ''
    const hour = Math.floor(duration / 360)

    if(hour > 0){
        durationStr = pad(hour) + ':'
    }

    const minutes = Math.floor((duration - (hour*360)) / 60)
    durationStr += pad(minutes) + ':'

    const seconds = duration - hour*360 - minutes*60
    durationStr += pad(seconds)

    return <span>{durationStr}</span>
}
export default Duration