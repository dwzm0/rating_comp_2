const buttons = document.querySelectorAll(".btn-secondary");
const submitButton = document.querySelector(".btn-primary");

let choice = "";

buttons.forEach((button) =>
  button.addEventListener("click", () => {
    choice = button.textContent;
  })
);

function changer() {
  if (choice != "") {
    const feedback = document.querySelector(".feedback");
    feedback.textContent = "";
    const newImg = document.createElement("img");
    newImg.src = "images/illustration-thank-you.svg";
    newImg.classList.add("feedback__state-image-change");

    const selection = document.createElement("p");
    selection.textContent = "You selected " + `${choice}` + " out of 5";
    selection.classList.add("feedback__state-selection");

    const head = document.createElement("h1");
    head.textContent = "Thank you!";
    head.classList.add("feedback__state-header");

    const message = document.createElement("p");
    message.textContent =
      "Thank you! We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!";
    message.classList.add("feedback__state-text");
    feedback.append(newImg, selection, head, message);
    feedback.style.cssText += "justify-items: center";
    return feedback;
  }
}

submitButton.addEventListener("click", changer);
