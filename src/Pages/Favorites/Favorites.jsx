import style from "./Favorites.module.css";
import { CamperList } from "../../components/CamperList/CamperList";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { resetFilters } from "../../Redux/camperSlice";


export const Favorites = () => {
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(resetFilters())
  },[dispatch])
  
  return (<div className={style.wrapper}>
    <CamperList/>
  </div>);
};
