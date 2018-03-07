import React from 'react'

export default function ContestantCard({ increaseVote, decreaseVote, contestant }) {

  const handleIncreaseVote = () => {
    increaseVote(contestant.id)
  }
  const handleDecreaseVote = () => {
    decreaseVote(contestant.id)
  }

  const swapImage = () => {
    if (contestant.votes > 4) {
      return "https://i.pinimg.com/564x/9f/bf/85/9fbf8558c0e8cc26309186f5e01d231f--in-the-basement-twin-peaks.jpg"
    } else if (contestant.votes < -4) {
      return "https://78.media.tumblr.com/c881b915fc70fa49d99c31f816da684c/tumblr_osbgxuKD2t1voc1nyo1_500.jpg"
    } else {
      return contestant.image
    }
  }


  return (
    <div className="card">
      <h2>Queen {contestant.name}</h2>
      <p>Votes: {contestant.votes}</p>
      <img src={swapImage()} />
      <br />
      <button onClick={handleIncreaseVote}>
        Vote
      </button>
      <button onClick={handleDecreaseVote}>
        Unvote
      </button>

    </div>
  )
}
