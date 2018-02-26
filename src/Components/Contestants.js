import React from 'react'
import ContestantCard from './ContestantCard'

export default function Contestants(props) {
  const mapContestants = () => {
    return Object.values(props.contestants).map(contestant => {
      return (< ContestantCard contestant = {
        contestant
      }
      increaseVote = {
        props.increaseVote
      } />)
    })
  }

  return (
    <div>
      <div className="container">
        {mapContestants()}
      </div>
    </div>
  )
}
