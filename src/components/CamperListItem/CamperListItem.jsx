/* eslint-disable react/prop-types */
import style from "./CamperListItem.module.css";

import { HeroImage } from "./HeroImage/HeroImage";
import { CamperDetails } from "./CamperDetails/CamperDetails";


export const CamperListItem = ({ camper }) => {

  return (
    <>
      {(
        <div className={style.wrapper}>
          <HeroImage image={camper.gallery[0]} />
          <CamperDetails camper={camper} />
          <button type="button" className={style.showMore}>
            Show more
          </button>
        </div>
      )}
    </>
  );
};
