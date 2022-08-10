require("./connection")

// exportar models de tweet, user y places
const TweetModel = require("../mongo/schemas/tweet")

module.exports = { TweetModel }
