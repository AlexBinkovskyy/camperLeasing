/* eslint-disable react/prop-types */
import { useLocation } from "react-router-dom";
import style from "./HeroImage.module.css";

export const HeroImage = ({ image }) => {
  const location = useLocation();
  return (
    <img
      src={image}
      alt="Photo of the camper"
      className={
        location.pathname === "/favorite"
          ? `${style.image} ${style.favorite}`
          : style.image
      }
    />
  );
};
