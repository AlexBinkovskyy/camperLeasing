/* eslint-disable react/prop-types */
import style from "./CamperListItem.module.css";

import { HeroImage } from "./HeroImage/HeroImage";
import { CamperDetails } from "./CamperDetails/CamperDetails";
import { useState } from "react";
import { ModalDetailsPage } from "../modal/ModalDetailsPage";

export const CamperListItem = ({ camper }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const toggleModal = () => setModalIsOpen(!modalIsOpen);

  return (
    <>
      {
        <div className={style.wrapper} >
          <HeroImage image={camper.gallery[0]} />
          <CamperDetails camper={camper} />
          <button
            type="button"
            onClick={toggleModal}
            className={style.showMore}
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
