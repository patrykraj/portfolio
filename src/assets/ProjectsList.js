import mybook from "../images/mybook.png";

const ProjectsList = [
  {
    name: "MyBook",
    img: mybook,
    links: {
      demo: "https://my-book.netlify.app/",
      source: "https://github.com/patrykraj/myBook-app",
    },
    desc:
      "MyBook allows users to create account and add books on their personal bookshelf and modify their status, such as read date.",
    tech: ["React (incl. hooks)", "Redux", "Firebase"],
  },
];

export default ProjectsList;
