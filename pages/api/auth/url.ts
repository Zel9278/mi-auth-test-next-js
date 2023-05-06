import type { NextApiRequest, NextApiResponse } from "next"
import axios from "axios"

type Data = string

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const appSecret = process.env.API_SECRET

    const { data } = await axios.post(
        `${process.env.API_URL}/api/auth/session/generate`,
        {
            appSecret,
        }
    )

    res.status(200).send(data.url)
}
