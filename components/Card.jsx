import style from "./Card.module.css"
import Challenge from "./Challenge";
import getConfig from 'next/config'
import { useState } from "react";



const types = ["team", "drink", "language", "selfie", "time"]
const develop = false

export default function Card(props) {
    const { publicRuntimeConfig } = getConfig()
    const basePath = publicRuntimeConfig.basePath ? publicRuntimeConfig.basePath : ""
    console.log(basePath)
    const [animation, setAnimation] = useState(develop)
    const [explosion, setExplosion] = useState(develop)
    const [showCard, setShowCard] = useState(develop)

    const selectCard = () => {
        setAnimation(true)

        setTimeout(() => {
            setExplosion(true)
        }, 6500)

        setTimeout(() => {
            setShowCard(true)
        }, 9500)
    }

    const getRandomElement = (arr) => arr[Math.floor(Math.random()*arr.length)]

    const generateRandomChallenge = () => {
        let type = getRandomElement(types)
        let challenge = getRandomElement(props.data[type])
        console.log(challenge)
        return {
            type: type,
            challenge: process.env.NODE_ENV == "development" ? props.data["team"][0] : challenge
        }
    }

    if (showCard) {
        let {type, challenge} = generateRandomChallenge()
        return (
            <div className={style.cardBox}>
                <div className={`${style.explodeBall}`}>
                    <div className={`${ explosion ? style.implode : null}`}></div>
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
                <div className={`${ explosion ? style.explode : null}`}></div>
            </div>
            <div style={{width: "100%", height: "100%"}} className={`${animation ? style.spinning : "" }`} >
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