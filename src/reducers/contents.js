import { GET_CONTENTS } from '../actions/contents'


function contents(state = [], action) {
  switch (action.type) {
    case GET_CONTENTS: {
      return [
        ...state,
        ...action.contents
      ]
    }
    default: {
      return state
    }
  }
}

export default contents
