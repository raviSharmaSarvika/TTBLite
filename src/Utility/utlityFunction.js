import timezonemap from './timezonemap'
import momentTZ from 'moment-timezone'
import moment from 'moment'
import isEmpty from 'lodash/isEmpty'



export const changeDateToGeneralFormat = function (date) {
  if (!date) {
    return
  }
  if (date[10] === 'T') {
    return `${date.substr(0, 10)} ${date.substr(11, 8)}` // convert format 2020-10-14T07:54:07.000000Z to 2020-10-15 15:30:00
  }
  return date
}

export const getDateInUserTimezone = function (date, originalOffset, format, originalTzId) {
  const systemTz = timezonemap.find((tz) => tz.master_id === originalTzId)
  date = changeDateToGeneralFormat(date)
  const currentSystemOffset = -new Date().getTimezoneOffset()
  if (!isEmpty(systemTz)) {
    date = momentTZ.tz(date, systemTz.localized_timezone_name).utc()
    date = date.add(currentSystemOffset, 'minutes').format(format)
    return date
  } else {
    const orifinalOffsetFormatted = getOffsetInInt(originalOffset)
    return moment(date)
      .subtract(orifinalOffsetFormatted, 'minutes')
      .add(currentSystemOffset, 'minutes')
      .format(format)
  }
}


export const getOffsetInInt = function (rawOffset) {
    if (!rawOffset || (!rawOffset.includes('+') && !rawOffset.includes('-'))) {
      return 0
    }
    if (rawOffset.includes('+')) {
      let offsetPart = rawOffset.split('+')[1]
      offsetPart = offsetPart.split(':')
      return parseInt(offsetPart[0]) * 60 + parseInt(offsetPart[1])
    }
    if (rawOffset.includes('-')) {
      let offsetPart = rawOffset.split('-')[1]
      offsetPart = offsetPart.split(':')
      return -(parseInt(offsetPart[0]) * 60 + parseInt(offsetPart[1]))
    }
  }

export const dateDifferenceInDHM = function (dateTo, rawOffset = '', originalTzId) {
  try {
    const systemTz = timezonemap.find((tz) => tz.master_id === originalTzId)
    let requestDateByOffset, currentDateByOffset
    if (!isEmpty(systemTz)) {
      currentDateByOffset = momentTZ.utc()
      requestDateByOffset = momentTZ.tz(dateTo, systemTz.localized_timezone_name).utc()
    } else {
      const offset = getOffsetInInt(rawOffset)
      currentDateByOffset = moment.utc().add(offset, 'minutes')
      requestDateByOffset = momentTZ.tz(dateTo, 'UTC')
    }
    const duration = moment.duration(requestDateByOffset.diff(currentDateByOffset))
    const days = Math.floor(duration.asDays())
    duration.subtract(moment.duration(days, 'days'))
    const hours = duration.hours()
    duration.subtract(moment.duration(hours, 'hours'))
    const minutes = duration.minutes()
    if (duration._milliseconds <= 0) {
      return '0 Days 0 Hours 0 Minutes'
    }
    return `${days} Days ${hours} Hours ${minutes} Minutes`
  } catch {
    return '0 Days 0 Hours 0 Minutes'
  }
  }