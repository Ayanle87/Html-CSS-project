function displayMenu(e) {
  let list = document.querySelector(".navmenu");
  console.log("b");

  if (list.style.display === "none") {
    console.log("a");
    list.style.display = "block";
  } else {
    list.style.display = "none";
  }
}
