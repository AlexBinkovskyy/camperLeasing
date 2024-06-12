import { useDispatch, useSelector } from "react-redux";
import { CamperListItem } from "../CamperListItem/CamperListItem";
import style from "./CamperList.module.css";
import {
  selectCampersCount,
  selectIsLoading,
  selectFavoritesIDs,
  selectShowedVans,
  selectFilteredCampers,
} from "../../Redux/selectors";
import { showMore } from "../../Redux/camperSlice";
import { fetchCamperList } from "../../Redux/operation";
import { Link, Navigate, useLocation } from "react-router-dom";

export const CamperList = () => {
  const location = useLocation();

  const dispatch = useDispatch();
  const camperList = useSelector(selectFilteredCampers);
  const campersCount = useSelector(selectCampersCount);
  const showedVans = useSelector(selectShowedVans);
  const favoriteCampers = useSelector(selectFavoritesIDs);

  if (!camperList) {
    return <Navigate to="/" />;
  }
  function handleLoadMore() {
    const newShowedVans = showedVans + 4;
    dispatch(showMore(newShowedVans));
    dispatch(fetchCamperList(newShowedVans));
  }

  return (
    <>
      {location.pathname === "/catalog" && (
        <div className={style.wrapper} id="camperList">
          {camperList.length ? (
            <ul>
              {selectIsLoading &&
                camperList?.map((camper) => {
                  return (
                    <li key={camper._id}>
                      <CamperListItem camper={camper}/>
                    </li>
                  );
                })}
            </ul>
          ) : (
            <div className={style.infoWrapper}>
              <img
                src="/src/images/dummyImage.jpg"
                alt="No favorite campers image"
                className={style.dummy}
              />
              <p className={style.info}>
                There are no any campers, matches to your query...
              </p>
            </div>
          )}

          {campersCount > showedVans && (
            <button
              type="button"
              onClick={handleLoadMore}
              className={style.loadMoreBtn}
            >
              Load more
            </button>
          )}
        </div>
      )}

      {location.pathname === "/favorite" && (
        <div className={style.wrapper}>
          {favoriteCampers.length ? (
            <ul>
              {selectIsLoading &&
                camperList
                  ?.filter((camper) => favoriteCampers.includes(camper._id))
                  .map((camper) => (
                    <li key={camper._id}>
                      <CamperListItem camper={camper} />
                    </li>
                  ))}
            </ul>
          ) : (
            <div className={style.infoWrapper}>
              <img
                src="/src/images/dummyImage.jpg"
                alt="No favorite campers image"
                className={style.dummy}
              />
              <p className={style.info}>
                There are no any favorite campers yet...
              </p>
              <Link to="/catalog" className={style.link}>
                Try to choose one!!!
              </Link>
            </div>
          )}
        </div>
      )}
    </>
  );
};
