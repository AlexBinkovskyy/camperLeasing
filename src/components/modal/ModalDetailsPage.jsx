import { Link, Outlet, useLocation } from "react-router-dom";
import style from "./ModalDetailsPage.module.css";
import { useSelector } from "react-redux";
import { selectCamperById } from "../../Redux/selectors";
import icons from '../../images/sprite.svg'
import { Features } from "../CamperListItem/CamperDetails/Features/Features";

export const ModalDetailsPage = () => {
  const location = useLocation();
  const camperId = location.pathname.split("/");

  const camper = useSelector((state) =>
    selectCamperById(state, camperId[camperId.length - 1])
  );


  function closeModal() {
        
  }

  return (
    <div className={style.backdropWrapper} onClick={closeModal}>
      <div className={style.main}>
      <div className={style.details}>
      <div className={style.titleWrapper}>
        <h2 className={style.headerTwo}>{camper.name}</h2>
        <h2 className={style.headerPrice}>€{camper.price.toFixed(2)}</h2>
        <button
          id={`favorite${camper._id}`}
          type="button"
          data-camperid={camper._id}
          className={style.favoriteButton}
          // onClick={handleFavorite}
        >
          <svg className={style.svg} width="24" height="24">
            <use href={`${icons}#icon-heart`}></use>
          </svg>
        </button>
      </div>
      <div className={style.ratings}>
        <svg className={style.svgStar} width="16" height="16">
          <use href={`${icons}#icon-RatingStar`}></use>
        </svg>
        <p className={style.reviewRank}>
          {camper.reviews && camper.reviews.length > 0 ? (
            <>
              <Link to="/reviews">
                {camper.reviews.reduce((acc, review) => {
                  return acc + review.reviewer_rating;
                }, 0) / camper.reviews.length}
                ({camper.reviews.length} Reviews)
              </Link>
            </>
          ) : (
            "No Reviews"
          )}
        </p>
        <svg className={style.svgPointer} width="16" height="16">
          <use href={`${icons}#icon-map-pin`}></use>
        </svg>
        <span className={style.location}>
          {camper.location.split(",").reverse().join(", ")}
        </span>
      </div>
      <p className={style.description}>{camper.description}</p>
      <Features camper={camper} />
    </div>
      </div>
      <Outlet />
    </div>
  );
};
