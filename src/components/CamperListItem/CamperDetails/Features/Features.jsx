import { nanoid } from "nanoid";
import style from "./Features.module.css";
import icons from "../../../../images/sprite.svg";

export const Features = ({ count, camper }) => {
  return (
    <ul>
      {!count ? (
        <div className={style.wrapper}>
          <li key={nanoid()} className={style.item}>
            <svg className={style.svg} width="20" height="20">
              <use href={`${icons}#icon-Users`}></use>
            </svg>
            <p className={style.featureName}>{camper.adults} adults</p>
          </li>
          <li key={nanoid()} className={style.item}>
            <svg className={style.svgGears} width="20" height="20">
              <use href={`${icons}#icon-gears`}></use>
            </svg>
            <p className={style.featureName}>{camper.transmission}</p>
          </li>
          <li key={nanoid()} className={style.item}>
            <svg className={style.svg} width="20" height="20">
              <use href={`${icons}#icon-fuel`}></use>
            </svg>
            <p className={style.featureName}>{camper.engine}</p>
          </li>
          <li key={nanoid()} className={style.item}>
            <svg className={style.svgForkKnife} width="20" height="20">
              <use href={`${icons}#icon-forkKnife`}></use>
            </svg>
            <p className={style.featureName}>Kitchen</p>
          </li>
          <li key={nanoid()} className={style.item}>
            <svg className={style.svgBad} width="20" height="20">
              <use href={`${icons}#icon-bad`}></use>
            </svg>
            <p className={style.featureName}>{camper.details.beds} beds</p>
          </li>
          <li key={nanoid()} className={style.item}>
            <svg className={style.svg} width="20" height="20">
              <use href={`${icons}#icon-AC`}></use>
            </svg>
            <p className={style.featureName}>AC</p>
          </li>{" "}
        </div>
      ) : (
        <div className={style.wrapperModal}>
          <li key={nanoid()} className={style.item}>
            <svg className={style.svg} width="20" height="20">
              <use href={`${icons}#icon-Users`}></use>
            </svg>
            <p className={style.featureName}>{camper.adults} adults</p>
          </li>
          <li key={nanoid()} className={style.item}>
            <svg className={style.svgGears} width="20" height="20">
              <use href={`${icons}#icon-gears`}></use>
            </svg>
            <p className={style.featureName}>{camper.transmission}</p>
          </li>
          <li key={nanoid()} className={style.item}>
            <svg className={style.svg} width="20" height="20">
              <use href={`${icons}#icon-AC`}></use>
            </svg>
            <p className={style.featureName}>AC</p>
          </li>
          <li key={nanoid()} className={style.item}>
            <svg className={style.svg} width="20" height="20">
              <use href={`${icons}#icon-fuel`}></use>
            </svg>
            <p className={style.featureName}>{camper.engine}</p>
          </li>
          <li key={nanoid()} className={style.item}>
            <svg className={style.svgForkKnife} width="20" height="20">
              <use href={`${icons}#icon-forkKnife`}></use>
            </svg>
            <p className={style.featureName}>Kitchen</p>
          </li>
          <li key={nanoid()} className={style.item}>
            <svg className={style.svgBad} width="20" height="20">
              <use href={`${icons}#icon-bad`}></use>
            </svg>
            <p className={style.featureName}>{camper.details.beds} beds</p>
          </li>
          <li key={nanoid()} className={style.item}>
            <svg className={style.svgBad} width="20" height="20">
              <use href={`${icons}#icon-conditioner`}></use>
            </svg>
            <p className={style.featureName}>
              {camper.details.airConditioner} air conditioner
            </p>
          </li>
          <li key={nanoid()} className={style.item}>
            <svg className={style.svgBad} width="20" height="20">
              <use href={`${icons}#icon-cd`}></use>
            </svg>
            <p className={style.featureName}>{camper.details.CD} CD</p>
          </li>
          <li key={nanoid()} className={style.item}>
            <svg className={style.svgBad} width="20" height="20">
              <use href={`${icons}#icon-radio`}></use>
            </svg>
            <p className={style.featureName}>{camper.details.radio} Radio</p>
          </li>
          <li key={nanoid()} className={style.item}>
            <svg className={style.svgBad} width="20" height="20">
              <use href={`${icons}#icon-hob`}></use>
            </svg>
            <p className={style.featureName}>{camper.details.hob} hob</p>
          </li>
        </div>
      )}
    </ul>
  );
};
