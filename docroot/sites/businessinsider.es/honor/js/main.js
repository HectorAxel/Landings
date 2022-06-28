window.addEventListener(
  "load",
  () => {
    setTimeout(() => {
      document.querySelector(".loader").classList.add("invisible");
    }, 1000);
    setTimeout(() => {
      document.querySelector(".loader").remove();
    }, 2000);
  },
  false
);
