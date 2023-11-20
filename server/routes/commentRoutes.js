import express from 'express'
const router = express.Router();
import { createComment, deleteComment, updateComment } from '../controllers/commentControllers'
import { authGuard, adminGuard } from '../middleware/authMiddleWare';
router.post('/',authGuard, createComment)
router.put('/:commentId',authGuard, updateComment)
router.delete('/:commentId',authGuard, deleteComment)


export default router
