import style from "./Challenge.module.css"
import getConfig from 'next/config'
import { useState } from "react";

const types = ["team", "drink", "language", "selfie", "time"]
const images = {
    team: "/images/team.png",
    drink: "/images/drinks.png",
    language: "/images/languages.png",
    selfie: "/images/foto.png",
    time: "/images/time.png"
}

const capitalize = (el) => el.charAt(0).toUpperCase() + el.slice(1)
export default function Challenge(props) {
    const { publicRuntimeConfig } = getConfig()
    const [flip, setFlip] = useState(false)

    const flipCard = () => {
        setFlip(!flip)
    }

    return (
        <div className={style.cardBox} onClick={flipCard}>
            <div className={style.flipCard}>
                <div style={{transform: flip ? "rotateY(180deg)" : ""}} className={style.flipCardInner}>
                    <div className={style.flipCardFront}>
                        <div className={style.imageBox}>
                            <img className={style.image} src={`${publicRuntimeConfig.basePath}${images[props.type]}`} />
                        </div>
                    </div>
                    <div className={style.flipCardBack}>
                        <div className={style.imageBox}>
                            <div className={style.imageElement}>
                            <h1 style={{ fontWeight: "bold" }}> {capitalize(types[0])} Challenge </h1>
                            <hr style={{width: "30%", borderTop: "2px solid white", marginTop: "10%", marginBottom: "10%"}}/>
                            <h2> {props.desc }</h2>
                            </div>
                            <img style={{ filter: "blur(0px) brightness(0.4)" }} className={style.image} src={`${publicRuntimeConfig.basePath}${images[props.type]}`} />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );

}