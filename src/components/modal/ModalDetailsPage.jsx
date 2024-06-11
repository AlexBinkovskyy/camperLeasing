/* eslint-disable react/prop-types */
import style from "./ModalDetailsPage.module.css";
import { Link, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import icons from "../../images/sprite.svg";
import { nanoid } from "nanoid";
import { ModalReadMore } from "./ModalReadMore/ModalReadMore";

export const ModalDetailsPage = ({ modalIsOpen, closeModal, camper }) => {
  const [modalReadOpen, setModalReadOpen] = useState(false);

  // const toggleReadMoreModal = ()=>{
  // }

  useEffect(() => {
    const htmlElement = document.querySelector("html");
    modalIsOpen
      ? (htmlElement.style.overflowY = "hidden    ")
      : (htmlElement.style.overflowY = "scroll");
    return () => (htmlElement.style.overflowY = "scroll");
  }, [modalIsOpen]);

  const handleCloseModal = (event) => {
    if (event.target.classList.contains(style.backdropWrapper)) closeModal();
  };

  const handleReadMore = () => {
    setModalReadOpen(!modalReadOpen);
  };

  return (
    <div className={style.backdropWrapper} onClick={handleCloseModal}>
      <div className={style.main}>
        <div className={style.details}>
          <div className={style.titleWrapper}>
            <h2 className={style.headerTwo}>{camper.name}</h2>
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
          <h2 className={style.headerPrice}>€{camper.price.toFixed(2)}</h2>
          <div>
            <ul className={style.imageList}>
              {camper.gallery.map((url) => (
                <li key={nanoid()} className={style.imageItem}>
                  <img src={url} alt="Camper details" className={style.image} />
                </li>
              ))}
            </ul>
          </div>

          <p className={style.description}>{camper.description}</p>
          <button type="button" onClick={handleReadMore} className={style.readMoreBtn}>
            ...more
          </button>
          {modalReadOpen && (
            <ModalReadMore
              camper={camper}
              onClose={handleReadMore}
            />
          )}
          {/* <Features camper={camper} /> */}
        </div>
      </div>
      <Outlet />
    </div>
  );
};
