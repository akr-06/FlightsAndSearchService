const express = require('express');
const app = express();
const { PORT } = require('./config/serverConfig');

const ApiRoutes = require('./routes/index');


app.use(express.json());
app.use('/api',ApiRoutes);

const setupAndStartServer = async () => {
    app.listen(PORT,()=> {
        console.log(`server started at ${PORT}`);
        
    })
};

setupAndStartServer();