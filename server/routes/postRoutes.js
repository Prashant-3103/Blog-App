import express from 'express'
const router = express.Router();
import {createPost, deletePost, updatePost} from '../controllers/postControllers'
import { authGuard, adminGuard } from '../middleware/authMiddleWare';
router.post('/', authGuard, createPost)
router.route('/:slug').put( authGuard, updatePost).delete(authGuard,deletePost);

export default router
