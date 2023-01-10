import express from 'express';
import mongoose from 'mongoose';
import Email from '../models/email.js';

const router = express.Router();

//Get All Emails
export const getEmails = async (req, res) => {
    try {
        const { token } = req.body;
        if (token === process.env.token) {
            const Emails = await Email.find();
            res.status(200).json(Emails);
        } else {
            res.status(401).json({ message: "Not authorized" });
        }
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

//Create a New Email
export const createEmail = async (req, res) => {
    const { name, email, project, Message } = req.body;

    const newEmail = new Email({ name, email, project, Message })

    try {
        await newEmail.save();

        res.status(201).json({ message: "Email Data created successfully" });
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

// Delete The Email
export const deleteEmail = async (req, res) => {
    const { id } = req.params;
    const { token } = req.body;
    if (token === process.env.token) {
        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No email with id: ${id}`);

        await Email.findByIdAndRemove(id);

        res.json({ message: "Todo deleted successfully." });
    } else {
        res.status(401).json({ message: "Not authorized" });
    }

}

// Update Todo
export const updateEmail = async (req, res) => {

    const { id } = req.params;
    const { name, email, project, Message, status, token } = req.body;
    if (token === process.env.token) {
        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No email with id: ${id}`);
        const updatedEmail = { name, email, project, Message, status, _id: id };
        await Email.findByIdAndUpdate(id, updatedEmail, { new: true });
        res.json({ updateEmail: updatedEmail, message: "Email Updated Successfully" });
    } else {
        res.status(401).json({ message: "Not authorized" });
    }
}
// Update Todo
export const updateNotification = async (req, res) => {

    const { id } = req.params;
    const { token,notification_status } = req.body;
    if (token === process.env.token) {
        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No email with id: ${id}`);
        const updatedEmail = { notification_status };
        await Email.findByIdAndUpdate(id, updatedEmail, { new: true });
        res.json({ updateEmail: updatedEmail, message: "Email Updated Successfully" });
    } else {
        res.status(401).json({ message: "Not authorized" });
    }
}



export default router;