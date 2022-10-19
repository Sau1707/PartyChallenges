import Card from '../components/Card'

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
        <Card data={props} />
    )

}
