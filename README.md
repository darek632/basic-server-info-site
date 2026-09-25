# Basic info site on a server using Node.js
Serving static web pages with node.js. 
Creating server using http module.
Creating a server using createServer method on http.
Creating a URL using the URL method, transforming it from a pure string from HTTP request to an interactive URL with  file route, host etc.
Using file system to locate the requested file (for example index.html or about.html) to provide to the server which will be used by the client to access whatever it's requesting.
Listening on the port for any requests, thus making the server 'live'.

## Skills demonstrated
- Creating a server and listening for requests on a port with http node module
- Reading file contents using the fs node module
- Responding to HTTP requests by serving different html pages according to the requested URL and joining filepath with file name. 


### Instructions
Since GitHub pages only serves static files it does not run Node.js servers. 
To test this open the repo locally and in terminal run: 
node index.js
Then on your browser you can test the work by entering http://localhost:8080/ or any other relevant path. 
Alternatively, on another terminal window you can use "curl http://localhost:8080/" to simulate a server request.
