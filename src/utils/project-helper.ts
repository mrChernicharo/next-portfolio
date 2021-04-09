import { Project } from "../data/projects";

interface Dimentions {
  borderRadius: number;
  width: number;
  height: number;
  margin: number;
}

export const getCardSplashSize = (project: Project) => {
  let cardSize: Dimentions = {
    width: 0,
    height: 0,
    borderRadius: 0,
    margin: 0,
  };
  switch (project.size) {
    case 1:
      cardSize.height = 250;
      cardSize.width = 120;
      cardSize.borderRadius = 14;
      // cardSize.margin = 100;
      break;
    case 2:
      cardSize.height = 230;
      cardSize.width = 260;
      cardSize.borderRadius = 6;
      // cardSize.margin = 30;
      break;
    case 3:
      cardSize.height = 200;
      cardSize.width = 300;
      cardSize.borderRadius = 4;
      // cardSize.margin = 10;
      break;
    default:
      break;
  }
  return cardSize;
};

export const getModalImgSize = (project: Project) => {
  let modalSize: Dimentions = {
    width: 0,
    height: 0,
    borderRadius: 0,
    margin: 0,
  };
  switch (project.size) {
    case 1:
      modalSize.height = 350;
      modalSize.width = 180;
      modalSize.borderRadius = 14;
      // modalSize.margin = 100;
      break;
    case 2:
      modalSize.height = 300;
      modalSize.width = 360;
      modalSize.borderRadius = 6;
      // modalSize.margin = 30;
      break;
    case 3:
      modalSize.height = 300;
      modalSize.width = 440;
      modalSize.borderRadius = 4;
      // modalSize.margin = 10;
      break;
    default:
      break;
  }
  return modalSize;
};
