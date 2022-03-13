const Todo = require('../models/TodoModels')

exports.list = (req,res) =>{
    Todo.find().then((todos)=>{
        res.status(200).json(todos)
    }).catch(error=> res.status(400).json({error}))
}

exports.getOneItem = (req, res) => {
    Todo.findOne({_id:req.params.id}).then((todos)=>{
        res.status(200).json(todos)
    }).catch(error=> res.status(400).json({error}))
}
exports.postItem = (req, res) => {
    Todo.create({description:req.body.query.description, done:false}).then((todos)=>{
        res.status(200).json(todos)
    }).catch(error=> res.status(400).json({error}))

}
exports.patchItem = (req, res) => {
    Todo.updateOne({_id:req.params.id},req.body.query).then((todos)=>{
        res.status(200).json(todos)
    }).catch(error=> res.status(400).json({error}))
}
exports.toggleDoneItem = (req, res) => {
    Todo.findOne({_id:req.params.id}).then((todos)=>{
        Todo.updateOne({_id:req.params.id}, {done:!todos.done}).then((todos)=>{
            res.status(200).json(todos)
        }).catch(error=> res.status(400).json({error}))
    }).catch(error=> res.status(400).json({error}))
}
exports.deleteItem = (req, res) => {
    Todo.deleteOne({_id:req.params.id}).then((todos)=>{
        res.status(200).json(todos)
    }).catch(error=> res.status(400).json({error}))
}