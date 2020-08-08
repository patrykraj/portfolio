const initialState = {
  sections: {
    projects: false,
    skills: false,
    about: false,
    contact: false,
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PROJECTS_REF":
      return {
        ...state,
        sections: {
          ...state.sections,
          projects: action.ref,
        },
      };

    default:
      return {
        ...state,
      };
  }
};

export default reducer;
