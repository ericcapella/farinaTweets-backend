const express = require("express")
const mongo = require("../mongo")
require("dotenv").config()
const appRouter = express.Router()
const { TwitterApi } = require("twitter-api-v2")
const TOKEN = process.env.TWTOKEN
const { TweetModel } = require("../mongo")
const { parse } = require("dotenv")

const twitterClient = new TwitterApi(TOKEN)

const roClient = twitterClient.readOnly.v2

appRouter.get("/refresh-tweets", async (req, res) => {
    const tweets = await roClient.search("#farina", {
        max_results: 100,
        "place.fields": "country",

        "user.fields": [
            "username",
            "name",
            "public_metrics",
            "profile_image_url",
        ],
        "tweet.fields": ["text", "created_at"],
        expansions: ["author_id", "geo.place_id"],
    })

    const parsedTweets = tweets._realData.data.map((tweet) => {
        tweets.includes.users.forEach((user) => {
            if (user.id === tweet.author_id) {
                //Crea campo author y lo iguala a el obj del user que hace match
                tweet.author = user
            }
        })

        delete tweet.author_id
        return tweet
    })

    const checker = await TweetModel.find()

    if (checker.length > 0) {
        const deletion = await TweetModel.collection.drop()
    }

    const createdTweets = await TweetModel.create(parsedTweets)

    return res.json(createdTweets)
})

appRouter.get("/db-tweets", async (req, res) => {
    const tweets = await TweetModel.find()

    return res.json(tweets)
})

module.exports = appRouter
