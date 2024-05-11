import { Router } from 'express'
import { getCategory, addCategory, updateCategory, deleteCategory } from '../Controller/Category.js'
import { isAdminAuthenticated } from '../Middleware/Auth.js';

const router = Router();

router.get('/getCategory', getCategory)
router.post('/addCategory', isAdminAuthenticated, addCategory)
router.put('/updateCategory/:id', isAdminAuthenticated, updateCategory)
router.delete('/deleteCategory/:id', isAdminAuthenticated, deleteCategory)

export default router