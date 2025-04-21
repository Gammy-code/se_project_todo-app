class Popup {
  constructor(popupSelector) {
    this._popupElement = document.querySelector(popupSelector);
    this._popupCloseBtn = this._popupElement.querySelector(".popup__close");
    this._addTodoButton = document.querySelector(".button_action_add");
    this._handleEscapeClose = this._handleEscapeClose.bind(this);
  }
  open() {
    this._popupElement.classList.add("popup_visible");
    document.addEventListener("keyup", this._handleEscapeClose);
  }

  close() {
    this._popupElement.classList.remove("popup_visible");
    document.removeEventListener("keyup", this._handleEscapeClose);
  }

  setEventListeners() {
    this._popupCloseBtn.addEventListener("click", () => {
      this.close();
    });

    this._popupElement.addEventListener("mousedown", (evt) => {
      if (evt.target === this._popupElement) {
        this.close();
      }
    });

    this._addTodoButton.addEventListener("click", () => {
      addPopup.open();
    });
  }

  _handleEscapeClose = (evt) => {
    if (evt.key === "Escape") {
      this.close();
    }
  };
}
export default Popup;
