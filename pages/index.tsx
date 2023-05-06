import Link from "next/link"
import axios from "axios"
import { GetServerSideProps } from "next"

type Props = {
    url: string
}

export default function Home(props: Props) {
    return (
        <main
            className={`flex min-h-screen flex-col items-center justify-between p-24`}
        >
            <Link href={props.url} className="btn btn-primary">
                Login with Misskey(
                {(process.env.NEXT_PUBLIC_API_URL || "").replace(
                    /http?s:\/\//,
                    ""
                )}
                )
            </Link>
        </main>
    )
}

export const getServerSideProps: GetServerSideProps = async () => {
    const { data } = await axios.post(`${process.env.BASE_URL}/api/auth/url`)

    const props: Props = {
        url: data,
    }

    return {
        props,
    }
}
