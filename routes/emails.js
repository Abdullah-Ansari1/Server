import express from 'express';

import { createEmail,getEmails,deleteEmail, updateEmail, updateNotification } from '../controlllers/emails.js';

const router = express.Router();

router.post('/adminRoute', getEmails);
router.post('/', createEmail);
// router.get('/:id', getTodo);
router.patch('/:id', updateEmail);
router.patch('/notification_status/:id', updateNotification);
router.delete('/:id', deleteEmail);

export default router;