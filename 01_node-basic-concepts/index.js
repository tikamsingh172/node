/*
Default wrapper function in node.js:-
***********************************

(function(exports,require,module,__filename,__dirname){

// your module code actually goes here.

})(exports,require,module,__filename,__dirname)
*/

console.log(
    // "exports:", exports,
    // "\nrequire:", require,
    // "\nmodule:", module,
    // "\n__filename:", __filename,
    // "\n__dirname:", __dirname
)

/*
 Module in node.js:-
******************
1.core modules
2.local modules
3.third-party modules
 */

/* third-party modules */
/*=====================*/

/*npm modules*/

// const color = require('cli-color')
// console.log(color.red('Hello User !'))


/* local modules */
/*=====================*/

const auth = require('./auth.js')
// console.log(auth)
// auth.register('Tikam Singh')
// auth.login('Tikam Singh', '12345')


/* core modules */
/*==============*/

/* 1. path module*/
/*--------------*/
// const path = require('path')

/* path.dirname() */
// console.log('Folder Name:', __dirname);
// console.log('Folder Name:', path.dirname(__filename));

/* path.basename() */
// console.log('File Name with extension name:', path.basename(__filename))
// console.log('File Name without extension name:', path.basename(__filename,'.js'))

// console.log(path.basename('C:/Users/Chaudhary/Desktop/node/02_module.js'))
// console.log(path.basename('C:/Users/Chaudhary/Desktop/node'))
// console.log(path.basename('C:/Users/Chaudhary/Desktop/node/02_module.js', '.js'))
// console.log(path.basename('C:/Users/Chaudhary/Desktop/node/02_module.js', '.JS'))

/* path.extname() */
// console.log('Extension name:', path.extname(__filename))

// console.log(path.extname('index'))
// console.log(path.extname('.index'))
// console.log(path.extname('index.'))
// console.log(path.extname('index.html'))
// console.log(path.extname('.index.md'))
// console.log(path.extname('index.html.js'))


/* path.parse() */
// console.log('parse:', path.parse(__filename))


/* path.join() */
// console.log('join:', path.join(__dirname, 'src', 'app.js'))
// console.log(path.join('/foo', 'bar', 'baz/asdf', 'quux'))
// console.log(path.join('/foo', 'bar', 'baz/asdf', 'quux', '..'))



/* 2. File system:- fs module */
/*----------------------------*/

const path = require('path')
const fs = require('fs')

/* make a directory */
/* fs.mkdir() */

// fs.mkdir(path.join(__dirname, 'test'), (error) => {
//     if (error) {
//         // console.log('Something went wrong !')
//         // console.log(error)
//         // return;
//         /*or*/
//         // return console.error(error)
//         /*or*/
//         throw error;
//     }
//     console.log('Directory created successfully...')
// })


// fs.mkdir(path.join(__dirname, 'test'), { recursive: true }, (error) => {
//     if (error) {
//         console.log('Something went wrong !')
//         return console.error(error)
//     }
//     console.log('Directory created successfully...')
// })


/* asynchronously create a file */
/* fs.writeFile() */

// fs.writeFile(path.join(__dirname, 'test', 'test.txt'), 'Hello nodejs\n', (error) => {
//     if (error) {
//         throw error;
//     }
//     console.log('File created...')
// })


/* asynchronously append the data of the given file */
/* fs.appendFile() */

// let data = 'add more data\n';
// fs.appendFile(path.join(__dirname, 'test', 'test.txt'), data, (error) => {
//     if (error) {
//         throw error;
//     }
//     console.log('added more data...')
// })


/* asynchronously read the contents of a given directory */
/* fs.readdir() */

/* Get the filenames in the given directory */

// fs.readdir(path.join(__dirname, 'test'), (error, files) => {
//     if (error) {
//         console.log(error)
//     } else {
//         console.log("Given directory filenames:");
//         files.forEach((file) => console.log(file))
//     }
// })


/* asynchronously read the entire contents of a given file */
/* fs.readFile() */

// fs.readFile(path.join(__dirname, 'test', 'test.txt'), 'utf8', (error, data) => {
//     if (error) {
//         return console.error(error)
//     }
//     /* without second parameter:- encoding: 'utf8' (default encoding value null) */
//     // console.log(data)
//     // console.log(data.toString())
//     /*or*/
//     // const content = Buffer.from(data)
//     // console.log(content.toString())

//     /* with second parameter */
//     console.log(data)
// })



/* 3. Os module */
/*---------------*/

const os = require('os')

// console.log('os name:', os.type())
// console.log('os platform:', os.platform())
// console.log('CPU architecture:', os.arch())
// console.log('CPU details:', os.cpus())
// console.log('Free memory:', os.freemem())
// console.log('Total memory:', os.totalmem())
// console.log('uptime:', os.uptime())


/* 4. Events module */
/*-----------------*/

const EventEmitter = require('events')
const eventEmitter = new EventEmitter()

// eventEmitter.on('start', (username) => {
//     console.log(`Hello! '${username}' Your Time Start Now...`)
// })
// eventEmitter.emit('start', "Tikam")

class Auth extends EventEmitter {
    register(username) {
        console.log('Registration Successfull...')
        this.emit('register', username)
    }
}
const Authentication = new Auth()
/** listen **/
/* verify email*/
Authentication.on('register', (username) => {
    console.log(`Sending verify email to: ${username}`)
})

/* welcome email*/
Authentication.on('register', (username) => {
    console.log(`Sending welcome email to: ${username}`)
})

// auth.register("Tikam Singh")


/* 5. http module */
/*----------------*/
const http = require('http');
require('dotenv').config();
const PORT = process.env.PORT || 5000;
const HOSTNAME = '127.0.0.1';

// create server
const app = http.createServer((request, response) => {

    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain')
    response.end("Welcome User !")
    /*or*/
    // response.statusCode = 200;
    // response.setHeader('Content-Type', 'text/html')
    // response.end("<h1>Welcome User !</h1>")
    /*or*/
    // response.writeHead(200, 'OK', { 'Content-Type': 'text/html' })
    // response.end("<h1>Welcome User !</h1>")
})

// app.listen(PORT, HOSTNAME, () => {
//     console.log(`Server running at http://${HOSTNAME}:${PORT}`)
// });

/*or*/

// app.listen(PORT, () => {
//     console.log(`Server running at http://localhost:${PORT}`)
// });
