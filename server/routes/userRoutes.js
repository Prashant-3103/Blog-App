import express from 'express'
const router = express.Router();
import {loginUser, registerUser, userProfile, updateProfile, updateProfilePicture} from '../controllers/UserController'
import { authGuard } from '../middleware/authMiddleWare';
router.post('/register',registerUser)
router.post('/login',loginUser)
router.get('/profile', authGuard,userProfile)
router.put('/updateProfile',authGuard,updateProfile)
router.put('/updateProfilePicture',authGuard,updateProfilePicture)

export default router
 