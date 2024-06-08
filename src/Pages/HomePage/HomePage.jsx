import style from "./HomePage.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCamperList } from "../../Redux/operation";
import {
  selectIsLoading,
  selectPromoImages,
  selectShowedVans,
} from "../../Redux/selectors";
import { nanoid } from "nanoid";

export const HomePage = () => {
  const dispatch = useDispatch();
  const showedVans = useSelector(selectShowedVans);
  const promoImages = useSelector(selectPromoImages);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchCamperList(showedVans));
  }, [dispatch, showedVans]);

  useEffect(() => {
    let slideIndex = 0;
    const slides = document.querySelectorAll(`.${style.slide}`);

    function showSlides() {
      if (slides.length === 0) return;

      for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove(`${style.active}`);
      }

      slideIndex++;
      if (slideIndex > slides.length) {
        slideIndex = 1;
      }

      slides[slideIndex - 1].classList.add(`${style.active}`);
      setTimeout(showSlides, 5000);
    }

    showSlides();
  }, [promoImages]);

  return (
    <>
      <div className={style.wrapper}>
        <div className={style.slider}>
          <div className={style.slides}>
            {!isLoading && promoImages?.length > 0 && (
              <ul>
                {promoImages.map((image, index) => {
                  return (
                    <li key={nanoid()}>
                      <div className={style.slide}>
                        <img src={image} alt={`Photo ${index}`} />
                      </div>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </div>
      </div>
    </>
  );
};