import express from 'express'
const router = express.Router();
import {} from '../controllers/UserController'
import { authGuard } from '../middleware/authMiddleWare';
import { createPostCategory, deletePostCategory, getAllPostCategories, updatePostCategory } from '../controllers/postCategoriesController';

router.route('/').post(authGuard, createPostCategory ).get(getAllPostCategories)
router.route('/:postCategoryId').put(authGuard, updatePostCategory).delete(authGuard, deletePostCategory)
export default router
