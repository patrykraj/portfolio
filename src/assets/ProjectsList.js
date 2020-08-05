import myBook from "../images/mybook.png";
import millionaireQuiz from "../images/millionairequiz.png";
import weatherForecast from "../images/weatherforecast.png";

const ProjectsList = [
  {
    id: 1,
    name: "MyBook",
    img: myBook,
    links: {
      demo: "https://my-book.netlify.app/",
      source: "https://github.com/patrykraj/myBook-app",
    },
    desc:
      "MyBook allows users to create account and add books on their personal bookshelf and modify their status, such as read date.",
    tech: ["React (incl. hooks)", "Redux", "Firebase"],
  },
  {
    id: 2,
    name: "MillionaireQuiz",
    img: millionaireQuiz,
    links: {
      demo: "https://patrykraj.github.io/millionaire-quiz/",
      source: "https://github.com/patrykraj/millionaire-quiz/tree/master",
    },
    desc:
      "Millionaire quiz is based on a famous TV show. The most challenging part was to create effective but not overpowered lifelines which simulate real life probability of occuring an error. Includes ranking of the best results.",
    tech: ["React"],
  },
  {
    id: 3,
    name: "WeatherForecast",
    img: weatherForecast,
    links: {
      demo: "https://patrykraj.github.io/weather-forecast-app/",
      source: "https://github.com/patrykraj/weather-forecast-app/tree/master",
    },
    desc:
      "Simple, multilanguage (English & Polish) weather forecast app created to practice ReactJS. Current worldwide weather is available, additional feature is a night mode.",
    tech: ["React"],
  },
];

export default ProjectsList;
