import http from 'http'
import chalk from 'chalk'
const port = 4000;
const host = '127.0.0.1';

http.createServer(function(req, res){
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    res.end('Sample 123');
}).listen(port, host);

console.log(chalk.green('Server running on port ' + host + ':' + port));
