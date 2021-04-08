const hasWindow = typeof window !== "undefined";

const width = () => (hasWindow ? window.innerWidth : null);
let height = () => (hasWindow ? window.innerHeight : null);
export const getLocation = () => (hasWindow ? window.location.pathname : null);

export function getScreenSize() {
  return {
    width: width(),
    height: height(),
  };
}
