import gql from 'graphql-tag'

export const MARK_ATTENDED = gql`
  mutation markAttended($id: ID) {
    markAttended(id: $id) {
      id
      attended
    }
  }
`

export const MARK_FREE_SPACE = gql`
  mutation markFreeSpace($boardId: ID) {
    markFreeSpace(id: $boardId) {
      id
      freeSpaceCompleted
    }
  }
`

export const CREATE_BOARD = gql`
  mutation createBoard($month: Int) {
    createBoard(month: $month) {
      id
    }
  }
`
