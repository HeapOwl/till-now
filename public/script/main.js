const sideLink = document.querySelectorAll(".a-wrapper");
sideLink.forEach((ele, ind) => {
  ele.addEventListener("click", activator);
});
function activator(e) {
  deactivator();
  this.classList.add("a-active");
}
function deactivator() {
  sideLink.forEach((ele, ind) => {
    ele.addEventListener("click", ele.classList.remove("a-active"));
  });
}
