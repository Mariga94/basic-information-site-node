const http = require('http');
const fs = require('fs');
const port = 8080;

const server = http.createServer((req,res) => {
    console.log(req.url,req.method);

    //set header content type
    res.setHeader('Content-Type','text/html');

    let path = './views/';
    switch(req.url) {
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
            case '/about':
                path += 'about.html';
                res.statusCode = 200;
                break;
                case '/contact-me':
                    path += 'contact-me.html';
                    res.statusCode = 200;
                    break;
                    default:
                        path += '404.html';
                        res.statusCode = 404;
                        break;
    }

    //send html file to browser
    fs.readFile(path,'utf-8', (err, data) => {
        if(err) {
            console.error(err);
            res.end()
        } else {
            res.write(data);
            res.end();
        }
    });
});




server.listen(port,'localhost',() => {
    console.log(`listening to port ${port}`)
})

