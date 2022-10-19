import group from "../challenges/group.json"
import ohno from "../challenges/ohno.json"

export async function getStaticProps(context) {
    return {
        props: { group, ohno },
    }
}

export default function Challenge(props) {

    console.log(props.group)
    return (
        <>
            <hr></hr>
        </>
    )
}