import React from 'react'
import { Mutation } from 'react-apollo'
import { CREATE_BOARD } from '../graphql/mutations'

// Since mutation returns id and property, the Apollo cache will update automatically and re-render
const CreateBoard = ({month, handleClick}) => {
  return (
    <Mutation
      mutation={CREATE_BOARD}
      variables={{month}}
    >
      {(createBoard, { loading, error }) => (
        <div>
          <button type="button" className="create-btn" onClick={async () => {
            await createBoard()
            handleClick()
          }}>Create Board</button>
          {loading && <div>Loading...</div>}
          {error && <div>Shoot! Something went wrong</div>}
        </div>
      )
      }
    </Mutation>
  )
}

export default CreateBoard
