const express = require('express');
import connectDB from './config/db';
const dotenv = require('dotenv');
import path from 'path'
import cors from 'cors'
 import { errorResponseHandler, invalidPathHandler } from './middleware/errorHandler';
//routes
import userRoutes from './routes/userRoutes'
import postRoutes from './routes/postRoutes'
import commentRoutes from './routes/commentRoutes'
import postCategoriesRoutes from './routes/postCategoriesRoutes'
dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cors())

app.get('/', (req, res) => {
  res.send('Server is running');
});

app.use('/api/users',userRoutes)
app.use('/api/posts',postRoutes)
app.use('/api/comments',commentRoutes)
app.use('/api/post-categories', postCategoriesRoutes )
//static assets


app.use("/uploads", express.static(path.join(__dirname,"/uploads")));
app.use(invalidPathHandler)
app.use(errorResponseHandler)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
