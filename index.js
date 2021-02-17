const http = require('http');

// const hostname = '127.0.0.1';
const port = process.env.PORT || 5000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(`
            <!DOCTYPE html>
            <html lang="en">
                <head>
                    <meta charset="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <title>Zzzzz...</title>
                    <style>
                        body {
                            background: rgb(39, 39, 39);
                            display: flex;
                            flex-flow: column;
                            justify-content: center;
                            align-items: center;
                        }
                        h1 {
                            font-size: 72px;
                            font-family: Arial, Helvetica, sans-serif;
                            background: linear-gradient(129deg, rgba(0,252,245,1) 0%, rgba(0,137,255,1) 100%);
                            -webkit-text-fill-color: transparent;
                            -webkit-background-clip: text;
                        }
                        h3 {
                            font-size: 30px;
                            font-family: Arial, Helvetica, sans-serif;
                            background: linear-gradient(129deg, rgba(52,215,205,1) 0%, rgba(34,194,223,1) 52%, rgba(0,155,255,1) 100%);
                            -webkit-text-fill-color: transparent;
                            -webkit-background-clip: text;
                        }
                        span {
                            font-size: 30px;
                            font-family: Arial, Helvetica, sans-serif;
                            background: linear-gradient(129deg, rgba(252,0,30,1) 0%, rgba(0,155,255,1) 100%);
                            -webkit-text-fill-color: transparent;
                            -webkit-background-clip: text;
                        }
                    </style>
                </head>
                <body>
                    <h1>Hello You!</h1>
                    <h3>This page is sleeping right now. <span>Visit later?</span></h3>
                </body>
            </html>
        `);
});

server.listen(port, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
