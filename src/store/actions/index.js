const getRefs = (state) => ({ sections: state.sections });

const setProjectsRef = (payload) => ({
  type: "SET_PROJECTS_REF",
  ref: payload,
});

const setSkillsRef = (payload) => ({
  type: "SET_SKILLS_REF",
  ref: payload,
});

const setAboutRef = (payload) => ({
  type: "SET_ABOUT_REF",
  ref: payload,
});

const setContactRef = (payload) => ({
  type: "SET_CONTACT_REF",
  ref: payload,
});

export { getRefs, setProjectsRef, setSkillsRef, setAboutRef, setContactRef };
