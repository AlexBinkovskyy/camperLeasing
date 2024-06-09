import style from "./Favorites.module.css";
import { CamperList } from "../../components/CamperList/CamperList";


export const Favorites = () => {
  return (<div className={style.wrapper}>
    <CamperList/>
  </div>);
};
