import {Request, Response} from 'express'
import Todo from '../model/todoModel'


//get all todos
export const getAllTodo = async(req: Request, res: Response) => {
    try{
        const todo = await Todo.find()
        return res.status(200).json({todo})
    }catch(err){
        return res.status(500).json({
            message:'internal server error',
            routes:"todo/get-todo"
        })
    }

}


//create todos
export const createTodo = async (req: Request, res: Response) => {
    try{
        const {description, status} = req.body;
        const todo = await Todo.find();

        
        if(todo){
            const todos = await Todo.create({
                description,
                status
            })
            return res.status(201).json({
                status: 'success',
                data: todos
            })
        }
        return res.status(400).json({
            todo
        })
    }catch(err){
        return res.status(500).json({
            message:'internal server error',
            routes:"todo/create"
        })
    }
}

//update todos
export const updateTodo = async (req:Request, res:Response) => {
    try{
        const id = req.params.id;
 const {description, status} = req.body;
 const updatetodo = await Todo.findOne({"_id": id});
 if(updatetodo){
    const todo = await Todo.updateOne({"_id": id},{
        description, status
    })
    return res.status(200).json({
        status: 'updated successfully',
        data: todo
    })
    }
    return res.status(400).json({
        message: "unknown data"
     }) 
}catch(err){
        return res.status(500).json({
            message: 'internal server error',
            routes: 'todo/update-todo/:id'
         })  
    }
}

//delete todos
export const removeTodo = async (req:Request, res:Response) => {
    try{
        const id = req.params.id;
        const removedtodo = await Todo.findOneAndDelete({"_id": id})
        return res.status(200).json({
           message: "deleted successfully"
        })
       
    }catch(err){
        return res.status(500).json({
            message: 'internal server error',
            routes: 'todo/remove-todo/:id'
         })
    }
}