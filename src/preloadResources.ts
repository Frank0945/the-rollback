const resources = [
  "office.png",
  "badge1.png",
  "badge2.png",
  "bgm.mp3",
  "typing.mp3",
  "mouseClick.mp3",
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

const preloadResources = async () => {
  for (const resource of resources) {
    try {
      if (resource.endsWith(".png")) {
        await preloadImage("../assets/images/" + resource);
      } else if (resource.endsWith(".mp4")) {
        await preloadVideo("../assets/videos/" + resource);
      } else if (resource.endsWith(".mp3")) {
        await preloadAudio("../assets/sounds/" + resource);
      }
    } catch (error) {
      console.error(`Failed to load: ${error}`);
    }
  }
};

export default preloadResources;
