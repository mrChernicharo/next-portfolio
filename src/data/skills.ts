import { getXPTime } from "../utils/date-helpers";

export interface Skill {
  name: string;
  category:
    | "languages"
    | "frameworks"
    | "databases"
    | "libraries"
    | "platforms"
    | "tools"
    | "soft skills";
  start: Date;
  xpTime: string; // 1 year and 3 months;
  logo: string;
  level: 2 | 3 | 4 | 5;
  // category: string;
}

const skillsListFactory = (data: Skill[]) => {
  return data.reduce((acc, skill) => {
    acc[skill.name] = { ...skill };

    return acc;
  }, {});
};

export const skillsData: Skill[] = [
  {
    name: "Javascript",
    category: "languages",
    start: new Date(2018, 10, 23),
    xpTime: "",
    logo: "icons/javascript.svg",
    level: 9,
  },
  {
    name: "Css",
    category: "languages",
    start: new Date(2018, 10, 18),
    xpTime: "",
    logo: "icons/css.svg",
    level: 9,
  },
  {
    name: "Html",
    category: "languages",
    start: new Date(2018, 8, 2),
    xpTime: "",
    logo: "icons/html5.svg",
    level: 9,
  },
  {
    name: "Typescript",
    category: "languages",
    start: new Date(2020, 3, 12),
    xpTime: "",
    logo: "icons/typescript.svg",
    level: 8,
  },

  {
    name: "Python",
    category: "languages",
    start: new Date(2019, 3, 11),
    xpTime: "",
    logo: "icons/python.svg",
    level: 6,
  },
  {
    name: "Rust",
    category: "languages",
    start: new Date(2021, 3, 30),
    xpTime: "",
    logo: "icons/rust.svg",
    level: 2,
  },
  {
    name: "Php",
    category: "languages",
    start: new Date(2018, 11, 21),
    xpTime: "",
    logo: "icons/php.svg",
    level: 4,
  },
  {
    name: "Angular",
    category: "frameworks",
    start: new Date(2020, 4, 1),
    xpTime: "",
    logo: "icons/angular.svg",
    level: 8,
  },
  {
    name: "Apple",
    category: "platforms",
    start: new Date(2016, 5, 11),
    xpTime: "",
    logo: "icons/apple.svg",
    level: 8,
  },
  {
    name: "axios",
    category: "libraries",
    start: new Date(2019, 5, 11),
    xpTime: "",
    logo: "icons/axios.svg",
    level: 4,
  },
  {
    name: "aws",
    category: "platforms",
    start: new Date(2020, 2, 11),
    xpTime: "",
    logo: "icons/aws.svg",
    level: 4,
  },
  {
    name: "babel",
    category: "libraries",
    start: new Date(2019, 5, 11),
    xpTime: "",
    logo: "icons/babel.svg",
    level: 6,
  },
  {
    name: "Bash",
    category: "tools",
    start: new Date(2019, 6, 12),
    xpTime: "",
    logo: "icons/bash.png",
    level: 5,
  },
  {
    name: "Bootstrap",
    category: "libraries",
    start: new Date(2019, 5, 11),
    xpTime: "",
    logo: "icons/bootstrap.svg",
    level: 7,
  },

  {
    name: "d3",
    category: "libraries",
    start: new Date(2020, 3, 11),
    xpTime: "",
    logo: "icons/d3.png",
    level: 7,
  },
  {
    name: "date-fns",
    category: "libraries",
    start: new Date(2020, 5, 11),
    xpTime: "",
    logo: "icons/date-fns.svg",
    level: 4,
  },
  {
    name: "echarts",
    category: "libraries",
    start: new Date(2020, 7, 5),
    xpTime: "",
    logo: "icons/echarts.svg",
    level: 9,
  },
  {
    name: "express",
    category: "libraries",
    start: new Date(2020, 0, 21),
    xpTime: "",
    logo: "icons/express.svg",
    level: 6,
  },
  {
    name: "framer-motion",
    category: "libraries",
    start: new Date(2020, 9, 11),
    xpTime: "",
    logo: "icons/framer-motion.svg",
    level: 9,
  },
  {
    name: "google-cloud",
    category: "platforms",
    start: new Date(2020, 1, 11),
    xpTime: "",
    logo: "icons/google-cloud.svg",
    level: 7,
  },
  // {
  //   name: "gridster",
  //   category: "libraries",
  //   start: new Date(2019, 5, 11),
  //   xpTime: "",
  //   logo: "icons/gridster.png",
  //   level: 8,
  // },
  {
    name: "DBeaver",
    category: "tools",
    start: new Date(2020, 7, 11),
    xpTime: "",
    logo: "icons/dbeaver.svg",
    level: 4,
  },
  {
    name: "Docker",
    category: "tools",
    start: new Date(2020, 3, 25),
    xpTime: "",
    logo: "icons/docker.svg",
    level: 4,
  },
  {
    name: "Figma",
    category: "tools",
    start: new Date(2020, 2, 23),
    xpTime: "",
    logo: "icons/figma.svg",
    level: 8,
  },
  {
    name: "firebase",
    category: "platforms",
    start: new Date(2020, 5, 12),
    xpTime: "",
    logo: "icons/firebase.svg",
    level: 9,
  },
  {
    name: "firestore",
    category: "databases",
    start: new Date(2020, 6, 2),
    xpTime: "",
    logo: "icons/firestore.png",
    level: 10,
  },
  {
    name: "Git",
    category: "tools",
    start: new Date(2019, 2, 17),
    xpTime: "",
    logo: "icons/git.svg",
    level: 9,
  },
  {
    name: "GitHub",
    category: "platforms",
    start: new Date(2019, 3, 2),
    xpTime: "",
    logo: "icons/github.svg",
    level: 5,
  },
  {
    name: "GitLab",
    category: "platforms",
    start: new Date(2020, 5, 17),
    xpTime: "",
    logo: "icons/gitlab-tile.svg",
    level: 9,
  },
  {
    name: "Insomnia",
    category: "tools",
    start: new Date(2020, 0, 11),
    xpTime: "",
    logo: "icons/insomnia.svg",
    level: 10,
  },

  {
    name: "Material Design",
    category: "libraries",
    start: new Date(2020, 4, 11),
    xpTime: "",
    logo: "icons/material.png",
    level: 9,
  },
  {
    name: "Mobirise",
    category: "tools",
    start: new Date(2018, 11, 11),
    xpTime: "",
    logo: "icons/mobirise.png",
    level: 8,
  },
  {
    name: "ngRx",
    category: "libraries",
    start: new Date(2020, 6, 9),
    xpTime: "",
    logo: "icons/ngrx.svg",
    level: 5,
  },
  {
    name: "MySQL",
    category: "databases",
    start: new Date(2019, 6, 11),
    xpTime: "",
    logo: "icons/mysql.svg",
    level: 5,
  },
  {
    name: "MongoDB",
    category: "databases",
    start: new Date(2020, 5, 30),
    xpTime: "",
    logo: "icons/mongodb.svg",
    level: 6,
  },

  {
    name: "React",
    category: "frameworks",
    start: new Date(2020, 2, 30),
    xpTime: "",
    logo: "icons/react.svg",
    level: 9,
  },
  {
    name: "React Native",
    category: "frameworks",
    start: new Date(2020, 3, 21),
    xpTime: "",
    logo: "icons/react-native.svg",
    level: 7,
  },
  {
    name: "Realtime DB",
    category: "databases",
    start: new Date(2020, 5, 20),
    xpTime: "",
    logo: "icons/realtime-db.png",
    level: 9,
  },
  {
    name: "RxJS",
    category: "libraries",
    start: new Date(2020, 11, 21),
    xpTime: "",
    logo: "icons/rxjs.svg",
    level: 9,
  },
  {
    name: "SQL",
    category: "languages",
    start: new Date(2019, 2, 11),
    xpTime: "",
    logo: "icons/database.svg",
    level: 5,
  },
  {
    name: "Visual Studio Code",
    category: "tools",
    start: new Date(2018, 6, 1),
    xpTime: "",
    logo: "icons/vscode.png",
    level: 10,
  },
  {
    name: "Node",
    category: "frameworks",
    start: new Date(2019, 11, 21),
    xpTime: "",
    logo: "icons/node.svg",
    level: 7,
  },
  {
    name: "Mamp",
    category: "tools",
    start: new Date(2019, 5, 19),
    xpTime: "",
    logo: "icons/mamp.png",
    level: 5,
  },
  {
    name: "Notion",
    category: "tools",
    start: new Date(2020, 2, 11),
    xpTime: "",
    logo: "icons/notion.svg",
    level: 5,
  },

  {
    name: "jquery",
    category: "libraries",
    start: new Date(2019, 2, 11),
    xpTime: "",
    logo: "icons/jquery.svg",
    level: 7,
  },
  {
    name: "material-ui",
    category: "libraries",
    start: new Date(2020, 5, 11),
    xpTime: "",
    logo: "icons/material-ui.svg",
    level: 4,
  },
  {
    name: "nebular",
    category: "libraries",
    start: new Date(2020, 10, 11),
    xpTime: "",
    logo: "icons/nebular.png",
    level: 9,
  },
  {
    name: "nodemailer",
    category: "libraries",
    start: new Date(2020, 5, 11),
    xpTime: "",
    logo: "icons/nodemailer.png",
    level: 8,
  },
  {
    name: "nodemon",
    category: "libraries",
    start: new Date(2020, 1, 11),
    xpTime: "",
    logo: "icons/nodemon.png",
    level: 9,
  },
  {
    name: "npm",
    category: "tools",
    start: new Date(2019, 1, 14),
    xpTime: "",
    logo: "icons/npm.svg",
    level: 10,
  },
  {
    name: "numpy",
    category: "libraries",
    start: new Date(2020, 2, 14),
    xpTime: "",
    logo: "icons/numpy.svg",
    level: 5,
  },
  {
    name: "Oh my ZSH",
    category: "tools",
    start: new Date(2020, 3, 12),
    xpTime: "",
    logo: "icons/zsh.jpg",
    level: 8,
  },
  {
    name: "pandas",
    category: "libraries",
    start: new Date(2020, 2, 13),
    xpTime: "",
    logo: "icons/pandas.svg",
    level: 5,
  },
  {
    name: "pixlr",
    category: "tools",
    start: new Date(2019, 10, 11),
    xpTime: "",
    logo: "icons/pixlr.svg",
    level: 8,
  },
  {
    name: "Postgres",
    category: "databases",
    start: new Date(2020, 2, 21),
    xpTime: "",
    logo: "icons/postgres.svg",
    level: 6,
  },
  {
    name: "puppeteer",
    category: "libraries",
    start: new Date(2021, 1, 11),
    xpTime: "",
    logo: "icons/puppeteer.svg",
    level: 6,
  },
  {
    name: "pygame",
    category: "libraries",
    start: new Date(2019, 8, 1),
    xpTime: "",
    logo: "icons/pygame.png",
    level: 6,
  },
  {
    name: "redux",
    category: "libraries",
    start: new Date(2020, 11, 21),
    xpTime: "",
    logo: "icons/redux.svg",
    level: 7,
  },
  {
    name: "redis",
    category: "databases",
    start: new Date(2020, 8, 29),
    xpTime: "",
    logo: "icons/redis.svg",
    level: 7,
  },
  {
    name: "Sass",
    category: "frameworks",
    start: new Date(2020, 7, 9),
    xpTime: "",
    logo: "icons/sass.png",
    level: 8,
  },
  {
    name: "Styled Components",
    category: "libraries",
    start: new Date(2020, 4, 19),
    xpTime: "",
    logo: "icons/styled-components.svg",
    level: 10,
  },
  {
    name: "SqLite",
    category: "databases",
    start: new Date(2020, 1, 11),
    xpTime: "",
    logo: "icons/sqlite.png",
    level: 5,
  },
  {
    name: "stackoverflow",
    category: "platforms",
    start: new Date(2019, 12, 11),
    xpTime: "",
    logo: "icons/stackoverflow.svg",
    level: 10,
  },
  {
    name: "tailwind",
    category: "libraries",
    start: new Date(2021, 0, 11),
    xpTime: "",
    logo: "icons/tailwind.svg",
    level: 4,
  },
  {
    name: "three",
    category: "libraries",
    start: new Date(2021, 3, 2),
    xpTime: "",
    logo: "icons/three.png",
    level: 4,
  },

  {
    name: "vercel",
    category: "platforms",
    start: new Date(2020, 7, 11),
    xpTime: "",
    logo: "icons/vercel.svg",
    level: 4,
  },
  {
    name: "Vim",
    category: "tools",
    start: new Date(2020, 1, 6),
    xpTime: "",
    logo: "icons/vim.svg",
    level: 5,
  },
  {
    name: "vue",
    category: "frameworks",
    start: new Date(2021, 3, 1),
    xpTime: "",
    logo: "icons/vue.svg",
    level: 9,
  },
  {
    name: "Wamp",
    category: "tools",
    start: new Date(2019, 4, 11),
    xpTime: "",
    logo: "icons/wamp.svg",
    level: 5,
  },
  {
    name: "WebAssembly",
    category: "tools",
    start: new Date(2021, 4, 1),
    xpTime: "",
    logo: "icons/web-assembly.svg",
    level: 2,
  },
  {
    name: "webpack",
    category: "libraries",
    start: new Date(2020, 4, 11),
    xpTime: "",
    logo: "icons/webpack.svg",
    level: 4,
  },
  {
    name: "yarn",
    category: "tools",
    start: new Date(2019, 11, 2),
    xpTime: "",
    logo: "icons/yarn.svg",
    level: 8,
  },
  {
    name: "next",
    category: "frameworks",
    start: new Date(2021, 0, 11),
    xpTime: "",
    logo: "icons/next.svg",
    level: 7,
  },
].map((item) => {
  return { ...item, xpTime: getXPTime(item.start, item.name) } as Skill;
});

export const skillsList: Object = skillsListFactory(skillsData);

export const techCategories: string[] = skillsData.reduce((acc, tech) => {
  if (!acc.find((category) => category === tech.category)) {
    acc.push(tech.category);
  }
  return acc;
}, []);
