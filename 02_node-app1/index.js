// const http = require('http');
// const fs = require('fs');
// const path = require('path');
// require('dotenv').config();
// const PORT = process.env.PORT || 5000;

// const app = http.createServer((request, response) => {
//     // response.end("<h1>Hello User...</h1");
//     fs.readFile(path.join(__dirname, 'public', 'index.html'), (error, content) => {
//         if (error) {
//             throw error;
//         }
//         response.end(content);
//     })
// })

// app.listen(PORT, () => {
//     console.log(`Server listening on http://localhost:${PORT}`);
// })

//-------------------------------------------------------------------------------

// const http = require('http');
// const fs = require('fs');
// const path = require('path');
// require('dotenv').config();
// const PORT = process.env.PORT || 5000;

// const app = http.createServer((request, response) => {

//     // console.log(request.url);

//     response.writeHead(200,{
//         // "Content-Type":"text/plain"
//         "Content-Type":"text/html"
//     })

//     if (request.url === "/") {
//         fs.readFile(path.join(__dirname, 'public', 'index.html'), (error, content) => {
//             if (error) {
//                 throw error;
//             }
//             response.end(content);
//         })
//     } else if (request.url === "/about") {
//         fs.readFile(path.join(__dirname, 'public', 'about.html'), (error, content) => {
//             if (error) {
//                 throw error;
//             }
//             response.end(content);
//         })
//         }else{
//             fs.readFile(path.join(__dirname, 'public', '404-error.html'), (error, content) => {
//                 if (error) {
//                     throw error;
//                 }
//                 response.end(content);
//             })
//         }
// })

// app.listen(PORT, () => {
//     console.log(`Server listening on http://localhost:${PORT}`);
// })
//---------------------------------------------------------------------------

// const http = require('http');
// const fs = require('fs');
// const path = require('path');
// require('dotenv').config();
// const PORT = process.env.PORT || 5000;

// const app = http.createServer((req, res) => {

//     const filePath = path.join(__dirname, 'public', req.url === "/" ? 'index.html' : req.url+'.html');

//     fs.readFile(filePath, (err, content) => {
//         if (err) {
//             fs.readFile(path.join(__dirname, 'public', '404-error.html'), (err, data) => {
//                 if (err) {
//                     res.writeHead(500);
//                     res.end("error...")
//                 } else {
//                     res.writeHead(404, { 'Content-Type': 'text/html' });
//                     res.end(data);
//                 }

//             })
//         } else {
//             res.writeHead(200, { 'Content-Type': 'text/html' })
//             res.end(content);
//         }
//     })
// })

// app.listen(PORT, () => {
//     console.log(`Server listening on http://localhost:${PORT}`);
// })

//---------------------------------------------------------------------------

// const http = require('http');
// const fs = require('fs');
// const path = require('path');
// require('dotenv').config();
// const PORT = process.env.PORT || 5000;

// const app = http.createServer((req, res) => {

//     let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url)

//     let ext = path.extname(filePath);
//     if (!ext) {
//         filePath += ".html";
//     }

//     let content_type = null;
//     switch (ext) {
//         case '.html':
//             content_type = "text/html"
//             break;
//         case '.css':
//             content_type = "text/css"
//             break;
//         case '.js':
//             content_type = "text/javascript"
//             break;
//         default:
//             content_type = "text/html"
//     }

//     fs.readFile(filePath, (err, content) => {
//         if (err) {
//             fs.readFile(path.join(__dirname, 'public', '404-error.html'), (err, data) => {
//                 if (err) {
//                     res.writeHead(500);
//                     res.end("error...")
//                 } else {
//                     res.writeHead(404, { 'Content-Type': content_type });
//                     res.end(data);
//                 }

//             })
//         } else {
//             res.writeHead(200, { 'Content-Type': content_type })
//             res.end(content);
//         }
//     })
// })

// app.listen(PORT, () => {
//     console.log(`Server listening on http://localhost:${PORT}`);
// })
//-----------------------------------------------------------------------------

const http = require('http');
const fs = require('fs');
const path = require('path');
require('dotenv').config();
const PORT = process.env.PORT || 5000;

const app = http.createServer((req, res) => {

    let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url)

    let ext = path.extname(filePath);
    if (!ext) {
        filePath += ".html";
    }

    let content_type = null;
    switch (ext) {
        case '.html':
            content_type = "text/html"
            break;
        case '.css':
            content_type = "text/css"
            break;
        case '.js':
            content_type = "text/javascript"
            break;
        default:
            content_type = "text/html"
    }

    fs.readFile(filePath, (err, content) => {
        if (err) {
            fs.readFile(path.join(__dirname, 'public', '404-error.html'), (err, data) => {
                if (err) {
                    res.writeHead(500);
                    res.end("error...")
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