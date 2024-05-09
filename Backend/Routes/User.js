import { Router } from 'express'
import { handleLogin, handleRegister, verifyOtp, logoutUser, logoutAdmin, resetPassword } from '../Controller/User.js'

const router = Router()

router.post('/login', handleLogin)
router.post('/register', handleRegister)
router.post('/verify', verifyOtp)
router.get('/logoutUser', logoutUser)
router.get('/logoutAdmin', logoutAdmin)
router.put('/resetPassword', resetPassword)

export default router