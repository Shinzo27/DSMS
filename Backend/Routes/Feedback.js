import { Router } from 'express'
import {isAdminAuthenticated, isCustomerAuthenticated} from '../Middleware/Auth.js'
import { addFeedback, getFeedback} from '../Controller/Feedback.js'

const router = Router()

router.post('/addFeedback', isCustomerAuthenticated, addFeedback)
router.get('/getFeedbacks', getFeedback)

export default router