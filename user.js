'use strict'
const { App, Router, Cors, BodyParser, Mongoose } = require('./user.config') ; 
const { webServerPort, mongoServerUrl } = require('./region.configuration')
const Manage = require('./uesrs.manage')


App.use(Cors())
App.use(BodyParser.urlencoded({ extended: false }))
App.use(BodyParser.json())

Router.use('/', Manage)


App.use('/', Router)
App.listen(webServerPort, () => { console.log('user Web Server has started!') })

Mongoose.connect(mongoServerUrl, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false, authSource: 'admin' })
    .then(() => { console.log('user Mongo Server has started!') })
    .catch(err => { console.error('Error: user Mongo Server!', err) })