const express = require('express');
const path = require('path');
const server = express();
server.use(express.static(path.resolve(__dirname, 'fe')));
server.get('*', (request, response) => response.sendFile(`fe/index.html`, { root: __dirname }));
server.listen(process.env.PORT || 4500, () => console.log('Server running on port 4500'));