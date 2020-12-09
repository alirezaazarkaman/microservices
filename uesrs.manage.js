const {Router} = require('./user.config') ; 
const {UserName,Name} = require('./user.model') ; 
/**
 * TODO function for product managment
 * @param {*} req 
 * @param {*} res 
 * @returns {Object}
 */
const Manage = async (req,res)=>{
    try{
        const result = {}
        const {Action,Content ,Type} = req.body ; 
        if(Action === 'add' && Type === 'username'){
            const UserNameQuery = await UserName.findOne({name :Content}).catch(err=>{
                res.status(401).json({error : err}) ; 
            }); 
            if(UserNameQuery != null){
                result = Object.assign(result,{status : true , code : 2 ,message : 'this product exist'}) ; 
                res.json(result)
            }
            UserNameQuery = new UserName({
                name : Content
            }) ; 
            UserNameQuery.save().then(saved=>{
                result=Object.assign(result,{status : true}) ; 
                res.json(result) ; 
            })
        }
        if(Action === 'add' && Type === 'Name'){
            const NameQuery = await UserName.findOne({name :Content}).catch(err=>{
                res.status(401).json({error : err}) ; 
            }); 
            if(NameQuery != null){
                result = Object.assign(result,{status : true , code : 2 ,message : 'this product exist'}) ; 
                res.json(result)
            }
            NameQuery = new UserName({
                name : Content
            }) ; 
            NameQuery.save().then(saved=>{
                result=Object.assign(result,{status : true}) ; 
                res.json(result) ; 
            })
        }
        if(Action === 'remove' && Type === 'Name'){
            const RemoveUserNameQuery = await Name.findOne({name : Content}) ; 
            if(RemoveUserNameQuery == null){
                result = Object.assign(result,{status:false ,code : 2 ,message : 'name not found'}) ;
                res.json(result) 
            }
            RemoveUserNameQuery.remove().then(removed=>{
                result = Object.assign(result,{status : true,message : 'name remove'})
                res.json(result) ; 
            }).catch(err=>{
                throw err ; 
            })

        }
        if(Action === 'remove' && Type === 'username'){
            const RemoveQuery = await Name.findOne({name : Content}) ; 
            if(RemoveQuery == null){
                result = Object.assign(result,{status:false ,code : 2 ,message : 'username not found'}) ;
                res.json(result) 
            }
            RemoveQuery.remove().then(removed=>{
                result = Object.assign(result,{status : true,message : 'username remove'})
                res.json(result) ; 
            }).catch(err=>{
                throw err ; 
            })

        }
        
    }
    catch(err){
        console.log(err) ; 
    }
}

Router.post('/product/manage', Manage)
module.exports = router