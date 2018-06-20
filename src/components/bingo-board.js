import React from 'react'
import Space from './space'
import FreeSpace from './free-space'

const BingoBoard = ({spaces, freeSpace, freeSpaceCompleted, history, month}) => {
  const sequencedSpaces = {}
  spaces.forEach(space => {
    sequencedSpaces[space.sequence] = space
  })
  return (
    <div id="board-container">
      <div className="row header">
        <div className="col">B</div>
        <div className="col">I</div>
        <div className="col">N</div>
        <div className="col">G</div>
        <div className="col">O</div>
      </div>
      <div className="row">
        <Space month={month} history={history} space={sequencedSpaces[2]}/>
        <Space month={month} history={history} space={sequencedSpaces[1]}/>
        <Space month={month} history={history} space={sequencedSpaces[3]}/>
        <Space month={month} history={history} space={sequencedSpaces[0]}/>
        <Space month={month} history={history} space={sequencedSpaces[4]}/>
      </div>
      <div className="row">
        <Space month={month} history={history} space={sequencedSpaces[5]}/>
        <Space month={month} history={history} space={sequencedSpaces[6]}/>
        <Space month={month} history={history} space={sequencedSpaces[7]}/>
        <Space month={month} history={history} space={sequencedSpaces[8]}/>
        <Space month={month} history={history} space={sequencedSpaces[9]}/>
      </div>
      <div className="row">
        <Space month={month} history={history} space={sequencedSpaces[10]}/>
        <Space month={month} history={history} space={sequencedSpaces[11]}/>
        <FreeSpace space={freeSpace} completed={freeSpaceCompleted} />
        <Space month={month} history={history} space={sequencedSpaces[13]}/>
        <Space month={month} history={history} space={sequencedSpaces[14]}/>
      </div>
      <div className="row">
        <Space month={month} history={history} space={sequencedSpaces[15]}/>
        <Space month={month} history={history} space={sequencedSpaces[16]}/>
        <Space month={month} history={history} space={sequencedSpaces[17]}/>
        <Space month={month} history={history} space={sequencedSpaces[18]}/>
        <Space month={month} history={history} space={sequencedSpaces[19]}/>
      </div>
      <div className="row">
        <Space month={month} history={history} space={sequencedSpaces[20]}/>
        <Space month={month} history={history} space={sequencedSpaces[21]}/>
        <Space month={month} history={history} space={sequencedSpaces[22]}/>
        <Space month={month} history={history} space={sequencedSpaces[23]}/>
        <Space month={month} history={history} space={sequencedSpaces[24]}/>
      </div>
    </div>
  )
}

export default BingoBoard
