import { Router } from 'express'
import { handleLogin, handleRegister, verifyOtp, logoutUser, logoutAdmin, updatePassword } from '../Controller/User.js'

const router = Router()

router.post('/login', handleLogin)
router.post('/register', handleRegister)
router.post('/verify', verifyOtp)
router.get('/logoutUser', logoutUser)
router.get('/logoutAdmin', logoutAdmin)
router.put('/updatePassword/:email', updatePassword)

export default router