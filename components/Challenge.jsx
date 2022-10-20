import style from "./Challenge.module.css"
import getConfig from 'next/config'
import { useEffect, useState } from "react";

const types = ["team", "drink", "language", "selfie", "time"]
const images = {
    team: "/images/team.png",
    drink: "/images/drinks.png",
    language: "/images/languages.png",
    selfie: "/images/foto.png",
    time: "/images/time.png"
}

const capitalize = (el) => el.charAt(0).toUpperCase() + el.slice(1)
const setCountdown = (minutes) => new Date(new Date().getTime() + (minutes)*60000 + 2000);
const getTimer = (str) => {
    let min = str.search("min")
    let sec = str.search("sec")
    if (min != -1) return str.match(/\d+/)[0]
    if (sec != -1) return str.match(/\d+/)[0] / 60
}

export default function Challenge(props) {
    const { publicRuntimeConfig } = getConfig()
    const basePath = publicRuntimeConfig.basePath ? publicRuntimeConfig.basePath : ""
    const [flip, setFlip] = useState(false)
    const [timerClock, setTimerClock] = useState(false)

    const flipCard = () => {
        setFlip(!flip)
    }

    useEffect(() => {
        if (!flip) {
            clearInterval(timerClock)
            setTimerClock(false)
            return
        }
        if (timerClock) return
        if (props.type != "time") return
        let timer = document.getElementById("timer")
        let time = getTimer(props.desc)
        if (time == undefined) time = Math.random() * 5
        var countDownDate = setCountdown(time).getTime();
        var x = setInterval(function() {
            var now = new Date().getTime();
            
            var distance = countDownDate - now;
            
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
            timer.innerHTML = minutes + "m " + seconds + "s ";
            
            if (distance < 0) {
              clearInterval(x);
              timer.innerHTML = "EXPIRED"
            }
            }, 1000);
        setTimerClock(x)
    }, [flip])

    return (
        <div className={style.cardBox} onClick={flipCard}>
            <div className={style.flipCard}>
                <div style={{transform: flip ? "rotateY(180deg)" : ""}} className={style.flipCardInner}>
                    <div className={style.flipCardFront}>
                        <div className={style.imageBox}>
                            <img className={style.image} src={`${basePath}${images[props.type]}`} />
                        </div>
                    </div>
                    <div className={style.flipCardBack}>
                        <div className={style.imageBox}>
                            <div className={style.imageElement}>
                            <h1 style={{ fontWeight: "bold" }}> {capitalize(props.type)} Challenge </h1>
                            <hr style={{width: "30%", borderTop: "2px solid white", marginTop: "10%", marginBottom: "10%"}}/>
                            <h2> {props.desc }</h2>
                            {/* If the card is time, we need to add a timer */}
                            {props.type == "time" ? 
                            <>
                                <hr style={{width: "30%", borderTop: "2px solid white", marginTop: "10%", marginBottom: "10%"}}/> 
                                <h3> Flip the card to reset the timer </h3>
                                <h2 id="timer"> </h2>
                            </>
                            : <></>}
                            {/* If the card is selfie, we need to add where to send it */}
                            {props.type == "selfie" ? 
                            <>
                                <hr style={{width: "30%", borderTop: "2px solid white", marginTop: "10%", marginBottom: "10%"}}/> 
                                <h3> Send the picture to this address: </h3>
                                <h3> Cäsar-Ritz-Strasse 7 </h3>
                                <h3> App 751 </h3>
                                <br />
                                <h3> Using the postfinace app </h3>
                            </>
                            : <></>}
                            </div>
                            <img style={{ filter: "blur(0px) brightness(0.3)" }} className={style.image} src={`${basePath}${images[props.type]}`} />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );

}