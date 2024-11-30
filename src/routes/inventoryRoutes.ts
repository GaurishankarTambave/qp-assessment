import { Router } from 'express';
import { updateInventory } from '../controller/inventoryController';

const router = Router();

// Admin Routes to manage invetory levels
router.put('/admin/grocery-items/:id/invetory', updateInventory);

export default router;
