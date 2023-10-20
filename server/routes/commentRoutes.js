import express from 'express'
const router = express.Router();
import { createComment } from '../controllers/commentControllers'
import { authGuard, adminGuard } from '../middleware/authMiddleWare';
router.post('/',authGuard, createComment)


export default router
