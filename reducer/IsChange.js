const isChange = (state = true, action) => {
  switch (action.type) {
    case "IS_CHANGE":
      return !state;
    default:
      return state;
  }
};
export default isChange;
