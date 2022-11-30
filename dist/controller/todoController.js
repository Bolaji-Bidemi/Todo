"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeTodo = exports.updateTodo = exports.createTodo = exports.getAllTodo = void 0;
const todoModel_1 = __importDefault(require("../model/todoModel"));
//get all todos
const getAllTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const todo = yield todoModel_1.default.find();
        return res.status(200).json({ todo });
    }
    catch (err) {
        return res.status(500).json({
            message: 'internal server error',
            routes: "todo/get-todo"
        });
    }
});
exports.getAllTodo = getAllTodo;
//create todos
const createTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { description, status } = req.body;
        const todo = yield todoModel_1.default.find();
        console.log(todo);
        // if(todo){
        //     const todos = await Todo.create({
        //         description,
        //         status
        //     })
        //     return res.status(201).json({
        //         status: 'success',
        //         data: todos
        //     })
        // }
        // return res.status(400).json({
        //     todo
        // })
    }
    catch (err) {
        return res.status(500).json({
            message: 'internal server error',
            routes: "todo/create"
        });
    }
});
exports.createTodo = createTodo;
//update todos
const updateTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const { description, status } = req.body;
        const updatetodo = yield todoModel_1.default.findOne({ "_id": id });
        if (updatetodo) {
            const todo = yield todoModel_1.default.updateOne({ "_id": id }, {
                description, status
            });
            return res.status(200).json({
                status: 'updated successfully',
                data: todo
            });
        }
        return res.status(400).json({
            message: "unknown data"
        });
    }
    catch (err) {
        return res.status(500).json({
            message: 'internal server error',
            routes: 'todo/update-todo/:id'
        });
    }
});
exports.updateTodo = updateTodo;
//delete todos
const removeTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const removedtodo = yield todoModel_1.default.findOneAndDelete({ "_id": id });
        return res.status(200).json({
            message: "deleted successfully"
        });
    }
    catch (err) {
        return res.status(500).json({
            message: 'internal server error',
            routes: 'todo/remove-todo/:id'
        });
    }
});
exports.removeTodo = removeTodo;
