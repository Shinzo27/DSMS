import { Router } from 'express'
import { addProduct, displayProduct, listProducts, getCategoryProduct, deleteProduct, updateProduct } from '../Controller/Product.js'
import { isAdminAuthenticated, isCustomerAuthenticated } from '../Middleware/Auth.js'

const router = Router()

router.post('/addProduct', isAdminAuthenticated, addProduct)
router.get('/listProduct', isAdminAuthenticated, listProducts)
router.get('/displayProduct', displayProduct)
router.get('/listCategoryProduct/:category', getCategoryProduct)
router.put('/updateProduct/:id', isAdminAuthenticated, updateProduct)
router.delete('/deleteProduct/:id', isAdminAuthenticated, deleteProduct)

export default router