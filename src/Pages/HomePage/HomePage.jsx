import style from "./HomePage.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCamperList } from "../../Redux/operation";
import { selectIsLoading, selectShowedVans } from "../../Redux/selectors";
import { PromoImages } from "./PromoImages/PromoImages";
import { Link } from "react-router-dom";

export const HomePage = () => {
  const dispatch = useDispatch();
  const showedVans = useSelector(selectShowedVans);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchCamperList(showedVans));
  }, [dispatch, showedVans]);

  return (
    <>
      {!isLoading && (
        <div className={style.wrapper}>
          <Link to="/catalog">
            <button className={style.button}>Choose your Camper</button>
          </Link>
          <PromoImages />
          <h2 className={style.title}>Make your jorney unforgettable !!!</h2>
        </div>
      )}
    </>
  );
};
