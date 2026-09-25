// Node.js first server

const http = require('http');
const fs = require('fs');
const path = require('path'); 

const PORT = 8080;

console.log("Script started");

const routes = {
    '/' : 'index.html',
    '/about' : 'about.html',
    '/contact-me' : 'contact-me.html',
}

const server = http.createServer((req,res) => {
    // request object contains all the necessary info we need, like an event object
    // turn the string into a proper URL object so we can extract parts and interact with it.

    //myURL takes in the route and base 
    const myURL = new URL(req.url,`http://${req.headers.host}`);

    const fileName = routes[myURL.pathname] || '404.html';
    
    if (fileName === '404.html') {
  console.log('404 triggered for path:', myURL.pathname);
}

    // connecting the route to filepath
    const filePath = path.join(__dirname,fileName);
    
    fs.readFile(filePath,(err,content)=> {
        if(err) { 
            //once the readfile is processed it will pass two objects to callback, err and content.
            // if err contains something this means the error will get processed, otherwise it will be the actual content

            res.writeHead(500,{'Content-type':'text/plain'});
            res.end('500 - Internal Server Error');

            return;
        }

        const statusCode = fileName === '404.html' ? 404 : 200;

        res.writeHead(statusCode,{'Content-Type': 'text/html'});
        console.log('The page is at route:', fileName);
        res.end(content);

    })
});

server.listen(PORT,()=> {
    console.log(`Server running at http://localhost:${PORT}`);
})

