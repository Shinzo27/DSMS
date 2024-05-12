import { Router } from 'express'
import { addProduct, listProducts, getCategoryProduct, deleteProduct, updateProduct, getSingleProduct, updateStatus, updateStock } from '../Controller/Product.js'
import { isAdminAuthenticated, isCustomerAuthenticated } from '../Middleware/Auth.js'

const router = Router()

router.post('/addProduct', isAdminAuthenticated, addProduct)
router.get('/listProduct', isAdminAuthenticated, listProducts)
router.get('/listCategoryProduct/:category', getCategoryProduct)
router.put('/updateProduct/:id', isAdminAuthenticated, updateProduct)
router.delete('/deleteProduct/:id', isAdminAuthenticated, deleteProduct)
router.get('/getSingleProduct/:id', getSingleProduct)
router.put('/updateStock/:id', isAdminAuthenticated , updateStock )
router.put('/updateStatus/:id', isAdminAuthenticated , updateStatus )

export default router