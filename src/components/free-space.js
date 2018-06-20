import React from 'react'
import { Mutation } from 'react-apollo'
import { MARK_FREE_SPACE } from '../graphql/mutations'

// Since mutation returns id and property, the Apollo cache will update automatically and re-render
const FreeSpace = ({ space, completed, month }) => {
  const className = completed ? 'col attended' : 'col'

  return (
    <Mutation
      mutation={MARK_FREE_SPACE}
    >
      {(markFreeSpace) => (
        <div className={className}>
          <div>
            <p>FREE SPACE</p>
            <p>{space.description}</p>
            {/* <button type="button" onClick={markFreeSpace}>Attended</button> */}
          </div>
        </div>
      )
      }
    </Mutation>
  )
}

export default FreeSpace
