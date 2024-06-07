/* eslint-disable react/prop-types */
import style from './HeroImage.module.css'

export const HeroImage = ({image})=>{
    return <img src={image} alt="Photo of the camper" className={style.image}/>
}