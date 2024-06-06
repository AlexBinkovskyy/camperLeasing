import { Outlet } from "react-router-dom";
import style from './Catalog.module.css'

export const Catalog = () => {
  return (
    <div className={style.wrapper}>
      <Outlet/></div>
    
  );
};
