import React from 'react'
import ContestantCard from './ContestantCard'

export default function Contestants({contestants, increaseVote}) {

  const mapContestants = () => {
    let contestantArray = Object.values(contestants)
    let contestantCards = contestantArray.map(contestant => {
      return (< ContestantCard contestant = {
        contestant
      }
      increaseVote = {
        increaseVote
      } />
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
