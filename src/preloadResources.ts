const resources = [""];

function preloadImage(src: string) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(src);
    img.onerror = () => reject(src);
    img.src = src;
  });
}

function preloadVideo(src: string) {
  return new Promise((resolve, reject) => {
    const video = document.createElement("video");
    video.onloadeddata = () => resolve(src);
    video.onerror = () => reject(src);
    video.src = src;
    video.load();
  });
}

export async function preloadResources() {
  for (const resource of resources) {
    try {
      if (resource.endsWith(".png")) {
        await preloadImage("assets/" + resource);
      } else if (resource.endsWith(".mp4")) {
        await preloadVideo("assets/" + resource);
      }
    } catch (error) {
      console.error(`Failed to load: ${error}`);
    }
  }
}
