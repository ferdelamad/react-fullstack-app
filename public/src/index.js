function component() {
  let element = document.createElement("div");

  element.innerHTML = "Hello fernando";

  return element;
}

document.body.appendChild(component());