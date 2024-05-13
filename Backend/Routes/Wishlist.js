import { Router } from 'express'
import { addToWishlist, removeFromWishlist, getWishlistProducts } from '../Controller/Wishlist.js'
import { isCustomerAuthenticated } from '../Middleware/Auth.js'

const router = Router()

router.post('/addToWishlist/:id', isCustomerAuthenticated, addToWishlist)
router.delete('/removeFromWishlist/:id', isCustomerAuthenticated, removeFromWishlist)
router.get('/getWishlistProducts', isCustomerAuthenticated, getWishlistProducts)

export default router