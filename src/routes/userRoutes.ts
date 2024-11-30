import { Router } from 'express';
import { viewAvailableItems, bookGroceryItems } from '../controller/userController';

const router = Router();

// User Routes
router.get('/grocery-items', viewAvailableItems);
router.get('/orders', bookGroceryItems);

export default router;
