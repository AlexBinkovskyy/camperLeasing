import style from "./FilterForm.module.css";
import icons from "../../images/sprite.svg";

export const FilterForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const form = Array.from(event.target.form.elements);

    const location = form[0].value;

    const checkBoxValue = [];
    form.map((checkBox) => {
      if (checkBox.name === "equipment" && checkBox.checked) {
        checkBoxValue.push(checkBox.value);
      }
    });

    const radioBoxValue = form.find(
      (radio) =>
        radio.type === "radio" && radio.name === "form" && radio.checked
    ).value;

    console.log(location);
    console.log(checkBoxValue);
    console.log(radioBoxValue);

  };

  const handleChangeCheckBox = (event) => {
    event.currentTarget.classList.toggle(style.checked);
  };

  const handleChangeRadio = (event) => {
    const radioButtons = document.querySelectorAll(
      `input[type="radio"][name="${event.target.name}"]`
    );
    radioButtons.forEach((radio) => {
      radio.classList.toggle(style.checked);
    });
  };

  return (
    <div className={style.wrapper}>
      <form>
        <div className={style.formGroup}>
          <label htmlFor="locationInput" className={style.inputLabel}>
            Location
          </label>
          <input
            type="text"
            name="location"
            id="locationInput"
            className={style.locatonInput}
            placeholder="Kyiv, Ukraine"
          />
          <svg className={style.iconPointer} width="20" height="22">
            <use href={`${icons}#icon-map-pin`}></use>
          </svg>
        </div>

        <p className={style.filters}>Filters</p>
        <h3 className={style.headerBlock}>Vehicle equipment</h3>
        <div className={style.formGroup}>
          <ul className={style.checkBoxGroup}>
            <li key="checkBox1" className={style.checkBoxItemWrapper}>
              <label htmlFor="checkBox1" className={style.checkBoxLabel}>
                <div
                  className={style.checkBoxWrapper}
                  onClick={handleChangeCheckBox}
                >
                  <svg className={style.icon} width="32" height="32">
                    <use href={`${icons}#icon-AC`}></use>
                  </svg>
                  AC
                </div>
              </label>
              <input
                type="checkbox"
                name="equipment"
                value="airConditioner"
                id="checkBox1"
                className={style.checkBox}
              />
            </li>
            <li key="checkBox2" className={style.checkBoxItemWrapper}>
              <label htmlFor="checkBox2" className={style.checkBoxLabel}>
                <div
                  className={style.checkBoxWrapper}
                  onClick={handleChangeCheckBox}
                >
                  <svg className={style.icon} width="32" height="32">
                    <use href={`${icons}#icon-forkKnife`}></use>
                  </svg>
                  Kitchen
                </div>
              </label>
              <input
                type="checkbox"
                name="equipment"
                value="kitchen"
                id="checkBox2"
                className={style.checkBox}
              />
            </li>
            <li key="checkBox3" className={style.checkBoxItemWrapper}>
              <label htmlFor="checkBox3" className={style.checkBoxLabel}>
                <div
                  className={style.checkBoxWrapper}
                  onClick={handleChangeCheckBox}
                >
                  <svg className={style.icon} width="32" height="32">
                    <use href={`${icons}#icon-tv`}></use>
                  </svg>
                  TV
                </div>
              </label>
              <input
                type="checkbox"
                name="equipment"
                value="TV"
                id="checkBox3"
                className={style.checkBox}
              />
            </li>
            <li key="checkBox4" className={style.checkBoxItemWrapper}>
              <label htmlFor="checkBox4" className={style.checkBoxLabel}>
                <div
                  className={style.checkBoxWrapper}
                  onClick={handleChangeCheckBox}
                >
                  <svg className={style.icon} width="32" height="32">
                    <use href={`${icons}#icon-cd`}></use>
                  </svg>
                  CD
                </div>
              </label>
              <input
                type="checkbox"
                name="equipment"
                value="CD"
                id="checkBox4"
                className={style.checkBox}
              />
            </li>
            <li key="checkBox5" className={style.checkBoxItemWrapper}>
              <label htmlFor="checkBox5" className={style.checkBoxLabel}>
                <div
                  className={style.checkBoxWrapper}
                  onClick={handleChangeCheckBox}
                >
                  <svg className={style.icon} width="32" height="32">
                    <use href={`${icons}#icon-radio`}></use>
                  </svg>
                  Radio
                </div>
              </label>
              <input
                type="checkbox"
                name="equipment"
                value="radio"
                id="checkBox5"
                className={style.checkBox}
              />
            </li>
            <li key="checkBox6" className={style.checkBoxItemWrapper}>
              <label htmlFor="checkBox6" className={style.checkBoxLabel}>
                <div
                  className={style.checkBoxWrapper}
                  onClick={handleChangeCheckBox}
                >
                  <svg className={style.icon} width="32" height="32">
                    <use href={`${icons}#icon-shower`}></use>
                  </svg>
                  Shower
                </div>
              </label>
              <input
                type="checkbox"
                name="equipment"
                value="shower"
                id="checkBox6"
                className={style.checkBox}
              />
            </li>
            <li key="checkBox7" className={style.checkBoxItemWrapper}>
              <label htmlFor="checkBox7" className={style.checkBoxLabel}>
                <div
                  className={style.checkBoxWrapper}
                  onClick={handleChangeCheckBox}
                >
                  <svg className={style.icon} width="32" height="32">
                    <use href={`${icons}#icon-toilet`}></use>
                  </svg>
                  Toilet
                </div>
              </label>
              <input
                type="checkbox"
                name="equipment"
                value="toilet"
                id="checkBox7"
                className={style.checkBox}
              />
            </li>
            <li key="checkBox8" className={style.checkBoxItemWrapper}>
              <label htmlFor="checkBox8" className={style.checkBoxLabel}>
                <div
                  className={style.checkBoxWrapper}
                  onClick={handleChangeCheckBox}
                >
                  <svg className={style.icon} width="32" height="32">
                    <use href={`${icons}#icon-freezer`}></use>
                  </svg>
                  Freezer
                </div>
              </label>
              <input
                type="checkbox"
                name="equipment"
                value="freezer"
                id="checkBox8"
                className={style.checkBox}
              />
            </li>
            <li key="checkBox9" className={style.checkBoxItemWrapper}>
              <label htmlFor="checkBox9" className={style.checkBoxLabel}>
                <div
                  className={style.checkBoxWrapper}
                  onClick={handleChangeCheckBox}
                >
                  <svg className={style.icon} width="32" height="32">
                    <use href={`${icons}#icon-microwave`}></use>
                  </svg>
                  Microwave
                </div>
              </label>
              <input
                type="checkbox"
                name="equipment"
                value="microwave"
                id="checkBox9"
                className={style.checkBox}
              />
            </li>
          </ul>
        </div>

        <div className={style.formGroup}>
          <h3 className={style.headerBlock}>Vehicle type</h3>
          <ul className={style.checkBoxGroup}>
            <li key="radio1" className={style.checkBoxItemWrapper}>
              <label htmlFor="radio1" className={style.checkBoxLabel}>
                <div
                  className={style.checkBoxWrapper}
                  onClick={handleChangeRadio}
                >
                  <svg className={style.icon} width="32" height="32">
                    <use href={`${icons}#icon-camper-van`}></use>
                  </svg>
                  Van
                </div>
              </label>
              <input
                type="radio"
                name="form"
                value="panelTruck"
                id="radio1"
                className={style.checkBox}
              />
            </li>
            <li key="radio2" className={style.checkBoxItemWrapper}>
              <label htmlFor="radio2" className={style.checkBoxLabel}>
                <div
                  className={style.checkBoxWrapper}
                  onClick={handleChangeRadio}
                >
                  <svg className={style.icon} width="32" height="32">
                    <use href={`${icons}#icon-camper-alcove`}></use>
                  </svg>
                  Alcove
                </div>
              </label>
              <input
                type="radio"
                name="form"
                value="Alcove"
                id="radio2"
                className={style.checkBox}
              />
            </li>
            <li key="radio3" className={style.checkBoxItemWrapper}>
              <label htmlFor="radio3" className={style.checkBoxLabel}>
                <div
                  className={style.checkBoxWrapper}
                  onClick={handleChangeRadio}
                >
                  <svg className={style.icon} width="32" height="32">
                    <use href={`${icons}#icon-camper-fully-Int`}></use>
                  </svg>
                  Fully Integrated
                </div>
              </label>
              <input
                type="radio"
                name="form"
                value="fullyIntegrated"
                id="radio3"
                className={style.checkBox}
              />
            </li>
          </ul>
        </div>

        <button type="submit" onClick={handleSubmit} className={style.submitButton}>
          Search
        </button>
      </form>
    </div>
  );
};
