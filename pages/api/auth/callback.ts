import type { NextApiRequest, NextApiResponse } from "next"
import axios from "axios"
import crypto from "crypto"

type Data = string

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const appSecret = process.env.API_SECRET

    const { token } = req.query
    const { data } = await axios.post(
        `${process.env.API_URL}/api/auth/session/userkey`,
        {
            appSecret,
            token,
        }
    )

    const i = crypto
        .createHash("sha256")
        .update(data.accessToken + appSecret, "utf8")
        .digest("hex")

    console.log(i)

    res.status(300).redirect("/")
}

/**
"read:account"
"write:account"
"read:blocks"
"write:blocks"
"read:drive"
"write:drive"
"read:favorites"
"write:favorites"
"read:following"
"write:following"
"read:messaging"
"write:messaging"
"read:mutes"
"write:mutes"
"write:notes"
"read:notifications"
"write:notifications"
"read:reactions"
"write:reactions"
"write:votes"
"read:pages"
"write:pages"
"write:page-likes"
"read:page-likes"
"read:user-groups"
"write:user-groups"
"read:channels"
"write:channels"
"read:gallery"
"write:gallery"
"read:gallery-likes"
"write:gallery-likes"
**/
