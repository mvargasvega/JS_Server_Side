const express = require('express');
const app = express();
const port = 3000;

app.listen(port, () => console.log('listening at port ' + port));

// anything I put here is accessible by the public
app.use(express.static('public'));