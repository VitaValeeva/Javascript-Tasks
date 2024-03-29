const openButton = document.querySelector("#openOverlay");
const body = document.body;
const successModal = createModal("The message has been sent, thank you!");

openButton.addEventListener("click", e => {
  body.appendChild(successModal);
});

function createModal(content) {
  const overlayElement = document.createElement("div");
  overlayElement.classList.add("overlay");

  overlayElement.addEventListener("click", e => {
    // метод contains возвращает true или false в зав-ти от того, есть класс на элементе или нет
    if (!e.target.classList.contains("content")) {
      closeElement.click();
    }
    // if (e.target == overlayElement) {
    //   closeElement.click();
    // }
  });

  const containerElement = document.createElement("div");
  containerElement.classList.add("modal-container");

  const contentElement = document.createElement("div");
  contentElement.classList.add("content");

  contentElement.innerHTML = content;

  const closeElement = document.createElement("a");
  closeElement.classList.add("close");
  closeElement.textContent = "x";
  closeElement.href = "#";

  closeElement.addEventListener("click", e => {
    e.preventDefault();
    body.removeChild(overlayElement);
  });
  
  overlayElement.appendChild(containerElement);
  containerElement.appendChild(closeElement);
  containerElement.appendChild(contentElement);

  return overlayElement;
}