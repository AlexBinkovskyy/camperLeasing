import { useSelector } from "react-redux";
import { selectGetCamperList } from "../../Redux/selectors";
import style from "./Reviews.module.css";
import { nanoid } from "nanoid";
import { CamperReviews } from "../../components/CamperReviews/CamperReviews";
import { HeroImage } from "../../components/CamperListItem/HeroImage/HeroImage";
import { Navigate } from "react-router-dom";
import { useEffect } from "react";

export const Reviews = () => {
  const camperList = useSelector(selectGetCamperList);

  useEffect(() => {
    setTimeout(() => {
      const anchor = window.location.hash;
      if (anchor) {
        const targetElement = document.getElementById(anchor.slice(1));
        if (targetElement) {
          window.scrollTo({
            top:
              targetElement.getBoundingClientRect().top + window.scrollY - 80,
            behavior: "smooth",
          });
        }
      }
    }, 20);
  }, []);

  if (!camperList) {
    return <Navigate to="/" />;
  }

  return (
    <div className={style.wrapper}>
      <ul className={style.list}>
        {camperList.map((camper) => (
          <li key={nanoid()} id={camper._id} className={style.listItem}>
            <HeroImage camper={camper} />
            <div className={style.wrapperItem}>
              <span className={style.paragraph}>What user's say's about:</span>
              <h2 className={style.titleName}>{camper.name}</h2>
              <CamperReviews camper={camper} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
