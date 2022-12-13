const express = require('express');
const app = express();
const { PORT } = require('./config/serverConfig');

app.use(express.json());

const setupAndStartServer = async () => {
    app.listen(PORT,()=> {
        console.log(`server started at ${PORT}`);
    })
};

setupAndStartServer();