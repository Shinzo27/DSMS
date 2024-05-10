import { Router } from 'express'
import { postMessage, getMessage } from '../Controller/Message.js'
import { isAdminAuthenticated, isCustomerAuthenticated } from '../Middleware/Auth.js'

const router = Router()

router.post('/postMessage', isCustomerAuthenticated , postMessage)
router.get('/getAllMessages', isAdminAuthenticated, getMessage)

export default router