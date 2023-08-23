import { proxy } from "valtio";

const state = proxy({
  intro: true,
  color: "#EFBD48",
  isLogoTextured: true,
  isFullTextured: false,
  logoDecal: "./threejs.png",
  fullDecal: "./threejs.png",
});

export default state;
