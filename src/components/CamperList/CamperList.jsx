import { useDispatch, useSelector } from "react-redux";
import { CamperListItem } from "../CamperListItem/CamperListItem";
import style from "./CamperList.module.css";
import { selectShowedVans } from "../../Redux/selectors";

import {
  selectCampersCount,
  selectGetCamperList,
  selectIsLoading,
} from "../../Redux/selectors";
import { showMore } from "../../Redux/camperSlice";
import { fetchCamperList } from "../../Redux/operation";

export const CamperList = () => {
  const dispatch = useDispatch();
  const camperList = useSelector(selectGetCamperList);
  const campersCount = useSelector(selectCampersCount);
  const showedVans = useSelector(selectShowedVans)

function handleLoadMore () {
  const newShowedVans = showedVans + 4
    dispatch(showMore(newShowedVans));
    dispatch(fetchCamperList(newShowedVans));
  }

  return (
    <div className={style.wrapper}>
      <ul>
        {selectIsLoading &&
          camperList?.map((camper) => {
            return (
              <li key={camper._id}>
                <CamperListItem camper={camper} />
              </li>
            );
          })}
      </ul>
      <div></div>
      {campersCount > showedVans && (
        <button type="button" onClick={handleLoadMore}>
          Load more
        </button>
      )}
    </div>
  );
};
