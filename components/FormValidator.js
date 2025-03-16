class FormValidator {
  constructor(settings, formEl) {
    this._settings = settings;
    this._formEl = formEl;
    this._inputSelector = settings.inputSelector;
    this._errorClass = settings.errorClass;
    this._inputErrorClass = settings._inputErrorClass;
    this._inactiveButttonClass = settings._inactiveButttonClass;
  }

  enableValidation() {}
}
export default FormValidator;
