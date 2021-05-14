const initial = {
  num: 5,
};
const handlers = {
  INC(s) {
    return {
      num: (s.num + 1) * 0.3 / 4
    };
  }
};
function reducer(state = initial, action) {
  if (handlers[action.type]) {
    return handlers[action.type](state);
  }

  return state;
}

module.exports = reducer;
