const actions = {
  ADD_BIRDS: 'ADD_BIRDS',

  addBirds: (payload = {}) => ({
    type: actions.ADD_BIRDS,
    payload
  })
};

export default actions;