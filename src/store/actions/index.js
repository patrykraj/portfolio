const getRefs = (state) => ({ sections: state.sections });

const setProjectsRef = (state) => ({
  type: "SET_PROJECTS_REF",
  ref: state,
});

export { getRefs, setProjectsRef };
