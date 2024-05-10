import express from 'express';
import 'dotenv/config';
import http from 'http';
// import cors from 'cors';
import chalk from 'chalk';
import connectDB from './mongodb/connect.js';
import errorHandler from './middlewares/errorHandler.js';

import candidateRoutes from './routes/candidateRoutes.js';
import questionRoutes from './routes/questionRoutes.js';
import assessmentRoutes from './routes/assessmentRoutes.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

connectDB();

app.get('/',(req,res)=>{
    res.json({message:'API is running'})
});

app.use('/api/candidates',candidateRoutes);
app.use('/api/questions',questionRoutes);
app.use('/api/assessments',assessmentRoutes);

app.use(errorHandler);

const server = http.createServer(app);

const port = process.env.PORT || 5000
server.listen(port,()=>{
    console.log(`Server is running on port: ${chalk.cyan(port)}`);
})