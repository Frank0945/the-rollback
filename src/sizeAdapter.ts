const changeSize = () => {
  const content = document.getElementById("aspectRatio");
  if (content) {
    const scale = Math.min(window.innerWidth / 1920, window.innerHeight / 1080);
    content.style.zoom = `${scale}`;
  }
};

const sizeAdapter = () => {
  changeSize();
  window.addEventListener("resize", changeSize);
};

export default sizeAdapter;
