import { Request, Response } from 'express';
import db from '../models/db';

// Add new grocery item
export const addGroceryItem = (req: Request, res: Response) => {
    const { name, price, quantity, descriptions } = req.body;
    const query = 'INSERT INTO grocery_items (name, price, quantity, descriptions) VALUES (?, ?, ?, ?)';
    
    db.query(query, [name, price, quantity, descriptions], (err) => {
        if (err) return res.status(500).send(err);
        res.status(201).send('Grocery item added successfully.');
    });
};

// Get all grocery items
export const getGroceryItems = (req: Request, res: Response) => {
    const query = 'SELECT * FROM grocery_items';
    
    db.query(query, (err, results) => {
        if (err) return res.status(500).send(err);
        res.status(200).json(results);
    });
};

// Update grocery item details
export const updateGroceryItem = (req: Request, res: Response) => {
    const { id } = req.params;
    const { name, price, quantity, descriptions } = req.body;
    const query = 'UPDATE grocery_items SET name=?, price=?, quantity=?, descriptions=? WHERE id=?';
    
    db.query(query, [name, price, quantity, descriptions, id], (err) => {
        if (err) return res.status(500).send(err);
        res.send('Grocery item updated successfully.');
    });
};

// Delete grocery item
export const deleteGroceryItem = (req: Request, res: Response) => {
    const { id } = req.params;
    const query = 'DELETE FROM grocery_items WHERE id=?';
    
    db.query(query, [id], (err) => {
        if (err) return res.status(500).send(err);
        res.send('Grocery item deleted successfully.');
    });
};
