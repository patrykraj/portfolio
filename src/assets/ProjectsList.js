import myBook from "../images/mybook.png";
import millionaireQuiz from "../images/millionairequiz.png";
import weatherForecast from "../images/weatherforecast.png";
import shopTemplate from "../images/shop-template.png";
import portfolio from "../images/portfolio.png";

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
    tech: ["React (incl. hooks)", "Redux", "Firebase", "Jest"],
  },
  {
    id: 2,
    name: "ShopTemplate",
    img: shopTemplate,
    links: {
      demo: "https://shop-template-krayesky.netlify.app/",
      source: "https://github.com/patrykraj/shop-template",
    },
    desc:
      "Project created with Vue & Vuex. Products are fetched from API. The main features are complex filters, pagination, and shopping cart. Products added to the cart are saved in localStorage therefore user can go back to them anytime.",
    tech: ["Vue", "Vuex", "Vue-router"],
  },
  {
    id: 3,
    name: "Portfolio",
    img: portfolio,
    links: {
      source: "https://github.com/patrykraj/portfolio-project",
    },
    desc: "This site. Animations created with GSAP ScrollTrigger.",
    tech: ["React", "Redux"],
  },
  {
    id: 4,
    name: "MillionaireQuiz",
    img: millionaireQuiz,
    links: {
      demo: "https://millionaire-quiz.netlify.app/",
      source: "https://github.com/patrykraj/millionaire-quiz",
    },
    desc:
      "MillionaireQuiz is based on a famous TV show. The most challenging part was to create effective but not overpowered lifelines which simulate real life probability of occuring an error. Includes ranking of the best results.",
    tech: ["React", "React-router"],
  },
  {
    id: 5,
    name: "WeatherForecast",
    img: weatherForecast,
    links: {
      demo: "https://weather-forecast-krayesky.netlify.app/",
      source: "https://github.com/patrykraj/weather-forecast-app",
    },
    desc:
      "Simple, multilanguage (English & Polish) weather forecast app created to practice ReactJS. Current worldwide weather is available, additional feature is a night mode.",
    tech: ["React"],
  },
];

export default ProjectsList;
