import { Router } from 'express'
import { addToCart, displayCartItems, removeCartItem } from '../Controller/Cart.js'
import { isCustomerAuthenticated } from '../Middleware/Auth.js'

const router = Router()

router.get('/displayCartItems', isCustomerAuthenticated, displayCartItems)
router.post('/addToCart/:id', isCustomerAuthenticated, addToCart)
router.delete('/removeItem/:id', isCustomerAuthenticated, removeCartItem)

export default router