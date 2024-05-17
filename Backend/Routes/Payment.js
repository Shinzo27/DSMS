import {Router} from 'express'
import { checkout, paymentVerification } from '../Controller/Payment.js'

const router = Router()

router.post('/checkout', checkout)
router.post('/paymentVerification', paymentVerification)

export default router