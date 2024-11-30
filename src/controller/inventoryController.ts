import { Request, Response } from 'express'; import db from '../models/db'; 
// Update inventory levels for a grocery item 
export const updateInventory = (req: Request, res: Response) => {  
    const { id } = req.params;     const { quantity } = req.body;     
    const query = 'UPDATE grocery_items SET quantity=? WHERE id=?';          
    db.query(query, [quantity, id], (err) => {         
        if (err) return res.status(500).send(err);         
        res.send('Inventory level updated successfully.');     
    }); };