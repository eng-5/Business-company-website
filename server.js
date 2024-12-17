var http = require('http');
 var fs = require('fs');
 serveStaticFile=(res,path, contentType,statusCode)=>{
     if(!statusCode) statusCode=200;
     fs.readFile(__dirname+path ,function(err,data){
        if(err){
            res.writeHead(400, {'content-type':'text/plain'});
            res.end('400 - Internal Error');
        }else{
            res.writeHead(statusCode,{'content-type' : contentType});
            res.end(data);
        }
     });
 }
http.createServer((req,  res)=>{
    var path=req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();
    switch(path){
        case "":serveStaticFile(res,"/index.html",'text/html',200)
            break;
        case "/blog":serveStaticFile(res,"/blog.html",'text/html',200)
           break;
        case "/post":serveStazticFile(res,"/post.html",'text/html',200)
                break;
            default: res.writeHead(404,{'content-type':'text/html'});
            res.end('<h2> 404 Page not found</h2>');
    }
}).listen(3000);
console.log('Server has started on port 3000');