const express = require('express');
const path = require('path');

const app = express();
const publicPath = path.join(__dirname, '..', 'public');
const port = 3000;

app.use(express.static(publicPath));

// Redirects all page refreshes for nonexistent HTML files to index.html. 
//* will match all unmatched routes.
app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => {
    console.log(`Server is up on port ${port}.`);
});