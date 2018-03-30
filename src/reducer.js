const defaultState = {
    contestants: {
      1: {
        id: 1,
        name: "Audrey",
        votes: 0,
        image: "https://78.media.tumblr.com/f9a4944929699e9c3a4bf23424d02a1a/tumblr_oabp1karlS1tumicto10_400.png"
      },
      2: {
        id: 2,
        name: "Shelly",
        votes: 0,
        image: "https://pbs.twimg.com/profile_images/551606789595090945/zgAnDSnS_400x400.jpeg"
      },
      3: {
        id: 3,
        name: "Donna",
        votes: 0,
        image: "https://arbitrarylaw.files.wordpress.com/2013/01/lara-flynn-boyle.jpg"
      }
    }
  }

const reducer = (state = defaultState,action) => {
  switch (action.type) {
    case "INCREASE_VOTE":
      return {
          contestants: {
              ...state.contestants,
              [action.contestantId]: {
                ...state.contestants[action.contestantId],
                votes: state.contestants[action.contestantId]["votes"] + 1
              }
            }
          }
    case "DECREASE_VOTE":
     return {
       contestants: {
         ...state.contestants,
         [action.contestantId]: {
           ...state.contestants[action.contestantId],
           votes: state.contestants[action.contestantId]["votes"] - 1
         }
       }
     }
    default:
      return state
  }
}

export default reducer
