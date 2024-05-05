import { Router } from 'express'
import { handleLogin, handleRegister, verifyOtp } from '../Controller/User.js'

const router = Router()

router.post('/login', handleLogin)
router.post('/register', handleRegister)
router.post('/verify', verifyOtp)

export default router