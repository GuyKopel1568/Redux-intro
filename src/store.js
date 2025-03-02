const initialState = {
  balance: 0,
  loan: 0,
  loanPurpose: ""
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "account/deposit":
      return { ...state, balance: state.balance + action.payload };
    case "account/withdraw":
      return { ...state, balance: state.balance - action.payload };
    case "account/loan":
      return { ...state, loan: state.loan + action.payload };
    case "account/loanPurpose":
      return { ...state, loanPurpose: action.payload };
    default:
      return state;
  }
}
