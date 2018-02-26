import React from 'react'

export default function ContestantCard({increaseVote, contestant}){

  const handleVote = () => {
    increaseVote(contestant.id)
  }

  return (
    <div className="card">
      <h2>Queen {contestant.name}</h2>
      <p>Votes: {contestant.votes}</p>
      <img src={contestant.image}/>
      <br/>
      <button onClick={handleVote}>
        Vote
      </button>
    </div>
  )
}
