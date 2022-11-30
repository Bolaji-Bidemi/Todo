import express from 'express'
import { createTodo, getAllTodo, removeTodo, updateTodo } from '../controller/todoController'


const router = express.Router()


router.post('/create-todo', createTodo)
router.get('/get-todo', getAllTodo)
router.patch('/update-todo:id', updateTodo)
router.delete('/delete-todo:id', removeTodo)

export default router