'use strict'
/**
 * TODO node modules require path
 * @exports App 
 * @exports Router
 * @param null 
 * @default ModuleRoutes
 * @module mongoose
 * @module BodyParser
 * @module express
 */
const ModuleRoutes = require('./node_modules') ; 
module.exports = {
    Mongoose : require(ModuleRoutes + 'mongoose') ,
    BodyParser : require(ModuleRoutes + 'body-parser') ,
    Cors :require(ModuleRoutes + 'cors')  
}
const Express = require(ModuleRoutes + 'express') ; 
module.exports.App = Express() ;
module.exports.Router = Express.Router() ; 


/**
 * TODO define protocoles 
 * @type const 
 */
const Protocol = {
    https : 'https://' , 
    http : 'http://' , 
    mongo :'mongodb://'
}
const webServerIP = 'localhost' ; 
module.exports.webServerPort = 3000 ; 
module.exports.webServerUrl = protocol.https + webServerIP + '/' ; 
/**
 * TODO Autherzation confid
 * @exports authenticationWebServerUrl
 * @method Protocol.https
 * @method AuthenticationWebServerIP
 */

const AuthenticationWebServerIP = 'localhost'
module.exports.authenticationWebServerUrl = Protocol.https + AuthenticationWebServerIP + '/' ; 

/**
 * TODO mongoose configurations
 * @method ServiceName
 * @method MongoServer
 * @method MongoServerPort
 * @method MongoServerUserName
 * @method MongoServerPassword
 * @method Protocol.mongo
 * @exports MongoServerUrl
 */
const ServiceName = 'user' ; 
const MongoServer = 'localhost' ; 
const MongoServerPort = '27017'  ; 
const MongoServerUserName = '' ; 
const MongoServerPassword = '' ; 

module.exports.MongoServerUrl = Protocol.mongo + MongoServerUserName + ':' + MongoServerPassword + '@' + MongoServer + ':' + MongoServerPort + '/' + ServiceName

/**
 * TODO JWTHeaders Config
 * @exports JwtHeader 
 */
module.exports.JwtHeader = {
    'type' : 'JWT', 
    'alg'  : 'sha256'
}
module.exports.JwtSecret = ''
module.exports.JwtExpireIn = '7d'
module.exports.JwtAlgorithm = 'HS256'
module.exports.JwtTokenName = 'authorization'