import React from 'react'
import moment from 'moment'

// Since mutation returns id and property, the Apollo cache will update automatically and re-render
const Space = ({ space, history, month }) => {
  const className = space.attended ? 'col attended' : 'col'

  return (
    <div onClick={() => history.push(`/bingo/${month}/${space.id}`)} className={className}>
      <div>
        <p>{moment(new Date(space.date)).format('MM/DD')}</p>
        <p>{space.name}</p>
      </div>
    </div>
  )
}

export default Space
