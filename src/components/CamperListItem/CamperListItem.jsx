/* eslint-disable react/prop-types */
import style from "./CamperListItem.module.css";

import { HeroImage } from "./HeroImage/HeroImage";
import { CamperDetails } from "./CamperDetails/CamperDetails";
import { useNavigate } from "react-router-dom";


export const CamperListItem = ({ camper }) => {
  const navigate = useNavigate()

  return (
    <>
      {(
        <div className={style.wrapper}>
          <HeroImage image={camper.gallery[0]} />
          <CamperDetails camper={camper} />
          <button type="button" onClick={(()=>navigate(`/catalog/${camper._id}`))} className={style.showMore}>
            Show more
          </button>
        </div>
      )}
    </>
  );
};
