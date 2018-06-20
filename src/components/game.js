import React from 'react'
import { Query } from 'react-apollo'
import { GET_BOARD_FOR_MONTH } from '../graphql/queries'
import CreateBoard from './create-board'
import BingoBoard from './bingo-board'

const months = {
  january: 0,
  february: 1,
  march: 2,
  april: 3,
  may: 4,
  june: 5,
  july: 6,
  august: 7,
  september: 8,
  october: 9,
  november: 10,
  december: 11
}

const Game = (props) => {
  const monthIndex = months[props.match.params.month]
  return (
    <Query
      query={GET_BOARD_FOR_MONTH}
      variables={{month: monthIndex}}
    >
      {({ loading, error, data, refetch }) => {
        if (loading) return <div>Loading...</div>
        if (error) return <div>Error :(</div>
        const board = data.board
        if (!board) return <CreateBoard month={monthIndex} handleClick={refetch} />

        return (
          <div>
            <section>
              {/* <h4>Score: {board.score}</h4> */}
            </section>
            <BingoBoard spaces={board.spaces} freeSpace={board.freeSpace} freeSpaceCompleted={board.freeSpaceCompleted} history={props.history} month={props.match.params.month}/>
          </div>
        )
      }}
    </Query>
  )
}

export default Game
