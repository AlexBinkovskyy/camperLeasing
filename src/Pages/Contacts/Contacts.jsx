import { BookingComponent } from "../../components/BookingComponent/BookingComponent";
import style from "./Contacts.module.css";
import { PromoImages } from "../HomePage/PromoImages/PromoImages";

export const Contacts = () => {
  return (
    <div className={style.wrapper}>
      <h1 className={style.title}>
        Feel free to contact us if you have any questions
      </h1>
      <div className={style.compWrapper}>
        <PromoImages />
        <BookingComponent />
      </div>
    </div>
  );
};
