import { isAdminAuthenticated, isCustomerAuthenticated } from '../Middleware/Auth.js'
import { Router } from 'express'
import { addReview, displayReview } from '../Controller/Review.js'

const router = Router()

router.post('/addReview/:id', isCustomerAuthenticated, addReview)
router.get('/displayReview/:id', displayReview)

export default router