import gql from 'graphql-tag'

export const GET_BOARD_FOR_MONTH = gql`
  query board($month: Int) {
    board(month: $month) {
      monthDisplay
      score
      freeSpace {
        name
        description
      }
      freeSpaceCompleted
      spaces {
        id
        name
        date
        attended
        sequence
      }
    }
  }
`

export const GET_SPACE_DETAILS = gql`
  query getSpace($spaceId: ID) {
    getSpace(id: $spaceId) {
      id
      name
      description
      date
      duration
      cost
      location {
        name
        address_1
        city
      }
      link
      attended
    }
  }
`
