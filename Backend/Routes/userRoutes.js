import express from 'express';
import {createUser , loginUser} from '../Controllers/userController'

const router = express.Router();

//signUp endpoint
router.post('/signup', createUser);

//signIn endpoint
router.post('/signin', loginUser)

export default router;
