const mongoose = require("mongoose")

const tweetSchema = mongoose.Schema(
    {
        text: { type: String },
        created_at: { type: Date },
        id: { type: String },
        author: {
            id: { type: String },
            name: { type: String },
            username: { type: String },
            public_metrics: {
                followers_count: { type: Number },
                following_count: { type: Number },
                tweet_count: { type: Number },
                listed_count: { type: Number },
            },
            profile_image_url: { type: String },
        },
    },
    { strict: false }
)

const Tweet = mongoose.model("tweet", tweetSchema)

module.exports = Tweet
