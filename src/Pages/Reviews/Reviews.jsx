import { useSelector } from "react-redux";
import { selectGetCamperList } from "../../Redux/selectors";
import style from "./Reviews.module.css";
import { nanoid } from "nanoid";
import { CamperReviews } from "../../components/CamperReviews/CamperReviews";
import { HeroImage } from "../../components/CamperListItem/HeroImage/HeroImage";

export const Reviews = () => {
  const camperList = useSelector(selectGetCamperList);

  return (
    <div className={style.wrapper}>
      <ul>
        {camperList.map((camper) => (
          <li key={nanoid()} className={style.listItem}>
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
