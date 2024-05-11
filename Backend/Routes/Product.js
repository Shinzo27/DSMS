import { Router } from 'express'
import { addProduct, listProducts, getCategoryProduct, deleteProduct, updateProduct, getSingleProduct } from '../Controller/Product.js'
import { isAdminAuthenticated, isCustomerAuthenticated } from '../Middleware/Auth.js'

const router = Router()

router.post('/addProduct', isAdminAuthenticated, addProduct)
router.get('/listProduct', isAdminAuthenticated, listProducts)
router.get('/listCategoryProduct/:category', getCategoryProduct)
router.put('/updateProduct/:id', isAdminAuthenticated, updateProduct)
router.delete('/deleteProduct/:id', isAdminAuthenticated, deleteProduct)
router.get('/getSingleProduct/:id', getSingleProduct)

export default router