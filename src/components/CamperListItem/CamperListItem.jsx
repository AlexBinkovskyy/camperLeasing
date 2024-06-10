/* eslint-disable react/prop-types */
import style from "./CamperListItem.module.css";

import { HeroImage } from "./HeroImage/HeroImage";
import { CamperDetails } from "./CamperDetails/CamperDetails";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ModalDetailsPage } from "../modal/ModalDetailsPage";


export const CamperListItem = ({ camper }) => {
  // const navigate = useNavigate()
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const toggleModal = () => setModalIsOpen(!modalIsOpen);


  return (
    <>
      {(
        <div className={style.wrapper}>
          <HeroImage image={camper.gallery[0]} />
          <CamperDetails camper={camper} />
          <Link to={`/catalog/${camper._id}`}>
          <button type="button" onClick={toggleModal} className={style.showMore}>
            Show more
          </button></Link>
          {/* <ModalDetailsPage toggleModal={toggleModal}/> */}
        </div>
      )}
    </>
  );
};
