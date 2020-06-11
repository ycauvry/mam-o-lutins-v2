const express = require('express');
const mongoose = require('mongoose');
const mongooseCONNECT = require('./config/mongoose');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.use(express.json());

// DB Connection
mongooseCONNECT(mongoose, process.env.DB_URI);

// Use Routes
const assistant = require('./routes/api/assistant');
const child = require('./routes/api/child');
const contract = require('./routes/api/contract');
const planning = require('./routes/api/planning');
const alteration = require('./routes/api/alteration');

app.use('/api/assistant', assistant);
app.use('/api/child', child);
app.use('/api/contract', contract);
app.use('/api/planning', planning);
app.use('/api/alteration', alteration);

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server running on port ${port}`));
