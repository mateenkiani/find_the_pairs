const INCREMENT = "increment";
const DECREMENT = "decrement";

export const incrementScore = () => ({
  type: INCREMENT
});

export const decrementScore = () => ({
  type: DECREMENT
});

const initialState = {
  score: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, score: state.score + 1 };
    case DECREMENT:
      return { ...state, score: state.score - 1 };
    default:
      return state;
  }
};
