const mongoose = require('mongoose')
const config = require('../config.json')

module.exports = {
    name: 'ready',
    execute(client) {
        mongoose.connect(config.mongoURL, {
            useNewUrlParser: true, // Make this a comment if you don't want to use MongoDB
            useUnifiedTopology: true
        })
        console.log(`${client.user.username} - Is now online - @Flaing`)
    }
}