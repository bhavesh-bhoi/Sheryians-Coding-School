addEventListener("mousemove", (e) => {

    // setProperty - to update CSS variables
  document.body.style.setProperty("--x", e.clientX + "px");
  document.body.style.setProperty("--y", e.clientY + "px");
});
