import type { NextApiRequest, NextApiResponse } from "next"
import axios from "axios"
import { cookies } from "next/headers"

type Data = string

const HOST = process.env.NEXT_PUBLIC_API_URL

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const session = req.query?.session

    const { data } = await axios.post(`${HOST}/api/miauth/${session}/check`, {})
    const { token } = data

    axios.post(`${HOST}/api/notifications/create`, {
        i: token,
        body: "テストが完了しました",
        header: "MiAuth Test",
    })
    res.status(300).redirect("/")
}
