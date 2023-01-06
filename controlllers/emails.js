import express from 'express';
import mongoose from 'mongoose';
import Email from '../models/email.js';

const router = express.Router();

//Get All Todos
export const getEmails = async (req, res) => { 
    try {
        const Emails = await Email.find();
                
        res.status(200).json(Emails);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

//Get Single Todo
// export const getTodo = async (req, res) => { 
//     const { id } = req.params;

//     try {
//         const todo = await Todo.findById(id);
        
//         res.status(200).json(todo);
//     } catch (error) {
//         res.status(404).json({ message: error.message });
//     }
// }

//Create a New Todo
export const createEmail = async (req, res) => {
    const { name, email,project,message} = req.body;

    const newEmail = new Email({ name, email,project,message })

    try {
        await newEmail.save();

        res.status(201).json({message:"Email Data created successfully"});
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

// Delete The todo
// export const deleteTodo = async (req, res) => {
//     const { id } = req.params;

//     if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No Todo with id: ${id}`);

//     await Todo.findByIdAndRemove(id);

//     res.json({ message: "Todo deleted successfully." });
// }

//Update Todo
// export const updateTodo = async (req, res) => {
//     const { id } = req.params;
//     const { title, status,due_Date } = req.body;
//     if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No todo with id: ${id}`);

//     const updatedTodo = { title, status,due_Date, _id: id };

//     await Todo.findByIdAndUpdate(id, updatedTodo, { new: true });

//     res.json({updateTodo:updatedTodo,message:"Todo Updated Successfully"});
// }



export default router;