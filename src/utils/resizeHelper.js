export const adjustPageWidth = () => {
  const container = document.querySelector(".container");
  if (container) {
    const width = window.innerWidth;
    container.style.width = width > 1024 ? "80%" : "100%";
  }
};
