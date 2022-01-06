import actions from './actions';
import IBirds from '../../Interface';

interface State {
  birds: IBirds[],
  action: any
}

const initState: State = {
  birds: [],
  action: null
};

type Action = {
  type: string
  payload: IBirds
}

export default (state: State = initState, action: Action): State => {
  switch (action.type) {
    case actions.ADD_BIRDS:
      return {
        ...state,
        birds: [...state.birds, action.payload],
        action: action.type
      };
    default:
      return state;
  }
};
