import { Router } from 'express'
import { postUserDetails, getUserDetails, getDetails, updateDetail, deleteDetail } from '../Controller/UserDetails.js'
import { isCustomerAuthenticated } from '../Middleware/Auth.js'

const router = Router()

router.post('/postUserDetails', isCustomerAuthenticated, postUserDetails)
router.get('/getUserDetails', isCustomerAuthenticated, getUserDetails)
router.get('/getDetail/:id', isCustomerAuthenticated, getDetails)
router.put('/updateDetail/:id', isCustomerAuthenticated, updateDetail)
router.delete('/deleteDetail/:id', isCustomerAuthenticated, deleteDetail)

export default router