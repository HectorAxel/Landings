window.addEventListener(
  "load",
  () => {
    document.querySelector(".loader").classList.add("invisible");
    setTimeout(() => {
      document.querySelector(".loader").remove();
    }, 3000);
  },
  false
);
