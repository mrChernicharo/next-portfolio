import { getXPTime } from "../utils/date-helpers";

export interface Skill {
  name: string;
  category:
    | "languages"
    | "frameworks"
    | "backend"
    | "libraries"
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
    start: new Date(2019, 5, 23),
    xpTime: "",
    logo: "icons/javascript.svg",
    level: 5,
  },
  {
    name: "Typescript",
    category: "languages",
    start: new Date(2020, 3, 12),
    xpTime: "",
    logo: "icons/typescript.svg",
    level: 5,
  },
  {
    name: "Html",
    category: "languages",
    start: new Date(2018, 10, 2),
    xpTime: "",
    logo: "icons/html5.svg",
    level: 5,
  },
  {
    name: "Css",
    category: "languages",
    start: new Date(2018, 10, 18),
    xpTime: "",
    logo: "icons/css.svg",
    level: 5,
  },
  {
    name: "Python",
    category: "languages",
    start: new Date(2019, 5, 11),
    xpTime: "",
    logo: "icons/python.svg",
    level: 3,
  },
  {
    name: "SQL",
    category: "backend",
    start: new Date(2019, 5, 11),
    xpTime: "",
    logo: "icons/database.svg",
    level: 3,
  },
  {
    name: "Angular",
    category: "frameworks",
    start: new Date(2020, 4, 1),
    xpTime: "",
    logo: "icons/angular.ico",
    level: 4,
  },
  {
    name: "RxJS",
    category: "libraries",
    start: new Date(2020, 4, 21),
    xpTime: "",
    logo: "icons/rxjs.svg",
    level: 5,
  },
  {
    name: "React",
    category: "frameworks",
    start: new Date(2019, 3, 1),
    xpTime: "",
    logo: "icons/react.svg",
    level: 5,
  },
  {
    name: "React Native",
    category: "frameworks",
    start: new Date(2019, 3, 11),
    xpTime: "",
    logo: "icons/react-native.svg",
    level: 5,
  },
  {
    name: "Php",
    category: "languages",
    start: new Date(2018, 10, 21),
    xpTime: "",
    logo: "icons/php.svg",
    level: 5,
  },
  {
    name: "Apple",
    category: "platforms",
    start: new Date(2019, 5, 11),
    xpTime: "",
    logo: "icons/apple.svg",
    level: 5,
  },
  {
    name: "Visual Studio Code",
    category: "tools",
    start: new Date(2019, 5, 11),
    xpTime: "",
    logo: "icons/vscode.png",
    level: 5,
  },
  {
    name: "Node",
    category: "backend",
    start: new Date(2019, 5, 11),
    xpTime: "",
    logo: "icons/node.svg",
    level: 5,
  },
  {
    name: "Postgres",
    category: "backend",
    start: new Date(2019, 5, 11),
    xpTime: "",
    logo: "icons/postgres.svg",
    level: 5,
  },
  {
    name: "Docker",
    category: "backend",
    start: new Date(2019, 5, 11),
    xpTime: "",
    logo: "icons/docker.svg",
    level: 5,
  },
  {
    name: "MySQL",
    category: "backend",
    start: new Date(2019, 5, 11),
    xpTime: "",
    logo: "icons/mysql.svg",
    level: 5,
  },
  {
    name: "MongoDB",
    category: "backend",
    start: new Date(2019, 5, 11),
    xpTime: "",
    logo: "icons/mongodb.svg",
    level: 5,
  },

  {
    name: "SqLite",
    category: "backend",
    start: new Date(2019, 5, 11),
    xpTime: "",
    logo: "icons/sqlite.png",
    level: 5,
  },
  {
    name: "Oh my ZSH",
    category: "tools",
    start: new Date(2019, 5, 11),
    xpTime: "",
    logo: "icons/zsh.jpg",
    level: 5,
  },
  {
    name: "Bash",
    category: "tools",
    start: new Date(2019, 5, 11),
    xpTime: "",
    logo: "icons/bash.png",
    level: 5,
  },
  {
    name: "Vim",
    category: "tools",
    start: new Date(2019, 5, 11),
    xpTime: "",
    logo: "icons/vim.svg",
    level: 5,
  },
  {
    name: "ngRx",
    category: "libraries",
    start: new Date(2019, 5, 11),
    xpTime: "",
    logo: "icons/ngRx.svg",
    level: 5,
  },
  {
    name: "GitHub",
    category: "platforms",
    start: new Date(2019, 5, 11),
    xpTime: "",
    logo: "icons/github.svg",
    level: 5,
  },
  {
    name: "GitLab",
    category: "platforms",
    start: new Date(2019, 5, 11),
    xpTime: "",
    logo: "icons/gitlab-tile.svg",
    level: 5,
  },
  {
    name: "firebase",
    category: "platforms",
    start: new Date(2019, 5, 11),
    xpTime: "",
    logo: "icons/firebase.png",
    level: 5,
  },
  {
    name: "Material Design",
    category: "libraries",
    start: new Date(2019, 5, 11),
    xpTime: "",
    logo: "icons/material.png",
    level: 5,
  },
  {
    name: "Bootstrap",
    category: "libraries",
    start: new Date(2019, 5, 11),
    xpTime: "",
    logo: "icons/bootstrap.svg",
    level: 5,
  },
  {
    name: "Sass",
    category: "frameworks",
    start: new Date(2019, 5, 11),
    xpTime: "",
    logo: "icons/sass.png",
    level: 5,
  },
  {
    name: "Mobirise",
    category: "tools",
    start: new Date(2019, 5, 11),
    xpTime: "",
    logo: "icons/mobirise.png",
    level: 5,
  },
  {
    name: "Figma",
    category: "tools",
    start: new Date(2019, 5, 11),
    xpTime: "",
    logo: "icons/figma.svg",
    level: 5,
  },
  {
    name: "DBeaver",
    category: "backend",
    start: new Date(2019, 5, 11),
    xpTime: "",
    logo: "icons/dbeaver.svg",
    level: 5,
  },
  {
    name: "Insomnia",
    category: "tools",
    start: new Date(2019, 5, 11),
    xpTime: "",
    logo: "icons/insomnia.svg",
    level: 5,
  },
  {
    name: "Wamp",
    category: "tools",
    start: new Date(2019, 5, 11),
    xpTime: "",
    logo: "icons/wamp.svg",
    level: 5,
  },
  {
    name: "Mamp",
    category: "tools",
    start: new Date(2019, 5, 11),
    xpTime: "",
    logo: "icons/mamp.png",
    level: 5,
  },
  {
    name: "Notion",
    category: "tools",
    start: new Date(2019, 5, 11),
    xpTime: "",
    logo: "icons/notion.svg",
    level: 5,
  },
].map((item) => {
  return { ...item, xpTime: getXPTime(item.start) } as Skill;
});

export const skillsList: Object = skillsListFactory(skillsData);

export const techCategories: string[] = skillsData.reduce((acc, tech) => {
  if (!acc.find((category) => category === tech.category)) {
    acc.push(tech.category);
  }
  return acc;
}, []);
