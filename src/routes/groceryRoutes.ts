import { Router } from 'express';
import { addGroceryItem, getGroceryItems, updateGroceryItem, deleteGroceryItem } from '../controller/groceryController';

const router = Router();

// Admin Routes
router.post('/admin/grocery-items', addGroceryItem);
router.get('/admin/grocery-items', getGroceryItems);
router.put('/admin/grocery-items/:id', updateGroceryItem);
router.delete('/admin/grocery-items/:id', deleteGroceryItem);

export default router;
