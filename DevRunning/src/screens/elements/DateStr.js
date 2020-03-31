import React from 'react'
import moment from 'moment-timezone'

const DateStr = ({ date, timezone }) => {
    const gmt = moment.tz(date, 'GMT') // GMT = Greenwich Mean Time
    const saoPaulo = gmt.clone().tz(timezone)

    return <span>{saoPaulo.format('DD/MM/YYYY, H:mm:ss')}</span>
}
export default DateStr