import Link from 'next/link'

import Center from "../components/Center"
import VerticalSpace from "../components/VerticalSpace"

export default function Home() {
    return (
        <>
            <VerticalSpace space={200} />
            <Center>
                <h1 > Welcome to party challenges </h1>
            </Center>
            <VerticalSpace space={200} />
            <Center>
                <Link href="/challenge">
                    <button> Click to generate a challenge </button>
                </Link>
            </Center>
        </>
    )

}
