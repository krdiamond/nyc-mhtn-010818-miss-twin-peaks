import React from 'react'

export default function ContestantCard(props){
  return (<div className="card">
      <h2>Queen {props.contestant.name}</h2>
      <p>Votes: {props.contestant.votes}</p>
      <img src={props.contestant.image}/>
      <br/>
      <button onClick={() => props.increaseVote(props.contestant.id)}>Vote</button>
    </div>)
}
