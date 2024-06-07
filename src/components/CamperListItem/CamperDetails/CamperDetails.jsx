/* eslint-disable react/prop-types */
import style from "./CamperDetails.module.css";
import icons from "../../../images/sprite.svg";
import { Features } from "./Features/Features";

export const CamperDetails = ({ camper }) => {
  return (
    <div className={style.details}>
      <div>
        <h2>{camper.name}</h2>
        <h2>€{camper.price}</h2>
        <svg className={style.svg} width="16" height="16">
          <use href={`${icons}#icon-heart`}></use>
        </svg>
      </div>
      <div>
        <svg className={style.svg} width="16" height="16">
          <use href={`${icons}#icon-RatingStar`}></use>
        </svg>
        <p>
          {camper.reviews && camper.reviews.length > 0 ? (
            <>
              {camper.reviews.reduce((acc, review) => {
                return acc + review.reviewer_rating;
              }, 0) / camper.reviews.length}
              ({camper.reviews.length} Reviews)
            </>
          ) : (
            "No Reviews"
          )}
        </p>
        <svg className={style.svg} width="16" height="16">
          <use href={`${icons}#icon-map-pin`}></use>
        </svg>
        <span>{camper.location}</span>
        <p className={style.description}>{camper.description}</p>
        <Features camper={camper} />
      </div>
    </div>
  );
};
