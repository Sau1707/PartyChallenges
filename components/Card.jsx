import style from "./Card.module.scss"
import Challenge from "./Challenge";
import getConfig from 'next/config'
import { useState } from "react";

const develop = false

export default function Card(props) {
    const { publicRuntimeConfig } = getConfig()
    const basePath = publicRuntimeConfig.basePath ? publicRuntimeConfig.basePath : ""
    const [animation, setAnimation] = useState(develop)
    const [explosion, setExplosion] = useState(develop)
    const [showCard, setShowCard] = useState(develop)

    const selectCard = () => {
        setAnimation(true)

        setTimeout(() => {
            setExplosion(true)
        }, 4000)

        setTimeout(() => {
            setShowCard(true)
        }, 4900)
    }

    const getRandomElement = (arr) => arr[Math.floor(Math.random() * arr.length)]

    if (showCard) {
        let { type, challenge } = getRandomElement(props.data)
        return (
            <div className={style.cardBox}>
                <div className={`${style.explodeBall}`}>
                    <div className={`${explosion ? style.implode : null}`}></div>
                </div>
                <Challenge
                    type={type}
                    desc={challenge}
                />
            </div>
        )
    }

    return (
        <div className={style.cardBox} onClick={selectCard}>
            <div className={`${style.explodeBall}`}>
                <div className={`${explosion ? style.explode : null}`}></div>
            </div>
            <div style={{ width: "100%", height: "100%" }} className={`${animation ? style.spinning : ""}`} >
                <div className={style.flipCardInner}>
                    <div className={style.flipCardFront}>
                        <div className={style.imageBox}>
                            <div className={style.imageElement}> {props.children} </div>
                            <img className={style.image} src={`${basePath}/images/question.png`} />
                        </div>
                    </div>
                    <div className={style.flipCardBack}>
                        <div className={style.imageBox}>
                            <img className={style.image} src={`${basePath}/images/question.png`} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}