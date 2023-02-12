import Router from "express-promise-router";

const router = Router();
import { 
    createProduct, 
    listAllProducts, 
    findProductById, 
    updateProductById, 
    deleteProductById 
} from "../controllers/product.controller.js";

router.post('/products', createProduct);

router.get('/products', listAllProducts);

router.get('/products/:id', findProductById);

router.put('/products/:id', updateProductById);

router.delete('/products/:id', deleteProductById);

export default router;