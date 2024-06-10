import { Outlet } from "react-router-dom";
import style from './ModalDetailsPage.module.css'

export const ModalDetailsPage = () => {
  return (
    <div className={style.backdropWrapper}>
        <div className={style.main}>

        </div>
      <Outlet/>
    </div>
  );
};
