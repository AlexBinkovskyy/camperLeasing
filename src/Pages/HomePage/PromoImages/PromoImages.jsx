import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from "./PromoImages.module.css";
import { selectIsLoading, selectPromoImages } from "../../../Redux/selectors";
import { useSelector } from "react-redux";
import { nanoid } from "nanoid";
import { useLocation } from "react-router-dom";

export function PromoImages() {
  const promoImages = useSelector(selectPromoImages);
  const isLoading = useSelector(selectIsLoading);
  const location = useLocation();

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    pauseOnHover: false,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    cssEase: "linear",
  };
  return (
    <>
      {!isLoading && (
        <div
          className={
            location.pathname === "/contacts"
              ? `${style.contacts} slider-container`
              : `slider-container`
          }
        >
          <Slider {...settings}>
            {promoImages?.map((image) => (
              <li key={nanoid()} className={style.wrapper}>
                <img
                  src={Object.values(image)}
                  alt="Camper Image"
                  className={style.image}
                />
                <div className={style.headerContainer}>
                  <h2 className={style.header}>{Object.keys(image)}</h2>
                </div>
              </li>
            ))}
          </Slider>
        </div>
      )}
    </>
  );
}
