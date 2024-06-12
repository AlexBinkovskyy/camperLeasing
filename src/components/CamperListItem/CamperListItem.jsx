/* eslint-disable react/prop-types */
import style from "./CamperListItem.module.css";

import { HeroImage } from "./HeroImage/HeroImage";
import { CamperDetails } from "./CamperDetails/CamperDetails";
import { useState } from "react";
import { ModalDetailsPage } from "../modal/ModalDetailsPage";
import { useLocation } from "react-router-dom";

export const CamperListItem = ({ camper }) => {
  const location = useLocation();

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const toggleModal = () => setModalIsOpen(!modalIsOpen);

  return (
    <>
      {
        <div
          className={
            location.pathname === "/favorite"
              ? `${style.wrapper} ${style.favorites}`
              : style.wrapper
          }
        >
          <HeroImage camper={camper} />
          <CamperDetails camper={camper} />
          <button
            type="button"
            onClick={toggleModal}
            className={
              location.pathname === "/favorite"
                ? `${style.showMore} ${style.favoritesShowMore}`
                : style.showMore
            }
          >
            Show more
          </button>
          {modalIsOpen && (
            <ModalDetailsPage
              camper={camper}
              closeModal={toggleModal}
              modalIsOpen={modalIsOpen}
            />
          )}
        </div>
      }
    </>
  );
};
