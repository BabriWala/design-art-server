const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());






app.listen(port, () => {
    console.log('Course Server running on port', port);
})