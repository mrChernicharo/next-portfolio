import { Skill, skillsList } from "./skills";

export interface Project {
  title: string;
  description: string;
  github: string;
  techs: Skill[];
  url?: string;
  gif?: string;
  video?: string;
}

export const appGifs = {
  mosquitoKiller: "gifs/mosquito_killer_ok.gif",
  phpTodoApp: "gifs/app-lista-tarefas.gif",
  carRush: "gifs/car_rush_ok.gif",
  goMarketplace: "gifs/go-marketplace.gif",
  iRecipe: "gifs/i-recipe.gif",
  angularCrud: "gifs/angular_crud.gif",
  ecoleta: "gifs/ecoleta.gif",
};

const appVideos = {
  pizzajoint: "videos/pizza.mp4",
  beatMaker: "videos/beat-maker.mp4",
};

console.log(skillsList);

export const appProjects: Project[] = [
  {
    title: "Real Beat Maker",
    description: "Beat Maker app",
    github: "https://github.com/mrChernicharo/next-beat-maker",
    url: "https://real-beat-maker.vercel.app/",
    gif: null,
    video: appVideos.beatMaker,
    techs: [skillsList["Typescript"], skillsList["React"]],
  },
  {
    title: "Pizza Joint",
    description:
      "An Animations driven website built with React and the amazing Framer Motion",
    github: "https://github.com/mrChernicharo/framer-motion-pizzajoint",
    url: null,
    gif: null,
    video: appVideos.pizzajoint,
    techs: [skillsList["Javascript"], skillsList["React"]],
  },
  {
    title: "Angular CRUD",
    description:
      "Angular CRUD app powered by Angular Material and JSON.Server. Load, create, update and delete products.",
    github: "https://github.com/mrChernicharo/angular-crud",
    url: null,
    gif: appGifs.angularCrud,
    video: null,
    techs: [skillsList["Typescript"], skillsList["Angular"]],
  },
  {
    title: "GoMarketplace",
    description:
      "Ecommerce-like Mobile App. Written in Typescript, using React Native and Android Studio. Just add products to the Cart and let's go shopping!",
    github: "https://github.com/mrChernicharo/goMarketplace",
    url: null,
    gif: appGifs.goMarketplace,
    video: null,
    techs: [skillsList["React Native"]],
  },
  {
    title: "I-Recipe",
    description:
      "Complete App covering most of Angular's features: Authenticate, create recipes, store and fetch them from the backend. Using different techniques like Services/Subjects and also NgRx Reducers, Actions and Effects. Strorage and Authentication provided by Firebase APIs integration.",
    github: "https://github.com/mrChernicharo/iRecipe",
    url: null,
    gif: appGifs.iRecipe,
    video: null,
    techs: [skillsList["Typescript"], skillsList["Angular"]],
  },
  {
    title: "Ecoleta",
    description:
      "React Native Mobile App. Written in Typescript, using Expo. Geolocation and zipcode services provided by API integration!",
    github: "https://github.com/mrChernicharo/ecoleta",
    url: null,
    gif: appGifs.ecoleta,
    video: null,
    techs: [skillsList["React Native"]],
  },
  {
    title: "Mosquito Killer",
    description:
      "Python3/pygame project made for the Introduction to Software Development class in the Software Analysis and Developmet graduation course at UNIGRANRIO University",
    github: "https://www.github.com/mrChernicharo/pygame-pca",
    url: null,
    gif: appGifs.mosquitoKiller,
    video: null,
    techs: [skillsList["Python"]],
  },
  {
    title: "Car Rush",
    description:
      "My first game! Build with Python3 and pygame! Try to stay alive by dodging furious cars that really don't seem to care if you're in their way!",
    github: "https://www.github.com/mrChernicharo/car-rush",
    url: null,
    gif: appGifs.carRush,
    video: null,
    techs: [skillsList["Python"]],
  },
  {
    title: "App Lista Tarefas",
    description:
      "Todo App written in Php. Create, update, delete and check your tasks! Just type your chores in and never again you'll miss an appointment. Get organized! Make a list!",
    github: "https://www.github.com/mrChernicharo/app-lista-tarefas",
    url: null,
    gif: appGifs.phpTodoApp,
    video: null,
    techs: [skillsList["Php"]],
  },
  // { title: '', description:'', gif: goMarketplace },
];
