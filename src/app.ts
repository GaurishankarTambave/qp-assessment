import express from 'express';
import bodyParser from 'body-parser';
import groceryRoutes from './routes/groceryRoutes';
import inventoryRoutes from './routes/inventoryRoutes';
import userRoutes from './routes/userRoutes';
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/api', groceryRoutes);
app.use('/api', inventoryRoutes);
app.use('/api', userRoutes)

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
