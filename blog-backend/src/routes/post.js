import express from "express";
import authmiddleware from '../middleware/middleware.js';
import { createPost, getAllPost, getPost, updatePost, deletePost } from '../controller/postController.js';

const router = express.Router();

router.post('/', authmiddleware, createPost);
router.get('/', getAllPost);
router.get('/:id', getPost);
router.put('/:id', authmiddleware, updatePost);
router.delete('/:id', authmiddleware, deletePost);

export default router;