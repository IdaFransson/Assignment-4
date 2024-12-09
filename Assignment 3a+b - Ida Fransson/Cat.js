let cat = {
  alive: true,
  name: "Gustav",
};

function handleButtonClick() {
  alert(" The cats name is " + cat.name);
}

const catbutton = document.getElementById("catbutton");
catbutton.addEventListener("click", handleButtonClick);
