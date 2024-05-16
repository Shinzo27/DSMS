import {Router} from 'express'
import { checkout } from '../Controller/Payment.js'

const router = Router()

router.post('/checkout', checkout)

export default router