import { Request, Response } from 'express'; 
import db from '../models/db'; 
// View available grocery items for users 
export const viewAvailableItems = (req: Request, res: Response) => {     
    const query = 'SELECT * FROM grocery_items WHERE quantity > 0';          
    db.query(query, (err, results) => {         
        if (err) return res.status(500).send(err);         
        res.status(200).json(results);     
    }); 
}; 

// Book multiple grocery items in a single order 
export const bookGroceryItems = (req: Request, res: Response) => {     
    const { items, userId } = req.body; 
    // Assuming userId is passed in the request body     
    // Check if all items are available before booking     
    const checkAvailabilityQuery = 'SELECT * FROM grocery_items WHERE id IN (?) AND quantity > 0';          
    db.query(checkAvailabilityQuery, [items.map((item: { id: string }) => item.id)], (err, results: any) => {         
        if (err) return res.status(500).send(err);                  
        // Check if all items are available         
        if (results.length !== items.length) {             
            return res.status(400).send('One or more items are not available.');        
         }            
         // You should implement an orders table and logic to handle orders properly.         
         const orderQuery = 'INSERT INTO orders (userId, items) VALUES (?, ?)';                 
        db.query(orderQuery, [userId, JSON.stringify(items)], (err) => {             
            if (err) return res.status(500).send(err);             
            res.status(201).send('Order placed successfully.');         
        });     
    }); 
};