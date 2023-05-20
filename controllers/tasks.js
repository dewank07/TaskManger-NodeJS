const task = require('../models/task');



const getAllTasks = async (req,res)  => {
    try {
        const tasks = await task.find({});
        res.status(200).json({tasks});
    } catch (error) {
        res.status(500).json({msg: error});  
    }
};

const getTasks = async (req,res)  => {
    try {
        const {id:taskID} = req.params
        const tasks = await task.findOne({_id:taskID});
        if(!tasks){
            return res.status(404).json({msg: `No task with id ${taskID}`});
        }
        res.status(200).json({tasks});
    } catch (error) {
        res.status(500).json({msg: error});          
    }
};

const createTasks = async (req,res)  => {

    try{
        const tasks = await task.create(req.body)
        res.status(201).json({tasks}); 
    }
    catch(err){
        res.status(500).json({msg: err});  
    }
};


const deleteTasks = async (req,res)  => {
    
    try {
        const {id: taskID} = req.params
        const tasks = await task.findOneAndDelete({_id: taskID});
        if(!tasks){
            return res.status(404).json({msg: `No task with id ${taskID}`});
        }
        res.status(200).json({tasks});
    } catch (error) {
        res.status(500).json({msg: error});          
    }
};

const updateTasks = async (req,res)  => {
    try {
        const { id: taskID } = req.params;

        const tasks = await task.findOneAndUpdate({_id: taskID}, req.body,
            {
            new: true,
            runValidators: true,
        })
        if(!tasks){
            return res.status(404).json({msg: `No task with id ${taskID}`});
        }
        res.status(200).json({tasks});

    } catch (error) {
        res.status(500).json({msg: error});          

    }

};


module.exports = {
    getAllTasks,
    createTasks,
    getTasks,
    updateTasks,
    deleteTasks,
};