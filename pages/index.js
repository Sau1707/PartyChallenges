import Card from '../components/Card'
import Head from 'next/head'
/* Load data */
import team from "../challenges/team.json"
import drink from "../challenges/drink.json"
import language from "../challenges/language.json"
import selfie from "../challenges/selfie.json"
import time from "../challenges/time.json"
/* BAckgorund particle */

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export async function getStaticProps(context) {
    let selectable = []

    const convertToObject = (arr, name) => arr.map(e => selectable.push({ type: name, challenge: e }))
    convertToObject(team, "team")
    convertToObject(drink, "drink")
    convertToObject(language, "language")
    convertToObject(selfie, "selfie")
    convertToObject(time, "time")

    return {
        props: { team, drink, language, selfie, time, selectable },
    }
}

export default function App(props) {
    const particlesInit = useCallback(async (engine) => {
        await loadFull(engine);
    }, []);

    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, user-scalable=no" />
            </Head>

            <Particles
                id="tsparticles"
                init={particlesInit}
                options={{
                    background: {
                        color: {
                            value: "#000",
                        },
                    },
                    fpsLimit: 120,
                    particles: {
                        color: {
                            value: "#ffffff",
                        },
                        links: {
                            color: "#ffffff",
                            distance: 150,
                            enable: true,
                            opacity: 0.5,
                            width: 1,
                        },
                        collisions: {
                            enable: true,
                        },
                        move: {
                            directions: "none",
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
                }}
            />
            <Card data={props.selectable} />
        </>
    );
};