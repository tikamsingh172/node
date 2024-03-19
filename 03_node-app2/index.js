const http = require('http');
const fs = require('fs');
const path = require('path');
require('dotenv').config();
const PORT = process.env.PORT || 5000;

const app = http.createServer((req, res) => {

    let base_name = path.basename(req.url);
    let content_type = 'text/plain';

    switch (base_name) {
        case 'style.css':
            filePath = path.join(__dirname, 'src/css/style.css');
            content_type = "text/css";
            break;
        case 'script.js':
            filePath = path.join(__dirname, 'src/js/script.js');
            content_type = "text/javascript";
            break;
        case 'bootstrap.min.css':
            filePath = path.join(__dirname, 'public/bootstrap-5.3.3/bootstrap.min.css');
            content_type = "text/css";
            break;
        case 'bootstrap.bundle.min.js':
            filePath = path.join(__dirname, 'public/bootstrap-5.3.3/bootstrap.bundle.min.js');
            content_type = "text/javascript";
            break;
        default:
            filePath = path.join(__dirname, 'src/pages', req.url === '/' ? 'index.html' : req.url + '.html');
            content_type = "text/html";
    }


    fs.readFile(filePath, (err, content) => {
        if (err) {
            fs.readFile(path.join(__dirname, 'src/pages', '404-error.html'), (err, data) => {
                if (err) {
                    res.writeHead(500);
                    res.end("Error...")
                } else {
                    res.writeHead(404, { 'Content-Type': content_type });
                    res.end(data);
                }

            })
        } else {
            res.writeHead(200, { 'Content-Type': content_type })
            res.end(content);
        }
    })
})

app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
})