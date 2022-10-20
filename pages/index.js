import Card from '../components/Card'
import Head from 'next/head'
/* Load data */
import team from "../challenges/team.json"
import drink from "../challenges/drink.json"
import language from "../challenges/language.json"
import selfie from "../challenges/selfie.json"
import time from "../challenges/time.json"

import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export async function getStaticProps(context) {
    return {
        props: { team, drink, language, selfie, time },
    }
}

const particlesOprions = {
    background: {
        color: {
            value: "white",
        },
    },
    fpsLimit: 120,
    particles: {
        color: {
            value: "white",
        },
        links: {
            color: "white",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
        },
        collisions: {
            enable: true,
        },
        move: {
            direction: "none",
            enable: true,
            outModes: {
                default: "bounce",
            },
            random: false,
            speed: 1,
            straight: false,
        },
        number: {
            density: {
                enable: true,
                area: 800,
            },
            value: 80,
        },
        opacity: {
            value: 0.5,
        },
        shape: {
            type: "circle",
        },
        size: {
            value: { min: 1, max: 5 },
        },
    },
    detectRetina: true,
    fullScreen: { enable: false }
}

export default function Home(props) {
    const particlesInit = async (main) => {
        console.log("here")
        await loadFull(main);
    };

    return (
        <>
        <Head>
            <meta name="viewport" content="width=device-width, user-scalable=no" />
        </Head>
        <div style={{position: "absolute", width: "100%", height: "100%"}}>
            <Particles
            style={{position: "absolute", width: "100%", height: "100%"}}
                id="tsparticles"
                init={particlesInit}
                options={particlesOprions}
            />
        </div>
        </>
        
    )
}

//         <Card data={props} />