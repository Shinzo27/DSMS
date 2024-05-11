import { Router } from 'express'
import { addProduct, displayProduct, listProducts, getCategoryProduct, deleteProduct } from '../Controller/Product.js'
import { isAdminAuthenticated, isCustomerAuthenticated } from '../Middleware/Auth.js'

const router = Router()

router.post('/addProduct', isAdminAuthenticated, addProduct)
router.get('/listProduct', isAdminAuthenticated, listProducts)
router.get('/displayProduct', displayProduct)
router.get('/listCategoryProduct/:category', getCategoryProduct)
router.delete('/deleteProduct/:id', isAdminAuthenticated, deleteProduct)

export default router