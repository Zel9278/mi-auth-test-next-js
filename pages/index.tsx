import Link from "next/link"
import { GetServerSideProps } from "next"
import crypto from "crypto"
import { cookies } from "next/headers"

type Props = {
    url: string
}

const ORIGIN = process.env.NEXT_PUBLIC_API_URL
const HOST = process.env.BASE_URL
const PERMISSON = process.env.PERMISSON
const ICON = process.env.ICON_URL

export default function Home(props: Props) {
    return (
        <main
            className={`flex min-h-screen flex-col items-center justify-between p-24`}
        >
            <Link href={props.url} className="btn btn-primary">
                Login with Misskey(
                {(ORIGIN || "").replace(/http?s:\/\//, "")})
            </Link>
        </main>
    )
}

export const getServerSideProps: GetServerSideProps = async () => {
    const urlSearchParam = new URLSearchParams({
        name: "MiAuth Test",
        callback: encodeURI(`${HOST}/api/auth/callback`),
        permission: encodeURI(PERMISSON || ""),
        icon: encodeURI(ICON || ""),
        zen: "",
    })
    const url = `${ORIGIN}/miauth/${crypto.randomUUID()}?${urlSearchParam}`

    const props: Props = {
        url,
    }

    return {
        props,
    }
}
