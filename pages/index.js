import Card from '../components/Card'
import Head from 'next/head'
/* Load data */
import team from "../challenges/team.json"
import drink from "../challenges/drink.json"
import language from "../challenges/language.json"
import selfie from "../challenges/selfie.json"
import time from "../challenges/time.json"

export async function getStaticProps(context) {
    return {
        props: { team, drink, language, selfie, time },
    }
}

export default function Home(props) {
    return (
        <>
        <Head>
            <meta name="viewport" content="width=device-width, user-scalable=no" />
        </Head>
        <Card data={props} />
        </>
        
    )

}
