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

    case "SET_SKILLS_REF":
      return {
        ...state,
        sections: {
          ...state.sections,
          skills: action.ref,
        },
      };

    case "SET_ABOUT_REF":
      return {
        ...state,
        sections: {
          ...state.sections,
          about: action.ref,
        },
      };

    case "SET_CONTACT_REF":
      return {
        ...state,
        sections: {
          ...state.sections,
          contact: action.ref,
        },
      };

    default:
      return {
        ...state,
      };
  }
};

export default reducer;
