import express from 'express';

import { createEmail,getEmails } from '../controlllers/emails.js';

const router = express.Router();

router.post('/adminRoute', getEmails);
router.post('/', createEmail);
// router.get('/:id', getTodo);
// router.patch('/:id', updateTodo);
// router.delete('/:id', deleteTodo);

export default router;