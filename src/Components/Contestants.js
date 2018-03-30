import React from 'react'
import ContestantCard from './ContestantCard'
import { connect } from 'react-redux'

function Contestants({ contestants, increaseVote, decreaseVote }) {

  const mapContestants = () => {
    let contestantArray = Object.values(contestants)
    let contestantCards = contestantArray.map(contestant => {
      return (< ContestantCard contestant={
        contestant
      }
      />
      )
    })
    return contestantCards
  }

  return (
    <div>
      <div className="container">
        {mapContestants()}
      </div>
    </div>
  )
}
// export default Contestants

const mapStateToProps = (state) => {
  return {
    contestants: state.contestants
  }
}

export default connect(mapStateToProps)(Contestants)
