import { PrismaClient } from "@prisma/client";
import jwt from 'jsonwebtoken';


export default async(req, res) => {
    const prisma = new PrismaClient();

    const { token } = req.cookies;

    if (token) {
        //Get Authenticated user
        const { _id, username } = jwt.verify(token, process.env.JWT_SECRET);
        const { text } = req.body;
        if(text!=="")
        {
            const tweet = await prisma.tweet.create({ 
                data: { text, author: { connect: { username } } }
            });
            res.json(tweet);
        }
        else {
            res.json({ error: 'Empty tweet'});
        }
    } else {
        res.json({ error: 'You must be logged in to tweet.'});
    }
};