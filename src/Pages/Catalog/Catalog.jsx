import { Outlet } from "react-router-dom";
import style from './Catalog.module.css'
import { CamperList } from "../../components/CamperList/CamperList";

export const Catalog = () => {
  return (
    <div className={style.wrapper}>
      <Outlet/>
      <CamperList/>
      </div>
    
  );
};
