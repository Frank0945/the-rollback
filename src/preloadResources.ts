import badge1 from "./assets/images/badge1.png";
import badge2 from "./assets/images/badge2.png";
import browser from "./assets/images/browser.png";
import cookie from "./assets/images/cookie.png";
import cover from "./assets/images/cover.png";
import note from "./assets/images/note.png";
import office from "./assets/images/office.png";
import office2 from "./assets/images/office2.png";
import office3 from "./assets/images/office3.png";
import pdf from "./assets/images/pdf.png";
import remote from "./assets/images/remote.png";
import robotTurtle from "./assets/images/robotTurtle.png";
import turtle from "./assets/images/turtle.png";
import bgm from "./assets/sounds/bgm.mp3";
import mouseClick from "./assets/sounds/mouseClick.mp3";
import typing from "./assets/sounds/typing.mp3";
import osu from "./assets/videos/osu.mp4";

const resources = [
  badge1,
  badge2,
  office,
  office2,
  office3,
  bgm,
  mouseClick,
  typing,
  browser,
  turtle,
  cover,
  cookie,
  osu,
  remote,
  robotTurtle,
  note,
  pdf,
];

const preloadImage = (src: string) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(src);
    img.onerror = () => reject(src);
    img.src = src;
  });
};

const preloadVideo = (src: string) => {
  return new Promise((resolve, reject) => {
    const video = document.createElement("video");
    video.onloadeddata = () => resolve(src);
    video.onerror = () => reject(src);
    video.src = src;
    video.load();
  });
};

const preloadAudio = (src: string) => {
  return new Promise((resolve, reject) => {
    const audio = new Audio();
    audio.oncanplaythrough = () => resolve(src);
    audio.onerror = () => reject(src);
    audio.src = src;
    audio.load();
  });
};

const preloadResources = async (
  setLoadStatus: React.Dispatch<React.SetStateAction<string>>,
) => {
  let loaded = 0;
  setLoadStatus(`${loaded}/${resources.length}`);

  const loadedFn = () => {
    loaded++;
    setLoadStatus(`${loaded}/${resources.length}`);
  };

  for (const resource of resources) {
    try {
      if (resource.endsWith(".png")) {
        await preloadImage(resource).then(() => loadedFn());
      } else if (resource.endsWith(".mp4")) {
        await preloadVideo(resource).then(() => loadedFn());
      } else if (resource.endsWith(".mp3")) {
        await preloadAudio(resource).then(() => loadedFn());
      }
    } catch (error) {
      console.error(`Failed to load: ${error}`);
    }
  }
};

export default preloadResources;

export {
  badge1,
  badge2,
  office,
  office2,
  office3,
  bgm,
  mouseClick,
  typing,
  browser,
  turtle,
  cover,
  osu,
  cookie,
  remote,
  robotTurtle,
  note,
  pdf,
};
